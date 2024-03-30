"use client";

import { useQuery } from "@tanstack/react-query";
import { ConsentTerms } from "./ConsentTerms";
import { getSanityMentorContent } from "@/services/axios";

interface MentorConsentTermsProps {
  content: SubscriptionContent;
}

export function MentorConsentTerms({ content }: MentorConsentTermsProps) {
  const { data } = useQuery({
    queryKey: ["mentor"],
    queryFn: getSanityMentorContent,
    initialData: content,
  });

  const orderedRules = data.rules.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]); // Obtém o número da chave de 'a'
    const keyB = parseInt(Object.keys(b)[0]); // Obtém o número da chave de 'b'
    return keyA - keyB; // Retorna a diferença entre as chaves para ordenação
  });

  return (
    <div className="w-full h-full flex flex-col justify-start items-center md:items-start md:justify-center lg:items-center px-8 my-2 gap-4 bg-[#FCFCFC]">
      <div className="w-full max-w-md flex items-center text-start  ">
        <h3 className="font-sans font-medium text-lg items-center text-center mt-16 mb-4">
          {data.titleOfRules}
        </h3>
      </div>
      <ul className="w-full max-w-md flex flex-col justify-center items-start gap-5  md:px-8">
        {orderedRules.map((rule) => (
          <li key={rule} className="list-disc font-title font-normal text-base">
            {rule}
          </li>
        ))}
      </ul>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 mb-40">
        <div className="my-4 px-4 w-full h-full flex flex-col items-start justify-center  text-start  ">
          <div className="md:w-full md:flex md:flex-col md:items-start lg:items-center">
            <div className="border-[#FCCF5C] p-4 my-4 w-full  md:w-full lg:w-1/3   space-y-4 border-2 rounded-2xl">
              <span className="font-sans text-xl font-normal">
                {data.LGPDWarningTitle}
              </span>
              <p className="font-sans text-base font-normal">
                {data.LGPDWarning}
              </p>
            </div>
          </div>
        </div>
        <ConsentTerms content={content} />
      </div>
    </div>
  );
}
