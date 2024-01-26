"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobalContext } from "@/contexts/GlobalContext";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Steps } from "./Steps";
import { UserConfirmationMessage } from "./UserConfirmationMessage";
import { UserConsentTerms } from "./UserConsentTerms";
import { GoogleSpreadsheet } from "google-spreadsheet";

const formSchema = z.object({
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
  experience: z.string().min(1, { message: "Experiência é obrigatório" }),
  availability: z.string({
    invalid_type_error: "Disponibilidade deve ser um texto válido",
  }),
  email: z
    .string({
      invalid_type_error: "Email deve ser um texto válido",
    })
    .email({ message: "Email deve ser um email válido" }),
  whatsApp: z.string({
    invalid_type_error: "WhatsApp deve ser um texto válido",
  }),
  linkedIn: z.string({
    invalid_type_error: "LinkedIn deve ser um texto válido",
  }),
  note: z.string({ invalid_type_error: "Nota deve ser um texto válido" }),
});

export type FormValues = z.infer<typeof formSchema>;

export function RegistrationPanel() {
  const { isAcceptedTerms, role } = useContext(GlobalContext);
  const [currentStep, setCurrentStep] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(data: FormValues) {
    console.log("data", data);
    setCurrentStep(currentStep + 1);
    console.log("currentStep", currentStep);
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
    console.log("currentStep", currentStep);
  }

  function prevStep() {
    setCurrentStep(currentStep - 1);
    console.log("currentStep", currentStep);
  }

  return (
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center py-2 mx-auto bg-theme-white-base">
      <div className="bg-theme-white-light w-4/5 max-w-3xl h-full flex flex-col justify-start items-center mx-auto rounded-md shadow-md">
        <div className="w-full h-full flex flex-col items-center justify-center text-center my-2">
          <h2 className="w-full h-full text-2xl font-bold font-title text-theme-grayscale-black p-4">
            {role === "VOLUNTÁRIO"
              ? "Inscrição para voluntário"
              : "Inscrição para mentor"}
          </h2>
        </div>
        {<Steps currentStep={currentStep} />}
        <hr className="w-full h-0.5 bg-[#FBBB18]" />
        <div className="w-full h-full">
          {currentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <UserConsentTerms />
              <button
                type="button"
                onClick={() => nextStep()}
                disabled={!isAcceptedTerms}
                className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed font-sans"
              >
                Próximo
              </button>
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full h-full flex flex-col justify-center items-center space-y-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[80%] h-full flex flex-col justify-center items-center space-y-1 my-4"
              >
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="name">Nome</label>
                  <Input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Ex: Maria da Silva"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.name && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="role">Função</label>
                  <Input
                    type="text"
                    id="role"
                    {...register("role")}
                    placeholder="Ex: Mentor"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.role && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.role.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="email">E-mail</label>
                  <Input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Ex: email@exemplo.com"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.email && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="country">País</label>
                  <Input
                    type="text"
                    id="country"
                    {...register("country")}
                    placeholder="Ex.: Brasil"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.country && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.country.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="experience">Experiência (em meses)</label>
                  <Input
                    type="number"
                    id="experience"
                    {...register("experience")}
                    placeholder="Ex.: 12"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.experience && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.experience.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="availability">Disponibilidade</label>
                  <Input
                    type="text"
                    id="availability"
                    {...register("availability")}
                    placeholder="Ex.: Noite"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.availability && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.availability.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="whatsApp">WhatsApp</label>
                  <Input
                    type="text"
                    id="whatsApp"
                    {...register("whatsApp")}
                    placeholder="Ex.: 5511999999999"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.whatsApp && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.whatsApp.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="linkedIn">LinkedIn</label>
                  <Input
                    type="text"
                    id="linkedIn"
                    {...register("linkedIn")}
                    placeholder="Ex.: https://www.linkedin.com/in/fulano-de-tal/"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.linkedIn && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.linkedIn.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-1">
                  <label htmlFor="note">Observação</label>
                  <Input
                    type="text"
                    id="note"
                    {...register("note")}
                    placeholder="Ex.: Não tenho disponibilidade para atender aos sábados"
                    className="text-xs font-light font-sans placeholder:italic"
                  />
                  {errors.note && (
                    <span className="text-xs font-normal font-sans text-theme-status-error">
                      {errors.note.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-center items-center w-full h-full py-2 my-4 mx-auto space-x-8">
                  <button
                    type="button"
                    onClick={() => prevStep()}
                    className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                  >
                    Anterior
                  </button>
                  <button
                    type="submit"
                    className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <UserConfirmationMessage />
              <div className="flex flex-row justify-center items-center w-full h-full py-2 mx-auto space-x-8">
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="font-sans"
                >
                  <Link href="/">Ir para a Home</Link>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="font-sans"
                >
                  <Link href="/simulacao">Ir para a Simulação</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
