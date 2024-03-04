"use client"

import { Button } from "@/components/ui/button"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface MentorRegistrationFormProps {
  setCurrentStep: (currentStep: number) => void
  currentStep: number
}

const formSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Nome deve ser um texto válido",
      required_error: "Nome é obrigatório"
    })
    .min(1, { message: "Nome é obrigatório" })
    .min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
  email: z
    .string({
      invalid_type_error: "Email deve ser um texto válido"
    })
    .email({ message: "Email deve ser um email válido" }),
  whatsApp: z.string({
    invalid_type_error: "WhatsApp deve ser um texto válido"
  }),
  country: z
    .string({
      invalid_type_error: "País deve ser um texto válido"
    })
    .min(1, { message: "País é obrigatório" })
    .min(3, { message: "País deve conter no mínimo 3 caracteres" }),
  role: z
    .string({
      invalid_type_error: "Função deve ser um texto válido"
    })
    .min(1, { message: "Função é obrigatório" })
    .min(3, { message: "Função deve conter no mínimo 3 caracteres" }),
  dispo: z.string({
    invalid_type_error: "Disponibilidade deve ser um texto válido"
  }),
  linkedIn: z.string({
    invalid_type_error: "LinkedIn deve ser um texto válido"
  }),
  note: z.string()
})

export type FormValues = z.infer<typeof formSchema>

export function MentorRegistrationForm({
  currentStep,
  setCurrentStep
}: MentorRegistrationFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  })

  function onSubmit(values: FormValues) {
    console.log("values: ", values)
    setCurrentStep(currentStep + 1)
    console.log("currentStep", currentStep)
  }

  return (
    <div className="my-4 px-4 w-full h-full flex flex-col items-center justify-center text-start space-y-10 mb-10">
      <div className="md:flex md:flex-col md:justify-start md:w-3/4 lg:w-1/3">
        <Form {...form}>
          <h4 className="font-sans text-lg mt-14 mb-6 mx-2">
            Preencha seus dados com atenção:
          </h4>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-center items-center space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">*Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome e sobrenome"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Digite seu nome e sobrenome
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">
                    *E-mail para contato
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="exemplo@gmail.com"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Insira o seu melhor e-mail.
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* WHATSAPP */}
            <FormField
              control={form.control}
              name="whatsApp"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">
                    *Número de WhatsApp
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(99) 9 9999-9999"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Por lá acontecem os grupos e maior parte da comunicação.
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* PAÍS */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">*País</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brasil"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Onde você vive atualmente?
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* SELECT FUNÇÃO */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">*Função pretendida</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Scrum Master"
                          className="w-full font-sans text-sm placeholder:text-sm"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        value="desenvolvedor"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Desenvolvedor
                      </SelectItem>
                      <SelectItem
                        value="product-owner"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Product Owner
                      </SelectItem>
                      <SelectItem
                        value="quality-assurance"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Quality Assurance
                      </SelectItem>
                      <SelectItem
                        value="scrum-master"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Scrum Master
                      </SelectItem>
                      <SelectItem
                        value="ux-ui"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        UX/UI
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="font-sans text-xs font-medium">
                    Em qual área você pretende atuar no projeto?
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* HORARIO */}
            <FormField
              control={form.control}
              name="dispo"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">
                    *Disponibilidade de horários
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Manhã"
                          className="w-full font-sans text-sm placeholder:text-sm"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        value="manha"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Manhã
                      </SelectItem>
                      <SelectItem
                        value="tarde"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Tarde
                      </SelectItem>
                      <SelectItem
                        value="noite"
                        className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      >
                        Noite
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="font-sans text-xs font-medium">
                    Em qual turno você está disponível para participar de reuniões?
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* LINKEDIN */}
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">
                    *Perfil do LinkedIn
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://linkedin.com/in/seulink"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Insira o link completo.
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            {/* OBSERVAÇÃO */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 my-1 w-full">
                  <FormLabel className="font-title text-sm">
                    Tem alguma observação a fazer?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Conte pra gente!"
                      className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-sans text-xs font-medium">
                    Qualquer informação que possa ser útil, estamos abertos!
                  </FormDescription>
                  <FormMessage className="font-sans text-xs font-medium" />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-col text-start justify-start items-start my-4">
              <p className="font-sans text-lg font-medium text-left">
                Verifique suas informações antes de enviar.
              </p>
            </div>
            <Button
              type="submit"
              title="Enviar"
              className="font-title text-sm mt-10"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Enviar dados
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
