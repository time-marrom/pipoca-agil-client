"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ArrobaIcon } from "@/components/icons/ArrobaIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { SpotifyIcon } from "@/components/icons/SpotifyIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import Link from "next/link";
import { useEffect } from "react";
import { Error } from "@/components/icons/Error";
import { useRouter } from "next/navigation";
import { sendContactForm } from "@/services/email";

let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
let whatsAppRegex = /^\d+$/;

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
    .min(1, { message: "Você precisa selecionar uma opção." })
    .optional(),
  email: z
    .string({
      required_error: "Você precisa preencher o seu e-mail.",
    })
    .email({ message: "Você precisa informar um email válido" }),
  whatsApp: z
    .string({
      required_error: "Você precisa preencher o seu e-mail.",
    })
    .min(8, { message: "Telefone precisar ter no mínimo 8 dígitos." })
    .regex(whatsAppRegex, { message: "Você só pode usar números." }),

  subject: z
    .string({ required_error: "Você precisa selecionar uma opção." })
    .min(1, { message: "Você precisa selecionar uma opção." }),
  message: z.string({
    required_error: "Você ultrapassou o limite de 1000 caracteres",
  }),
});

export function ContactForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendContactForm(values);
  }

  useEffect(() => {
    if (form.watch("contactWith") === "WhatsApp") {
      form.setValue("whatsApp", "");
      form.setValue("email", "email@email.com");
    }
    if (form.watch("contactWith") === "E-mail") {
      form.setValue("email", "");
      form.setValue("whatsApp", "1111111111");
    }
  }, [form.watch("contactWith")]);

  function handleBackHome() {
    form.reset();
    router.push("/");
  }

  return (
    <div className="w-full h-full flex justify-center items-center xl:items-start flex-col xl:flex-row pt-4 md:py-[104px] md:gap-10">
      <div className="w-full lg:w-2/5 rounded-[80px] bg-[#FCCF5C] px-4 py-12 m-14 md:p-[80px] md:m-1 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-title font-medium text-[32px] md:text-5xl text-center md:text-start">
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
              className="flex flex-col gap-10 items-center "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2 w-full flex-shrink">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.name ? "text-red-500" : ""
                      }`}
                    >
                      Nome Completo
                    </FormLabel>
                    <FormControl>
                      <div className="w-full relative">
                        <Input
                          data-filled={!!form.watch("name")}
                          data-error={!!form.formState.errors.name}
                          placeholder="Nome e sobrenome"
                          className="w-full focus:outline-none font-sans text-base placeholder:text-[#DEDEDE] border  data-[error=true]:text-red-500 data-[error=true]:border-red-500  focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] data-[filled=true]:border-[#5a0c94] hover:border-[#5a0c94]"
                          type="text"
                          {...field}
                        />

                        {form.formState.errors.name && (
                          <Error className="w-6 h-6 absolute bottom-2 right-4" />
                        )}
                      </div>
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
                  <FormItem className="space-y-2 w-full flex-shrink">
                    <FormLabel
                      className={`font-sans text-base font-normal  ${
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
                          data-filled={!!form.watch("contactWith")}
                          data-error={form.formState.errors.contactWith}
                          className="text-[#DEDEDE] data-[filled=true]:text-black data-[error=true]:text-red-500 data-[error=true]:border-red-500 border hover:border-[#5A0C94] data-[filled=true]:border-[#5A0C94]"
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
                    <FormItem className="space-y-2 w-full flex-shrink ">
                      <FormLabel
                        className={`font-sans text-base font-normal  ${
                          form.formState.errors.email ? "text-red-500" : ""
                        }`}
                      >
                        *E-mail para contato
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            data-filled={
                              !!form.watch("email") &&
                              !form.formState.errors.email
                            }
                            data-error={!!form.formState.errors.email}
                            placeholder="Escreva seu e-mail aqui."
                            className="w-full  focus:outline-none font-sans text-base placeholder:align-top placeholder:text-[#DEDEDE] data-[error=true]:text-red-500  data-[error=true]:border-red-500  focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border data-[filled=true]:border-[#5A0C94] hover:border-[#5A0C94]"
                            type="text"
                            {...field}
                          />

                          {form.formState.errors.email && (
                            <Error className="w-6 h-6 absolute bottom-2 right-4" />
                          )}
                        </div>
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
                  name="whatsApp"
                  render={({ field }) => (
                    <FormItem className="space-y-2 w-full flex-shrink ">
                      <FormLabel
                        className={`font-sans text-base font-normal ${
                          form.formState.errors.whatsApp ? "text-red-500" : ""
                        }`}
                      >
                        *Número de WhatsApp
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            maxLength={18}
                            data-error={!!form.formState.errors.whatsApp}
                            data-filled={
                              !!form.watch("whatsApp") &&
                              !form.formState.errors.whatsApp
                            }
                            placeholder="Escreva seu número aqui."
                            className="w-full  focus:outline-none font-sans text-base placeholder:align-top placeholder:text-[#DEDEDE]  data-[error=true]:text-red-500 data-[error=true]:border-red-500  focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] border  data-[filled=true]:border-[#5A0C94] hover:border-[#5A0C94]"
                            type="text"
                            {...field}
                          />

                          {form.formState.errors.whatsApp && (
                            <Error className="w-6 h-6 absolute bottom-2 right-4" />
                          )}
                        </div>
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
                  <FormItem className="space-y-2 w-full flex-shrink">
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
                          data-filled={!!form.watch("subject")}
                          className={`text-[#DEDEDE] data-[filled=true]:text-black  data-[filled=true]:border-[#5A0C94] hover:border-[#5A0C94] ${
                            form.formState.errors.subject
                              ? "text-red-500 border-red-500 border "
                              : " border"
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
                  <FormItem className="space-y-2 w-full flex-shrink ">
                    <FormLabel
                      className={`font-sans text-base font-normal ${
                        form.formState.errors.message ? "text-red-500" : ""
                      }`}
                    >
                      Sua mensagem
                    </FormLabel>
                    <FormControl>
                      <textarea
                        data-error={!!form.formState.errors.message}
                        data-filled={!!form.watch("message")}
                        placeholder="Escreva sua mensagem aqui."
                        className=" data-[filled=true]:border-[#5A0C94] hover:border-[#5A0C94] resize-none w-full h-[160px] p-1 focus:outline-none font-sans text-base placeholder:align-top placeholder:text-[#DEDEDE] data-[error=true]:text-red-500 data-[error=true]:border-red-500 border focus:border-[#5A0C94] focus:ring-1 focus:ring-[#5A0C94] rounded-md"
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
                  <Button
                    type="submit"
                    className="w-[161px] h-12 font-title rounded-xl bg-[#431B61] hover:bg-[#5A0C94] p-6 text-base font-medium"
                    disabled={
                      !form.formState.isValid || !form.formState.isDirty
                    }
                  >
                    Enviar mensagem
                  </Button>
                </Dialog.DialogTrigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                  <Dialog.Content className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-10 ">
                    <div className="w-[296px] h-[389px] md:w-[680px] md:h-[301px] bg-white rounded-2xl flex flex-col text-center items-center gap-4 p-4 md:p-6 md:gap-6">
                      <Dialog.Title className="font-title font-medium text-[#252525] text-[32px] ">
                        Mensagem enviada com sucesso!
                      </Dialog.Title>
                      <Dialog.Description className=" text-[#252525] font-sans text-start space-y-4 text-base">
                        <p>
                          Assim que possível vamos te dar um retorno através do
                          meio de contato que você nos forneceu.
                        </p>
                        <p>Agradecemos pelo seu contato,</p>
                        Equipe Pipoca Ágil
                      </Dialog.Description>
                      <Button
                        onClick={() => handleBackHome()}
                        className="font-title rounded-2xl bg-[#431B61] hover:bg-[#5A0C94] p-6 text-base font-medium "
                      >
                        Voltar para o Início
                      </Button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center md:gap-10 px-4 lg:mt-32">
        <div className="w-4/5 px-8 md:w-full lg:w-11/12">
          <p className="text-center md:text-start lg:text-right font-sans text-2xl ">
            Você também pode entrar em contato através de nossas redes sociais
            ou nos enviar um e-mail:
          </p>
        </div>
        <div className="flex justify-center items-center xl:hidden">
          <Link
            href="mailto:pipocaagil@gmail.com"
            target="_blank"
            className="w-[263px] h-[53px] flex flex-row border-[2px] rounded-2xl text-center items-center justify-center p-2 m-4 border-[#5A0C94] bg-white text-[#5A0C94] font-title text-base font-semibold"
          >
            <ArrobaIcon className="mr-2 fill-[#5A0C94]" /> Enviar e-mail para o
            Pipoca
          </Link>
        </div>
        <div className="hidden xl:flex  justify-center gap-4 w-full ">
          <Link target="_blank" href="https://www.youtube.com/@PipocaAgil">
            <YouTubeIcon className="fill-[#5A0C94] w-8 h-8 hover:fill-[#9747FF]" />
          </Link>
          <Link
            target="_blank"
            href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J"
          >
            <SpotifyIcon className="fill-[#5A0C94] w-8 h-8 hover:fill-[#9747FF]" />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/pipocaagil">
            <InstagramIcon className="fill-[#5A0C94] w-9 h-9 hover:fill-[#9747FF]" />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/pipocaagil">
            <FacebookIcon className="fill-[#5A0C94] w-8 h-8 hover:fill-[#9747FF]" />
          </Link>
          <Link
            target="_blank"
            href="https://br.linkedin.com/company/pipoca-%C3%A1gil"
          >
            <LinkedInIcon className="fill-[#5A0C94] w-8 h-8 hover:fill-[#9747FF]" />
          </Link>
          <Link target="_blank" href="mailto:pipocaagil@gmail.com">
            <ArrobaIcon className="fill-[#5A0C94] w-8 h-8 hover:fill-[#9747FF]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
