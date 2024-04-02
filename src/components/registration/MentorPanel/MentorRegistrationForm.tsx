// "use client"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// interface MentorRegistrationFormProps {
//   setCurrentStep: (currentStep: number) => void
//   currentStep: number
// }

// const formSchema = z.object({
//   name: z
//     .string({
//       invalid_type_error: "Nome deve ser um texto válido",
//       required_error: "Nome é obrigatório"
//     })
//     .min(1, { message: "Nome é obrigatório" })
//     .min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
//   email: z
//     .string({
//       invalid_type_error: "Email deve ser um texto válido"
//     })
//     .email({ message: "Email deve ser um email válido" }),
//   whatsApp: z.string({
//     invalid_type_error: "WhatsApp deve ser um texto válido"
//   }),
//   country: z
//     .string({
//       invalid_type_error: "País deve ser um texto válido"
//     })
//     .min(1, { message: "País é obrigatório" })
//     .min(3, { message: "País deve conter no mínimo 3 caracteres" }),
//   role: z
//     .string({
//       invalid_type_error: "Função deve ser um texto válido"
//     })
//     .min(1, { message: "Função é obrigatório" })
//     .min(3, { message: "Função deve conter no mínimo 3 caracteres" }),
//   exp: z
//     .string({
//       invalid_type_error: "Experiência deve ser um texto válido"
//     })
//     .min(1, { message: "Experiência é obrigatório" }),
//   dispo: z.string({
//     invalid_type_error: "Selecione pelo menos um horário"
//   }),
//   linkedIn: z.string({
//     invalid_type_error: "LinkedIn deve ser um texto válido"
//   }),
//   note: z.string()
// })

// export type FormValues = z.infer<typeof formSchema>

// export function MentorRegistrationForm({
//   currentStep,
//   setCurrentStep
// }: MentorRegistrationFormProps) {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     mode: "onChange"
//   })

//   function onSubmit(values: FormValues) {
//     console.log("values: ", values)
//     console.log("currentStep", currentStep)
//     const body = { name: values.name, email: values.email}
//     fetch("https://sending-emails-api.onrender.com/mail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     })
//     setCurrentStep(currentStep + 1)
//   }

//   return (
//     <div className="my-4 px-4 w-full h-full flex flex-col items-center justify-center text-start space-y-10 mb-10">
//       <div className="md:flex md:flex-col md:justify-start md:w-3/4 lg:w-1/3">
//         <Form {...form}>
//           <h4 className="font-sans text-lg mt-14 mb-6 mx-2">
//             Preencha seus dados com atenção:
//           </h4>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="w-full flex flex-col justify-center items-center space-y-8"
//           >
//             {/* NOME */}
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">*Nome completo</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Nome e sobrenome"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Digite seu nome e sobrenome
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* EMAIL */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *E-mail para contato
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="exemplo@gmail.com"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Insira o seu melhor e-mail.
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* WHATSAPP */}
//             <FormField
//               control={form.control}
//               name="whatsApp"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *Número de WhatsApp
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="(99) 9 9999-9999"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Por lá acontecem os grupos e maior parte da comunicação.
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* PAÍS */}
//             <FormField
//               control={form.control}
//               name="country"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">*País</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Brasil"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Onde você vive atualmente?
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* SELECT FUNÇÃO */}
//             <FormField
//               control={form.control}
//               name="role"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *Selecione a sua área de atuação
//                   </FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue
//                           placeholder="Scrum Master"
//                           className="w-full font-sans text-sm placeholder:text-sm"
//                         />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem
//                         value="desenvolvedor"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Desenvolvedor
//                       </SelectItem>
//                       <SelectItem
//                         value="product-owner"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Product Owner
//                       </SelectItem>
//                       <SelectItem
//                         value="quality-assurance"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Quality Assurance
//                       </SelectItem>
//                       <SelectItem
//                         value="scrum-master"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Scrum Master
//                       </SelectItem>
//                       <SelectItem
//                         value="ux-ui"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         UX/UI
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Em qual área você atua e pretende mentorar no projeto?
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* TEMPO DE EXPERIENCIA */}
//             <FormField
//               control={form.control}
//               name="role"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *Tempo de experiência
//                   </FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue
//                           placeholder="Entre 1 e 2 anos"
//                           className="w-full font-sans text-sm placeholder:text-sm"
//                         />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem
//                         value="Entre 1 e 2 anos"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Entre 1 e 2 anos
//                       </SelectItem>
//                       <SelectItem
//                         value="Entre 2 e 5 anos"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Entre 2 e 5 anos
//                       </SelectItem>
//                       <SelectItem
//                         value="Entre 5 e 10 anos"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Entre 5 e 10 anos
//                       </SelectItem>
//                       <SelectItem
//                         value="Entre 10 e 15 anos"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Entre 10 e 15 anos
//                       </SelectItem>
//                       <SelectItem
//                         value="Mais de 15 anos"
//                         className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       >
//                         Mais de 15 anos
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Há quanto tempo você trabalha nessa área?
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* HORARIO */}
//             <FormField
//               control={form.control}
//               name="dispo"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *Disponibilidade de períodos (considerar horário de Brasília):
//                   </FormLabel>
//                   <FormControl>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <SelectTrigger>
//                         <SelectValue
//                           placeholder="Manhã"
//                           className="w-full font-sans text-sm placeholder:text-sm"
//                         />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem
//                           value="manha"
//                           className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                         >
//                           Manhã
//                         </SelectItem>
//                         <SelectItem
//                           value="tarde"
//                           className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                         >
//                           Tarde
//                         </SelectItem>
//                         <SelectItem
//                           value="noite"
//                           className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                         >
//                           Noite
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormControl>

//                   <FormDescription className="font-sans text-xs font-medium">
//                     Em qual ou quais turnos você está disponível para participar de
//                     reuniões?
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* LINKEDIN */}
//             <FormField
//               control={form.control}
//               name="linkedIn"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     *Perfil do LinkedIn
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="https://linkedin.com/in/seulink"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Insira o link completo.
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             {/* OBSERVAÇÃO */}
//             <FormField
//               control={form.control}
//               name="note"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col gap-1 my-1 w-full">
//                   <FormLabel className="font-title text-sm">
//                     Tem alguma observação a fazer?
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Conte pra gente!"
//                       className="w-full font-sans text-sm placeholder:font-sans placeholder:text-sm"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription className="font-sans text-xs font-medium">
//                     Qualquer informação que possa ser útil, estamos abertos!
//                   </FormDescription>
//                   <FormMessage className="font-sans text-xs font-medium" />
//                 </FormItem>
//               )}
//             />
//             <div className="w-full flex flex-col text-start justify-start items-start my-4">
//               <p className="font-sans text-lg font-medium text-left">
//                 Verifique suas informações antes de enviar.
//               </p>
//             </div>
//             <Button
//               type="submit"
//               title="Enviar"
//               className="font-title text-sm mt-10"
//             >
//               Enviar dados
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   )
// }

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import * as z from "zod";
import { WarningIcon } from "@/components/icons/WarningIcon";
import Link from "next/link";

interface FormProps {
  setCurrentStep: (currentStep: number) => void;
  currentStep: number;
}

const regexNumber = /^\d+$/;

const schema = z.object({
  name: z.string().min(3, { message: "Você precisa preencher o seu nome." }),
  email: z.string().email({
    message:
      "Verifique o formato do seu e-mail, como: exemplo@gmail.com. Ou, talvez o seu e-mail já esteja cadastrado. Entre em contato conosco caso precise modificar algum dado da sua inscrição, se já a realizou.",
  }),
  number: z
    .string()
    .min(11, {
      message:
        "Verifique o formato do seu número: (CÓDIGO DO PAÍS) DDD NNNNN-NNNN",
    })
    .regex(regexNumber, { message: "Apenas Números" }),
  country: z.string().nonempty({
    message: "Você precisa selecionar uma opção.",
  }),
  role: z.string().nonempty({
    message: "Você precisa selecionar uma opção.",
  }),
  exp: z.string().nonempty({
    message: "Você precisa selecionar uma opção.",
  }),
  period: z
    .array(z.string(), {
      required_error: "Você precisa selecionar pelo menos um período.",
      invalid_type_error: "Você precisa selecionar pelo menos um período.",
    })
    .nonempty({
      message: "Você precisa selecionar pelo menos um período.",
    }),

  LinkedIn: z.string().min(3, {
    message:
      "Verifique o formato do seu link. Você pode abrir uma aba com seu perfil, copiar do endereço do navegador, e colar aqui.",
  }),
  comment: z.string().max(500, {
    message: "502 caracteres. Você ultrapassou o limite de 500 caracteres.",
  }),
});

type Schema = z.infer<typeof schema>;

export function MentorRegistrationForm({
  setCurrentStep,
  currentStep,
}: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: Schema) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <div className="my-4 px-4 w-full h-full flex flex-col items-center justify-center text-start space-y-10 mb-10">
      <div className="md:flex md:flex-col md:justify-start md:w-3/4 lg:w-1/3">
        <div className="w-full space-y-8">
          <h2 className="font-sans font-medium text-2xl mt-16">
            Vamos fazer sua inscrição!
          </h2>
          <h2 className="font-sans font-medium text-2xl">
            Preencha os dados abaixo com atenção.
          </h2>
          <p className="text-base font-bold font-sans">*Campos obrigatórios.</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-2  "
          >
            <div className="flex flex-col justify-between gap-10">
              {/* NOME */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.name}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Nome Completo
                </label>
                <input
                  type="text"
                  data-error={errors.name}
                  placeholder="Nome e sobrenome"
                  data-filled={!!watch("name")}
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("name")}
                />
                <p
                  data-error={errors.name}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Digite seu nome e sobrenome.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* EMAIL */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.email}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *E-mail para contato
                </label>
                <input
                  type="email"
                  data-error={errors.email}
                  placeholder="exemplo@exemplo.com"
                  data-filled={!!watch("email")}
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("email")}
                />
                <p
                  data-error={errors.email}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Insira o seu melhor e-mail.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="flex flex-col text-sm font-normal font-sans text-[#e70000]">
                      {message}
                      <Link
                        href="/contato"
                        className="text-base font-medium font-title text-[#5a0c94] hover:text-[#5a0c94] underline py-4"
                      >
                        Fale conosco
                      </Link>
                    </p>
                  )}
                />
              </div>

              {/* WHATS  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.number}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Número de WhatsApp
                </label>
                <input
                  type="text"
                  maxLength={18}
                  data-error={errors.number}
                  data-filled={!!watch("number")}
                  placeholder="(99) 99 9 9999-9999"
                  className="w-full h-10 px-4 text-black text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("number")}
                />
                <p
                  data-error={errors.number}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Por lá acontecem os grupos e maior parte da comunicação.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="number"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* PAÍS */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.country}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *País
                </label>
                <select
                  data-error={errors.country}
                  data-filled={!!watch("country")}
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans text-[#dedede]  data-[filled=true]:text-black  focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("country")}
                >
                  <option value="">Selecione o país</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Portugal">Portugal</option>
                  <option value="us">Estados Unidos</option>
                  <option value="Canadá">Canadá</option>
                  <option value="Inglaterra">Inglaterra</option>
                  <option value="Espanha">Espanha</option>
                </select>
                <p
                  data-error={errors.country}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Onde você vive atualmente?
                </p>
                <ErrorMessage
                  errors={errors}
                  name="country"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* FUNCAO  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.role}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Função pretendida
                </label>
                <select
                  data-error={errors.role}
                  data-filled={!!watch("role")}
                  {...register("role")}
                  className="w-full h-10 px-4 text-base font-medium font-sans text-[#dedede] data-[filled=true]:text-black  focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                >
                  <option value="">Selecione uma opção.</option>
                  <option value="QA">
                    Analista de Teste - Quality Assurance
                  </option>
                  <option value="front/back">Programador Front/Back-end</option>
                  <option value="PO">Product Owner</option>
                  <option value="SM">Scrum Master</option>
                  <option value="UX/UI">UX/UI Designer</option>
                </select>
                <p
                  data-error={errors.role}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Em qual área você pretende atuar no projeto?
                </p>
                <ErrorMessage
                  errors={errors}
                  name="role"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* EXPERIÊNCIA  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.exp}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Tempo de experiência
                </label>
                <select
                  data-error={errors.exp}
                  data-filled={!!watch("exp")}
                  {...register("exp")}
                  className="w-full h-10 px-4 text-base font-medium font-sans text-[#dedede] data-[filled=true]:text-black focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                >
                  <option value="">Selecione uma opção.</option>
                  <option value="QA">Entre 1 e 2 anos</option>
                  <option value="front/back">Entre 2 e 5 anos</option>
                  <option value="PO">Entre 5 e 10 anos</option>
                  <option value="SM">Entre 10 e 15 anos</option>
                  <option value="UX/UI">Mais de 15 anos</option>
                </select>
                <p
                  data-error={errors.exp}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Há quanto tempo você trabalha nessa área?
                </p>
                <ErrorMessage
                  errors={errors}
                  name="exp"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* PERÍDO  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.period}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Disponibilidade de períodos (considerar horário de Brasília)
                </label>
                <p
                  data-error={errors.period}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Em qual ou quais turnos você está disponível para participar
                  de reuniões? Selecione pelo menos um. Pode selecionar mais de
                  um, se quiser.
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="manha"
                      value="manha"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6  border border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label
                      htmlFor="manha"
                      className="font-sans font-medium text-base leading-[35px]"
                    >
                      Manhã
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="tarde"
                      value="tarde"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6 border  border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label
                      htmlFor="tarde"
                      className="font-sans font-medium text-base leading-[35px]"
                    >
                      Tarde
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="noite"
                      value="noite"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6 border border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label className="font-sans font-medium text-base leading-[35px]">
                      Noite
                    </label>
                  </div>

                  <ErrorMessage
                    errors={errors}
                    name="period"
                    render={({ message }) => (
                      <p className="text-sm font-normal font-sans text-[#e70000]">
                        {message}
                      </p>
                    )}
                  />
                </div>
              </div>

              {/* LinkedIn  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.LinkedIn}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Perfil do LinkedIn
                </label>
                <input
                  type="text"
                  data-error={errors.LinkedIn}
                  data-filled={!!watch("LinkedIn")}
                  placeholder="https://linkedin.com/in/seulink"
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("LinkedIn")}
                />

                <p
                  data-error={errors.LinkedIn}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Insira o link completo.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="LinkedIn"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* comment */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.comment}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Tem alguma observação a fazer?
                </label>
                <input
                  type="textarea"
                  data-error={errors.comment}
                  data-filled={!!watch("comment")}
                  placeholder="Conte pra gente!"
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("comment")}
                />
                <p
                  data-error={errors.comment}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Limite de até 500 caracteres.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="comment"
                  render={({ message }) => (
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              <p className="flex flex-row text-base font-normal font-sans leading-[24px] text-black gap-2">
                <WarningIcon /> Atenção: Verifique suas informações antes de
                enviar!
              </p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="h-full max-w-max font-title text-base font-medium text-[#727272] p-3 rounded-2xl bg-[#DEDEDE]"
                  // disabled={!isDirty || !isValid}
                >
                  Enviar dados
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
