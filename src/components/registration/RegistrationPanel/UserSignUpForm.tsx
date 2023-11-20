"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  profile: z.string({
    invalid_type_error: "Perfil deve ser um texto válido",
  }),
  name: z
    .string({
      invalid_type_error: "Nome deve ser um texto válido",
    })
    .min(1, { message: "Nome é obrigatório" })
    .min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
  country: z
    .string({
      invalid_type_error: "País deve ser um texto válido",
    })
    .min(1, { message: "País é obrigatório" })
    .min(3, { message: "País deve conter no mínimo 3 caracteres" }),
  role: z
    .string({
      invalid_type_error: "Função deve ser um texto válido",
    })
    .min(1, { message: "Função é obrigatório" })
    .min(3, { message: "Função deve conter no mínimo 3 caracteres" }),
  experience: z.number({
    invalid_type_error: "Experiência deve ser um número válido",
  }),
  availability: z.string({
    invalid_type_error: "Disponibilidade deve ser um texto válido",
  }),
  email: z
    .string({
      invalid_type_error: "Email deve ser um texto válido",
    })
    .email({ message: "Email deve ser um email válido" }),
  whatsapp: z.string({
    invalid_type_error: "Whatsapp deve ser um texto válido",
  }),
  linkedin: z.string({
    invalid_type_error: "Linkedin deve ser um texto válido",
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export function UserSignUpForm(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    shouldFocusError: true,
  });

  function onSubmit(data: FormValues) {
    console.log("data", data);
  }

  return (
    <div className="w-96 h-80 flex flex-col justify-start items-center px-4 my-2 gap-4">
      <h3>UserSignUpForm</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center items-start space-y-1">
          <label htmlFor="role">Função</label>
          <Input
            type="text"
            id="role"
            {...(register("role"), { required: true })}
            placeholder="Ex: Mentor"
            className="text-xs font-light font-sans placeholder:italic"
          />
          {errors.role && (
            <span className="text-xs font-normal font-sans text-theme-status-error">
              {errors.role.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center items-start space-y-1">
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            {...(register("name"), { required: true })}
            placeholder="Ex: Maria da Silva"
            className="text-xs font-light font-sans placeholder:italic"
          />
          {errors.name && (
            <span className="text-xs font-normal font-sans text-theme-status-error">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center items-start space-y-1">
          <label htmlFor="email">E-mail</label>
          <Input
            type="email"
            id="email"
            {...(register("email"), { required: true })}
            placeholder="Ex: email@exemplo.com"
            className="text-xs font-light font-sans placeholder:italic"
          />
          {errors.email && (
            <span className="text-xs font-normal font-sans text-theme-status-error">
              {errors.email.message}
            </span>
          )}
        </div>
        <button type="submit" className="w-full mt-6">
          Enviar
        </button>
      </form>
    </div>
  );
}
