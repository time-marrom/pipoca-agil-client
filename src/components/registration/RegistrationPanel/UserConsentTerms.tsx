"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { ConsentTerms } from "./ConsentTerms";

const mockRules = [
  "Conhecimento teórico da área que quer atuar no projeto",
  "Ter feito ao menos 1 projeto (fictício, real ou voluntário) para as áreas de Desenvolvimento, UX/UI Design e Analista de Testes",
  "Para as áreas de Product Owner e Scrum Master, ter uma certificação",
  "Disponibilidade para participar de reuniões e atividades propostas em algum turno (manhã, tarde ou noite)",
  "Compromisso e responsabilidade com o trabalho",
  "Cumprir prazos de entrega de tarefas",
  "Trabalhar de forma colaborativa",
  "Comunicação clara e frequente com o time",
  "Disposição para aprender e compartilhar habilidades",
  "Respeitar pessoas da equipe.",
];

export function UserConsentTerms() {
  const { isAcceptedTerms, setIsAcceptedTerms } = useContext(GlobalContext);

  function handleCheckboxChange(): void {
    setIsAcceptedTerms(!isAcceptedTerms);
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-8  my-2 gap-4 bg-[#FCFCFC]">
      <h3 className="font-sans font-medium text-lg items-center text-center mt-16 mb-4">
        Pré-requisitos e regras de participação:
      </h3>
      <ul className="flex flex-col justify-center items-start gap-5 pb-10">
        {mockRules.map((rule) => (
          <li key={rule} className="list-disc font-title font-normal text-base">
            {rule}
          </li>
        ))}
      </ul>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <ConsentTerms />
        <div className="flex items-center space-x-2 ">
          <input
            type="checkbox"
            className="h-5 w-5 rounded-md checked:touch-pan-up checked:accent-[#5A0C94] caret-theme-secondary-light"
            id="terms"
            checked={isAcceptedTerms}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans py-6  "
          >
            Li e concordo com os termos e regras
          </label>
        </div>
      </div>
    </div>
  );
}
