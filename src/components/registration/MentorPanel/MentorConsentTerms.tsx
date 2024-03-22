"use client";

import { ConsentTerms } from "./ConsentTerms";

const mockRules = [
  "Experiência sólida na área em que quer mentorar;",
  "Disponibilidade para tirar dúvidas e orientar as pessoas voluntárias;",
  "Compromisso e responsabilidade com o trabalho;",
  "Comunicação clara e frequente;",
  "Paciência e vontade de ensinar;",
  "Respeito com pessoas voluntárias. ",
];

export function MentorConsentTerms() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center md:items-start md:justify-center lg:items-center px-8 my-2 gap-4 bg-[#FCFCFC]">
      <h3 className="font-sans font-medium text-lg items-center text-center mt-16 mb-4">
        Pré-requisitos e regras de participação:
      </h3>
      <ul className="flex flex-col justify-center items-start gap-5  md:px-8">
        {mockRules.map((rule) => (
          <li key={rule} className="list-disc font-title font-normal text-base">
            {rule}
          </li>
        ))}
      </ul>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="my-4 px-4 w-full h-full flex flex-col items-start justify-center  text-start  ">
          <div className="md:w-full md:flex md:flex-col md:items-start lg:items-center">
            <div className="border-[#FCCF5C] p-4 my-4 w-full  md:w-full lg:w-1/3   space-y-4 border-2 rounded-2xl">
              <span className="font-sans text-xl font-normal">
                LGPD - Lei Geral de Proteção de Dados Pessoais
              </span>
              <p className="font-sans text-base font-normal">
                Estamos de acordo com a LGPD e usaremos os seus dados apenas
                para entrar em contato com você, e para fins de organização
                interna caso você entre em algum de nossos times.
              </p>
            </div>
          </div>
        </div>
        <ConsentTerms />
      </div>
    </div>
  );
}
