"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import * as z from "zod";
import { WarningIcon } from "@/components/icons/WarningIcon";
import { sendVolunteerConfirmation } from "@/services/email";

interface FormProps {
  setCurrentStep: (currentStep: number) => void;
  currentStep: number;
}

const regexWhatsApp =
  /(?:(?:\+|00)\d{1,3})?\s?\(?(\d{2,4})\)?[\s.-]?\d{2,5}[\s.-]?\d{2,5}[\s.-]?\d{2,5}/;

const schema = z.object({
  name: z.string().min(3, { message: "Você precisa preencher o seu nome." }),
  email: z.string().email({
    message:
      "Verifique o formato do seu e-mail, como: exemplo@gmail.com. Ou, talvez o seu e-mail já esteja cadastrado. Entre em contato conosco caso precise modificar algum dado da sua inscrição, se já a realizou.",
  }),
  whatsApp: z
    .string()
    .min(11, {
      message:
        "Verifique o formato do seu número: (CÓDIGO DO PAÍS) DDD NNNNN-NNNN",
    })
    .regex(regexWhatsApp, {
      message:
        "Verifique o formato do seu número: (CÓDIGO DO PAÍS) DDD NNNNN-NNNN",
    }),
  country: z.string().nonempty({
    message: "Você precisa selecionar uma opção.",
  }),
  role: z.string().nonempty({
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

  linkedIn: z.string().url({
    message:
      "Verifique o formato do seu link. Você pode abrir uma aba com seu perfil, copiar do endereço do navegador, e colar aqui.",
  }),
  comment: z.string().max(500, {
    message: "502 caracteres. Você ultrapassou o limite de 500 caracteres.",
  }),
});

type Schema = z.infer<typeof schema>;

export function Form({ setCurrentStep, currentStep }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: Schema) {
    sendVolunteerConfirmation({ to: data.email, name: data.name });

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
                  data-filled={!!watch("name")}
                  placeholder="Nome e sobrenome"
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
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
                  data-filled={!!watch("email")}
                  placeholder="exemplo@exemplo.com"
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
                    <p className="text-sm font-normal font-sans text-[#e70000]">
                      {message}
                    </p>
                  )}
                />
              </div>

              {/* WHATS  */}
              <div className="w-full space-y-2">
                <label
                  data-error={errors.whatsApp}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Número de WhatsApp
                </label>
                <input
                  type="text"
                  data-error={errors.whatsApp}
                  data-filled={!!watch("whatsApp")}
                  placeholder="(99) 99 9 9999-9999"
                  className="w-full h-10 px-4 text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("whatsApp")}
                />
                <p
                  data-error={errors.whatsApp}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                  className="text-base font-medium font-sans leading-[35px]  text-black data-[error]:text-[#e70000]"
                >
                  *País
                </label>
                <select
                  data-error={errors.country}
                  data-filled={!!watch("country")}
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans data-[filled=true]:text-black  text-[#dedede] focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
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
                  className="w-full h-10 px-4 text-base font-medium font-sans data-[filled=true]:text-black text-[#dedede] focus:text-black border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
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
                  data-error={errors.linkedIn}
                  className="text-base font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
                >
                  *Perfil do LinkedIn
                </label>
                <input
                  type="text"
                  data-error={errors.linkedIn}
                  data-filled={!!watch("linkedIn")}
                  placeholder="https://linkedin.com/in/seulink"
                  className="w-full h-10 px-4 text-[15px] text-base font-medium font-sans placeholder:text-[#dedede] border border-[#c3c3c3] data-[filled=true]:border-[#5a0c94]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a0c94] hover:border-[#5a0c94] focus:border-transparent data-[error]:border-[#e70000] data-[error]:text-[#e70000] data-[error]:focus:border-[#e70000] data-[error]:focus:ring-[#e70000] data-[error]:hover:border-[#e70000] data-[error]:placeholder:text-[#e70000]"
                  {...register("linkedIn")}
                />

                <p
                  data-error={errors.linkedIn}
                  className="w-4/5 text-sm font-medium font-sans leading-[35px] text-black data-[error]:text-[#e70000]"
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
                  className="h-full max-w-max font-title text-base font-medium text-[#727272] p-3 rounded-2xl bg-[#DEDEDE]  hover:bg-[#5A0C94] hover:text-white "
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
