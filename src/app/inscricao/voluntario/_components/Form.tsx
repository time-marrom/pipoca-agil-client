"use client"

import { Error } from "@/components/icons/Error"
import { WarningIcon } from "@/components/icons/WarningIcon"
import { UserConfirmationMessage } from "@/components/registration/RegistrationPanel/UserConfirmationMessage"
import { Button } from "@/components/ui/button"
import { GlobalContext } from "@/contexts/GlobalContext"
import { sendVolunteerConfirmation } from "@/services/email"
import { sendVolunteerData } from "@/services/sheets"
import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const regexWhatsApp = /^\d+$/

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Você precisa preencher o seu nome." })
    .regex(/\S/, { message: "O nome não pode conter apenas espaços em branco." }),
  email: z.string().email({
    message:
      "Verifique o formato do seu e-mail, como: exemplo@gmail.com. Ou, talvez o seu e-mail já esteja cadastrado. Entre em contato conosco caso precise modificar algum dado da sua inscrição, se já a realizou."
  }),
  whatsApp: z
    .string()
    .min(11, {
      message: "Verifique o formato do seu número: DDI DDD NÚMERO ex: 55 21 99999-9999."
    })
    .regex(regexWhatsApp, {
      message: "Apenas Números."
    }),
  country: z.string().nonempty({
    message: "Você precisa selecionar uma opção."
  }),
  role: z.string().nonempty({
    message: "Você precisa selecionar uma opção."
  }),
  period: z
    .array(z.string(), {
      required_error: "Você precisa selecionar pelo menos um período.",
      invalid_type_error: "Você precisa selecionar pelo menos um período."
    })
    .nonempty({
      message: "Você precisa selecionar pelo menos um período."
    }),

  linkedIn: z
    .string()
    .min(3, {
      message: "Deve ser um link válido."
    })
    .url({ message: "Verifique o formato do seu link." })
    .startsWith("https://www.linkedin.com/in/", { message: "Deve ser um link do LinkedIn. ex: https://www.linkedin.com/in/seu-usuario" }),

  comment: z.string().max(500, {
    message: "Você ultrapassou o limite de 500 caracteres."
  })
})

type Schema = z.infer<typeof schema>

export function Form() {
  const { setIsAcceptedTerms, setCurrentStep } = useContext(GlobalContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: Schema) {
    sendVolunteerData(data)
    sendVolunteerConfirmation({ to: data.email, name: data.name })
  }

  function handleBackHome() {
    setCurrentStep(0)
    setIsAcceptedTerms(false)
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
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2  ">
            <div className="flex flex-col justify-between gap-10">
              {/* NOME */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.name}
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Nome Completo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    data-error={errors.name}
                    data-filled={!!watch("name")}
                    placeholder="Nome e sobrenome"
                    className="w-full h-[58px] px-4 text-[15px] text-base font-normal font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000] "
                    {...register("name")}
                  />
                  {errors.name && (
                    <Error className="w-6 h-6 absolute bottom-2  right-4" />
                  )}
                </div>
                <p
                  data-error={errors.name}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *E-mail para contato
                </label>
                <div className="relative">
                  <input
                    type="email"
                    data-error={errors.email}
                    data-filled={!!watch("email")}
                    placeholder="exemplo@exemplo.com"
                    className="w-full h-[58px] px-4 text-[15px] text-base font-normal font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                    {...register("email")}
                  />
                  {errors.email && (
                    <Error className="w-6 h-6 absolute bottom-2 right-4" />
                  )}
                </div>
                <p
                  data-error={errors.email}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                        className="text-sm font-normal font-title text-[#5a0c94] hover:text-[#5a0c94] underline py-4"
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
                  data-error={errors.whatsApp}
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Número de WhatsApp
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={18}
                    data-error={errors.whatsApp}
                    data-filled={!!watch("whatsApp")}
                    placeholder="5521999999999"
                    className="w-full h-[58px] px-4 text-base font-normal font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                    {...register("whatsApp")}
                  />
                  {errors.whatsApp && (
                    <Error className="w-6 h-6 absolute bottom-2 right-4" />
                  )}
                </div>
                <p
                  data-error={errors.whatsApp}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Por lá acontecem os grupos e maior parte da comunicação.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="whatsApp"
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
                  className="text-base font-normal font-sans leading-[35px]  text-black data-[error]:text-[#e70000]"
                >
                  *País
                </label>
                <select
                  data-error={errors.country}
                  data-filled={!!watch("country")}
                  className="w-full h-[58px] px-4 text-[15px] text-base font-medium font-sans data-[filled=true]:text-black  text-[#dedede] focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("country")}
                >
                  <option value="">Selecione o país</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Portugal">Portugal</option>
                  <option value="USA">Estados Unidos</option>
                  <option value="Canadá">Canadá</option>
                  <option value="Inglaterra">Inglaterra</option>
                  <option value="Espanha">Espanha</option>
                  <option value="Outro">Outro</option>
                </select>
                <p
                  data-error={errors.country}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Função pretendida
                </label>
                <select
                  data-error={errors.role}
                  data-filled={!!watch("role")}
                  {...register("role")}
                  className="w-full h-[58px] px-4 text-base font-normal font-sans data-[filled=true]:text-black text-[#dedede] focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                >
                  <option value="">Selecione uma opção.</option>
                  <option value="QA">Analista de Teste - Quality Assurance</option>
                  <option value="DEV">Programador Front/Back-end</option>
                  <option value="PO">Product Owner</option>
                  <option value="SM">Scrum Master</option>
                  <option value="UX/UI">UX/UI Designer</option>
                  <option value="BI">Business Intelligence</option>
                  <option value="BA">Business Analyst</option>
                  <option value="Data Analyst">Analista de Dados</option>
                  <option value="Data Scientist">Cientista de Dados</option>
                  <option value="Data Engineer">Engenheiro de Dados</option>
                  <option value="Data Architect">Arquiteto de Dados</option>
                  <option value="Data Governance">Governança de Dados</option>
                  <option value="Data Product Owner">Data Product Owner</option>
                  <option value="Data Product Manager">Data Product Manager</option>
                </select>
                <p
                  data-error={errors.role}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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

              {/* PERÍDO  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.period}
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Disponibilidade de períodos (considerar horário de Brasília)
                </label>
                <p
                  data-error={errors.period}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Em qual ou quais turnos você está disponível para participar de
                  reuniões? Selecione pelo menos um. Pode selecionar mais de um, se
                  quiser.
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="Manhã"
                      value="Manhã"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6  border border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label
                      htmlFor="Manhã"
                      className="font-sans font-normal text-base leading-[35px]"
                    >
                      Manhã
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="Tarde"
                      value="Tarde"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6 border  border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label
                      htmlFor="Tarde"
                      className="font-sans font-medium text-base leading-[35px]"
                    >
                      Tarde
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      id="Noite"
                      value="Noite"
                      {...register("period", { required: true })}
                      data-error={errors.period}
                      className="w-6 h-6 border border-[#5A0C94] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000]"
                    />
                    <label
                      htmlFor="Noite"
                      className="font-sans font-medium text-base leading-[35px]"
                    >
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
                  data-error={errors.linkedIn}
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Perfil do LinkedIn
                </label>
                <div className="relative">
                  <input
                    type="text"
                    data-error={errors.linkedIn}
                    data-filled={!!watch("linkedIn")}
                    placeholder="https://linkedin.com/in/seu-usuario"
                    className="w-full h-[58px] px-4 text-[15px] text-base font-normal font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                    {...register("linkedIn")}
                  />
                  {errors.linkedIn && (
                    <Error className="w-6 h-6 absolute bottom-2 right-4" />
                  )}
                </div>

                <p
                  data-error={errors.linkedIn}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  Insira o link completo.
                </p>
                <ErrorMessage
                  errors={errors}
                  name="linkedIn"
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
                  className="text-base font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Tem alguma observação a fazer?
                </label>
                <div className="relative">
                  <input
                    type="textarea"
                    data-error={errors.comment}
                    data-filled={!!watch("comment")}
                    placeholder="Conte pra gente!"
                    className="w-full h-[58px] px-4 text-[15px] text-base font-normal font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                    {...register("comment")}
                  />
                  {errors.comment && (
                    <Error className="w-6 h-6 absolute bottom-2 right-4" />
                  )}
                </div>
                <p
                  data-error={errors.comment}
                  className="w-4/5 text-sm font-normal font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                <WarningIcon /> Atenção: Verifique suas informações antes de enviar!
              </p>
              <div className="flex justify-center">
                <Dialog.Root>
                  <Dialog.DialogTrigger asChild>
                    <Button
                      type="submit"
                      className="h-full max-w-max font-title text-base font-medium text-[#F6F6F6] p-3 rounded-2xl bg-[#5A0C94]  hover:bg-[#5A0C94] hover:text-white disabled:bg-[#DEDEDE] disabled:text-[#727272] disabled:cursor-not-allowed"
                      disabled={!isDirty || !isValid}
                    >
                      Enviar dados
                    </Button>
                  </Dialog.DialogTrigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                    <Dialog.Content className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-10 ">
                      <div className="bg-[#F6F6F6] rounded-2xl md:max-w-3xl lg:w-[648px] lg:h-[543px] md:h-3/5 overflow-auto p-4 relative flex flex-col items-center justify-evenly gap-6">
                        <Dialog.Description className="font-sans text-base px-3">
                          <UserConfirmationMessage />
                        </Dialog.Description>
                        <Dialog.Close>
                          <div className="flex justify-center">
                            <Link href="/">
                              <Button
                                className="rounded-xl font-title font-medium text-base"
                                onClick={() => handleBackHome()}
                              >
                                Voltar para o Início
                              </Button>
                            </Link>
                          </div>
                        </Dialog.Close>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
