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

interface UserRegistrationFormProps {
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
  experience: z.string().min(1, { message: "Experiência é obrigatório" }),
  portfolio: z.string({ invalid_type_error: "Portfolio deve ser um texto válido" }).url(),
  availability: z.string({
    invalid_type_error: "Disponibilidade deve ser um texto válido"
  }),
  email: z
    .string({
      invalid_type_error: "Email deve ser um texto válido"
    })
    .email({ message: "Email deve ser um email válido" }),
  whatsApp: z.string({
    invalid_type_error: "WhatsApp deve ser um texto válido"
  }),
  linkedIn: z.string({
    invalid_type_error: "LinkedIn deve ser um texto válido"
  }),
  note: z.string({ invalid_type_error: "Nota deve ser um texto válido" })
})

export type FormValues = z.infer<typeof formSchema>

export function UserRegistrationForm({
  currentStep,
  setCurrentStep
}: UserRegistrationFormProps) {
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
    <Form {...form}>
      <h4 className="font-sans text-lg mt-14 mb-6 mx-2">Preencha seus dados com atenção:</h4>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-6 mx-2"
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
        {/* TEMPO DE EXPERIENCIA */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 my-1 w-full">
              <FormLabel className="font-title text-sm">*Tempo de experiência</FormLabel>
              <FormControl>
                <Input
                  placeholder="Até 3 meses"
                  className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription className="font-sans text-xs font-medium">
                Há quanto tempo você trabalha nessa área? Trabalho voluntário também
                conta!
              </FormDescription>
              <FormMessage className="font-sans text-xs font-medium" />
            </FormItem>
          )}
        />
        {/* PORTFOLIO */}
        <FormField
          control={form.control}
          name="portfolio"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 my-1 w-full">
              <FormLabel className="font-title text-sm">
                *Link de projeto ou certificação
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://..."
                  className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription className="font-sans text-xs font-medium">
                Insira aqui um link para o seu projeto (caso seja Dev, UX/UI ou QA) ou
                para sua certificação (caso seja PO ou SM). Ah, não esqueça de testar se o
                link está funcionando antes de colar aqui!
              </FormDescription>
              <FormMessage className="font-sans text-xs font-medium" />
            </FormItem>
          )}
        />
        {/* HORARIO */}
        <FormField
          control={form.control}
          name="availability"
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
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 my-1 w-full">
              <FormLabel className="font-title text-sm">*E-mail para contato</FormLabel>
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
              <FormLabel className="font-title text-sm">*Número de WhatsApp</FormLabel>
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
        {/* LINKEDIN */}
        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 my-1 w-full">
              <FormLabel className="font-title text-sm">*Perfil do LinkedIn</FormLabel>
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
          <p className="font-sans text-lg font-medium">*Campos obrigatórios.</p>
        </div>
        <div className="w-full flex flex-col text-start justify-start items-start my-4">
          <p className="font-sans text-lg font-medium text-left">
            Verifique suas informações antes de enviar.
          </p>
        </div>
        <Button type="submit" title="Enviar" className="font-title text-sm mt-10">
          Enviar inscrição
        </Button>
      </form>
    </Form>
  )
}
