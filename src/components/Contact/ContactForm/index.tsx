"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { Calendar as CalendarIcon, ChromeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Dialog from "@radix-ui/react-dialog";

import Link from "next/link";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { SpotifyIcon } from "@/components/icons/SpotifyIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { ArrobaIcon } from "@/components/icons/ArrobaIcon";

let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
let whatsappRegex = /^[0-9\s]+$/;

const formSchema = z.object({
  name: z
    .string({
      required_error: "Você precisa preencher o seu nome",
      invalid_type_error: "Name must be a string",
    })
    .regex(regex, {
      message: "Nome deve conter apenas caracteres válidos.",
    }),
  contactWith: z
    .string({ required_error: "Você precisa selecionar uma opção." })
    .min(1, { message: "Você precisa selecionar uma opção." }),
  email: z
    .string({
      required_error: "Você precisa preencher o seu e-mail.",
    })
    .email({ message: "E-mail inválido" }),
  whatsapp: z
    .string({
      required_error: "Você precisa preencher o seu e-mail.",
    })
    .min(8, { message: "Telefone precisar ter no minimo 8 digitos." })
    .regex(whatsappRegex, { message: "Você so pode usar numeros." }),

  subject: z
    .string({ required_error: "Você precisa selecionar uma opção." })
    .min(1, { message: "Você precisa selecionar uma opção." }),
  message: z.string({
    required_error:
      "1002 caracteres Você ultrapassou o limite de 1000 caracteres",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // form.reset();
  }

  function handle() {
    console.log("SURTO: ", form.getValues());
    // form.reset();
  }

  return (
    <div className="w-full h-full flex justify-center items-center xl:items-start flex-col xl:flex-row pt-4 md:py-[104px] md:gap-10">
      <div className="w-full md:max-w-2xl rounded-[80px] bg-[#FCCF5C] px-4 py-12 md:p-[80px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-title font-semibold text-[32px] md:text-5xl text-center md:text-start">
            Fale com a gente
          </h1>
          <p className="text-base font-normal font-sans">
            Caso tenha dúvidas, sugestões, críticas ou qualquer outro assunto
            para falar, preencha os campos abaixo e entraremos em contato com
            você assim que possível.
          </p>
          <p className="text-base font-normal font-sans">
            Todos os campos são obrigatórios.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-10 "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2  flex-shrink">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.name ? "text-red-500" : ""
                      }`}
                    >
                      Nome Completo
                    </FormLabel>
                    <FormControl className="relative">
                      <Input
                        className={`w-full focus:outline-none font-sans text-base ${
                          form.formState.errors.name
                            ? "text-red-500 border-red-500 border-2"
                            : "focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border-2"
                        }`}
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                      Digite seu nome e sobrenome.
                    </FormDescription>
                    <FormMessage className="font-sans text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactWith"
                render={({ field }) => (
                  <FormItem className="space-y-2flex-shrink">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.contactWith ? "text-red-500" : ""
                      }`}
                    >
                      Como você prefere que a gente entre em contato com você?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${
                            form.formState.errors.contactWith
                              ? "text-red-500 border-red-500 border-2"
                              : " "
                          }`}
                        >
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="E-mail">E-mail</SelectItem>
                        <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                      Escolha um meio de contato.
                    </FormDescription>
                    <FormMessage className="font-sans text-sm" />
                  </FormItem>
                )}
              />

              {/* Renderizar imput de email apenas se o valor de ContacWith for igual a "E-mail" */}
              {form.watch("contactWith") === "E-mail" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2 flex-shrink ">
                      <FormLabel
                        className={`font-sans text-base font-normal ${
                          form.formState.errors.email ? "text-red-500" : ""
                        }`}
                      >
                        *E-mail para contato
                      </FormLabel>
                      <FormControl className="relative">
                        <Input
                          placeholder="Escreva sua mensagem aqui."
                          className={`w-full  focus:outline-none font-sans text-base placeholder:align-top ${
                            form.formState.errors.email
                              ? "text-red-500 border-red-500 border-2"
                              : "focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border-2"
                          }`}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                        Insira o seu melhor e-mail.
                      </FormDescription>
                      <FormMessage className="font-sans text-sm" />
                    </FormItem>
                  )}
                />
              )}

              {/* Renderizar imput de whatsapp apenas se o valor de ContacWith for igual a "WhatsApp" */}
              {form.watch("contactWith") === "WhatsApp" && (
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem className="space-y-2 flex-shrink ">
                      <FormLabel
                        className={`font-sans text-base font-normal ${
                          form.formState.errors.whatsapp ? "text-red-500" : ""
                        }`}
                      >
                        *Número de WhatsApp
                      </FormLabel>
                      <FormControl className="relative">
                        <Input
                          placeholder="Escreva sua mensagem aqui."
                          className={`w-full  focus:outline-none font-sans text-base placeholder:align-top ${
                            form.formState.errors.whatsapp
                              ? "text-red-500 border-red-500 border-2"
                              : "focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border-2"
                          }`}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                        Por lá acontecem os grupos e maior parte da comunicação.
                      </FormDescription>
                      <FormMessage className="font-sans text-sm" />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-2 flex-shrink">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.subject ? "text-red-500" : ""
                      }`}
                    >
                      Assunto
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${
                            form.formState.errors.subject
                              ? "text-red-500 border-red-500 border-2"
                              : " "
                          }`}
                        >
                          <SelectValue
                            className="text-[#DEDEDE]"
                            placeholder="Selecione uma opção"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="duvida">Dúvida</SelectItem>
                        <SelectItem value="Sugestão">Sugestão</SelectItem>
                        <SelectItem value="Crítica">Crítica</SelectItem>
                        <SelectItem value="Outro assunto">
                          Outro assunto
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                      Por qual motivo você está entrando em contato conosco?
                    </FormDescription>
                    <FormMessage className="font-sans text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2 flex-shrink ">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.message ? "text-red-500" : ""
                      }`}
                    >
                      Sua mensagem
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        placeholder="Escreva sua mensagem aqui."
                        className={`w-full h-[160px] focus:outline-none font-sans text-base placeholder:align-top ${
                          form.formState.errors.message
                            ? "text-red-500 border-red-500 border-2"
                            : "focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border-2"
                        }`}
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                      Escreva sua mensagem aqui, que vamos ler e te responder.
                    </FormDescription>
                    <FormMessage className="font-sans text-sm" />
                  </FormItem>
                )}
              />
              <Dialog.Root>
                <Dialog.DialogTrigger asChild>
                  <div className="w-full flex justify-center">
                    <Button
                      type="submit"
                      className="font-title rounded-xl bg-[#431B61] hover:bg-[#5A0C94]  p-4   text-base font-semibold"
                      // onClick={() => handle()}
                    >
                      Enviar mensagem
                    </Button>
                  </div>
                </Dialog.DialogTrigger>
              </Dialog.Root>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full md:w-[380px] flex flex-col justify-center items-center gap-4 md:gap-10 my-16 px-4 ">
        <div>
          <p className="text-center md:text-end font-sans text-2xl ">
            Você também pode entrar em contato através de nossas redes sociais
            ou nos enviar um e-mail:
          </p>
        </div>
        <div className="flex justify-center items-center xl:hidden">
          <Button className="border-[2px] border-[#5A0C94] bg-white  text-[#5A0C94] font-title text-base font-semibold">
            <ArrobaIcon className="mr-2" /> Enviar e-mail para o Pipoca
          </Button>
        </div>
        <div className="hidden xl:flex  justify-end gap-4 w-full ">
          <YouTubeIcon className="fill-[#5A0C94] w-8 h-8" />
          <SpotifyIcon className="fill-[#5A0C94] w-8 h-8" />
          <InstagramIcon className="fill-[#5A0C94] w-8 h-8" />
          <FacebookIcon className="fill-[#5A0C94] w-8 h-8" />
          <LinkedInIcon className="fill-[#5A0C94] w-8 h-8" />
          <ArrobaIcon className="fill-[#5A0C94] w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
