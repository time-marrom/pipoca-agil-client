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
        {/* <div className="flex items-center space-x-2 ">
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
        </div> */}
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="terms"
          >
            <input
              type="checkbox"
              className="before:content['']  peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-[#5A0C94] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white-500 before:opacity-0 before:transition-opacity checked:border-white-500 checked:bg-white-500 checked:before:bg-white-500 hover:before:opacity-10"
              id="terms"
              checked={isAcceptedTerms}
              onChange={handleCheckboxChange}
            />
            <span className="absolute  text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="purple"
                stroke="purple"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans py-6">
            Li e concordo com os termos e regras
          </span>
        </div>
      </div>
    </div>
  );
}
