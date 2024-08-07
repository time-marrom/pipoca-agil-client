"use client"

import { Steps } from "@/components/certificate/Steps"
import { Error } from "@/components/icons/Error"
import { WarningIcon } from "@/components/icons/WarningIcon"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { sendCertificate } from "@/services/email"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { Calendar as CalendarIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Você precisa preencher o seu nome." })
    .regex(regex, {
      message: "Nome deve conter apenas caracteres válidos."
    }),
  email: z
    .string({
      required_error: "Você precisa preencher o seu e-mail."
    })
    .email({ message: "Você precisa informar um email válido" }),
  role: z
    .string({ required_error: "Você precisa selecionar uma opção." })
    .min(1, { message: "Você precisa selecionar uma opção." }),
  office: z
    .string({ required_error: "Você precisa selecionar uma opção." })
    .min(1, { message: "Você precisa selecionar uma opção." }),
  date: z.date({ required_error: "Você precisa selecionar uma data." })
})

export function CertificateForm() {
  const [date, setDate] = React.useState<Date>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  })

  function formatDate(date: Date | undefined) {
    if (typeof date === "undefined") {
      date = new Date()
    }

    const formattedDate = date.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    return formattedDate
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = { ...values, date: formatDate(date) }
    sendCertificate(data)
  }

  return (
    <div className="w-full h-full mb-16">
      <Steps />

      <div className="my-4 px-4 w-full h-full flex flex-col items-start justify-center  text-start space-y-10 ">
        <div className="md:w-full md:flex md:flex-col md:items-center">
          <div className="border-[#FCCF5C] p-4 my-4 w-full  md:w-3/4 lg:w-1/3  space-y-4 border-2 rounded-2xl">
            <h2 className="font-sans text-2xl font-normal flex flex-row items-center justify-start gap-4 ">
              <WarningIcon className="w-7 h-7" /> Atenção
            </h2>
            <p className="font-sans text-base font-normal">
              Este formulário é para membros que já concluíram sua participação na
              Simulação de Projetos Ágeis do Pipoca Ágil.
            </p>
            <p className="font-sans text-base font-normal">
              Se você foi uma de nossas pessoas voluntárias ou mentoras, pode solicitar o
              seu certificado de participação na Simulação de Projetos Ágeis preenchendo
              as informações abaixo. Faremos uma confirmação dos dados enviados, e assim
              que possível enviaremos o seu certificado por e-mail.
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-start md:w-3/4 lg:w-1/3">
            <h3 className="font-sans text-2xl font-normal my-8">
              Preencha os dados abaixo com atenção.
            </h3>
            <span className="font-sans text-base font-normal mt-4">
              *Campos Obrigatórios.
            </span>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-center items-center space-y-8"
          >
            {/* NOME COMPLETO */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-2 md:w-3/4 lg:w-1/3 w-full">
                  <FormLabel
                    className={`font-sans text-base font-normal ${
                      form.formState.errors.fullName ? "text-red-500" : ""
                    }`}
                  >
                    *Nome Completo
                  </FormLabel>
                  <FormControl className="relative">
                    <div className="relative">
                      <Input
                        data-error={!!form.formState.errors.fullName}
                        data-filled={
                          !!form.watch("fullName") && !form.formState.errors.fullName
                        }
                        className="w-full h-[58px] focus:outline-none font-sans text-base border-2 text-[#DEDEDE] hover:ring-1 hover:ring-[#5A0C94] data-[error=true]:text-red-500 data-[error=true]:border-red-500 data-[filled=true]:text-[#3A3A3A] data-[filled=true]:border-[#5A0C94] "
                        placeholder="Nome e sobrenome"
                        type="text"
                        {...field}
                      />
                      {form.formState.errors.fullName && (
                        <Error className="w-6 h-6 absolute bottom-5 right-4" />
                      )}
                    </div>
                  </FormControl>
                  <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                    Digite como você quer que seu nome e sobrenome apareçam no
                    certificado.
                  </FormDescription>
                  <FormMessage className="font-sans text-sm" />
                </FormItem>
              )}
            />
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2 md:w-3/4 lg:w-1/3 w-full">
                  <FormLabel
                    className={`font-sans text-base font-normal  ${
                      form.formState.errors.email ? "text-red-500" : ""
                    }`}
                  >
                    *E-mail
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        data-error={!!form.formState.errors.email}
                        data-filled={
                          !!form.watch("email") && !form.formState.errors.email
                        }
                        className="w-full h-[58px] focus:outline-none font-sans text-base border-2 text-[#DEDEDE] hover:ring-1 hover:ring-[#5A0C94] data-[error=true]:text-red-500 data-[error=true]:border-red-500 data-[filled=true]:text-[#3A3A3A] data-[filled=true]:border-[#5A0C94]"
                        placeholder="exemplo@gmail.com"
                        type="email"
                        {...field}
                      />
                      {form.formState.errors.email && (
                        <Error className="w-6 h-6 absolute bottom-5 right-4" />
                      )}
                    </div>
                  </FormControl>
                  <FormDescription className="font-sans text-sm font-normal text-[#252525]">
                    Insira seu melhor email.
                  </FormDescription>
                  <FormMessage className="font-sans text-sm" />
                </FormItem>
              )}
            />
            {/* ROLE */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-2 md:w-3/4 lg:w-1/3 w-full">
                  <FormLabel
                    className={`font-sans text-base font-normal ${
                      form.formState.errors.role ? "text-red-500" : ""
                    }`}
                  >
                    *Qual foi a sua participação na Simulação?
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="w-full h-[58px] hover:ring-1 hover:ring-[#5A0C94] data-[error=true]:text-red-500 data-[error=true]:border-red-500 data-[filled=true]:text-[#3A3A3A] data-[filled=true]:border-[#5A0C94] "
                        data-error={!!form.formState.errors.role}
                        data-filled={!!form.watch("role")}
                      >
                        <SelectValue placeholder="Selecione uma opção " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Fui uma pessoa voluntária">
                        Fui uma pessoa voluntária
                      </SelectItem>
                      <SelectItem value="Mentorei pessoas e times">
                        Mentorei pessoas e times
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="font-sans text-sm font-normal  text-[#252525]">
                    Selecione a que mais se encaixa com a sua atuação no projeto.
                  </FormDescription>
                  <FormMessage className="font-sans text-sm" />
                </FormItem>
              )}
            />
            {/* OFFICE */}
            <FormField
              control={form.control}
              name="office"
              render={({ field }) => (
                <FormItem className="space-y-2 md:w-3/4 lg:w-1/3 w-full">
                  <FormLabel
                    className={`font-sans text-base font-normal ${
                      form.formState.errors.office ? "text-red-500" : ""
                    }`}
                  >
                    *Qual função você desempenhou ou mentorou no projeto?
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        data-error={!!form.formState.errors.office}
                        data-filled={!!form.watch("office")}
                        className="w-full h-[58px] hover:border-1 hover:border-[#5A0C94]  data-[error=true]:text-red-500 data-[error=true]:border-red-500 data-[filled=true]:text-[#3A3A3A] data-[filled=true]:border-[#5A0C94]  "
                      >
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Analista de teste - Quality Assurance">
                        Analista de teste - Quality Assurance
                      </SelectItem>
                      <SelectItem value="Programador Front/Back-end">
                        Programador Front/Back-end
                      </SelectItem>
                      <SelectItem value="Product Owner">Product Owner</SelectItem>
                      <SelectItem value="Scrum Master">Scrum Master </SelectItem>
                      <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="font-sans text-sm font-normal  text-[#252525]">
                    Selecione a que mais se encaixa com a sua atuação no projeto.
                  </FormDescription>
                  <FormMessage className="font-sans text-sm" />
                </FormItem>
              )}
            />
            {/* DATA */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col space-y-2 md:w-3/4 lg:w-1/3">
                  <FormLabel className="font-sans text-base font-normal">
                    *Informe a data em que você finalizou o projeto.
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full h-[58px] justify-start text-left font-normal font-sans hover:ring-1 hover:ring-[#5A0C94] hover:text-black",
                            !date && "text-muted-foreground",
                            field.value &&
                              "text-[#3A3A3A] border-[#5A0C94] ring-[#5A0C94] focus:ring-[#5A0C94]"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            formatDate(date)
                          ) : (
                            <span className="text-[#C3C3C3] font-sans">
                              Escolha uma data
                            </span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          className="font-sans"
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            setDate(date)
                            field.onChange(date)
                          }}
                          initialFocus
                          disabled={{ after: new Date() }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormDescription className="font-sans text-sm font-normal  text-[#252525]">
                    Certifique-se de que a data está correta.
                  </FormDescription>
                  <FormMessage className="font-sans text-sm" />
                </FormItem>
              )}
            />

            <span className="flex flex-row items-center justify-start text-start gap-4 w-full mb-4 mt-10 font-normal font-sans md:flex med:flex-row md:w-3/4 lg:w-1/3 md:justify-start">
              <WarningIcon className="w-7 h-7" /> Verifique suas informações antes de
              enviar.
            </span>
            <Dialog.Root>
              <Dialog.DialogTrigger asChild>
                <Button
                  type="submit"
                  className="font-title rounded-xl disabled:text-[#727272] disabled:bg-[#dedede] disabled:cursor-not-allowed"
                  disabled={!form.formState.isValid}
                >
                  Solicitar Certificado
                </Button>
              </Dialog.DialogTrigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                <Dialog.Content className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-10">
                  <div className="bg-[#F6F6F6] rounded-2xl md:max-w-3xl w-full h-full md:h-3/5 overflow-auto p-4 relative flex flex-col items-center justify-evenly gap-6">
                    <Dialog.Title className="font-title text-2xl md:text-[32px] w-2/3 font-medium text-center ">
                      Solicitação enviada com sucesso!
                    </Dialog.Title>
                    <Dialog.Description className="font-sans text-base px-3">
                      <p className="md:mb-5">
                        Vamos verificar os seus dados, e se estiver tudo correto vamos
                        emitir o seu certificado de participação na Simulação de Projetos
                        Ágeis.
                      </p>{" "}
                      <p className="md:mb-5">
                        Poderemos entrar em contato com você caso haja alguma pendência ou
                        dúvida de nossa parte. Se estiver tudo certo, assim que finalizado
                        você receberá o seu certificado no endereço de e-mail que você nos
                        indicou. Não hesite em entrar em contato conosco caso tenha alguma
                        dúvida também.
                      </p>{" "}
                      <p className="md:mb-5">
                        Agradecemos pela sua participação! O Pipoca Ágil tem orgulho de
                        você! Te desejamos muito sucesso,
                      </p>
                      <span className="">Equipe Pipoca Ágil</span>
                    </Dialog.Description>
                    <Dialog.Close>
                      <div className="flex justify-center">
                        <Link href={"/"}>
                          <Button className="rounded-xl font-title font-normal text-base">
                            Voltar para o Início
                          </Button>
                        </Link>
                      </div>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </form>
        </Form>
      </div>
    </div>
  )
}
