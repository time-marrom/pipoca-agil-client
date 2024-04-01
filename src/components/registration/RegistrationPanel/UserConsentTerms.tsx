"use client";

import { WarningIcon } from "@/components/icons/WarningIcon";
import { ConsentTerms } from "./ConsentTerms";
import { getSanityVoluntaryContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface UserConsentTermsProps {
  content: SubscriptionContent;
}

export function UserConsentTerms({ content }: UserConsentTermsProps) {
  const { data } = useQuery({
    queryKey: ["voluntary"],
    queryFn: getSanityVoluntaryContent,
    initialData: content,
  });
  console.log(data);

  const orderedRules = data.rules.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]); // Obtém o número da chave de 'a'
    const keyB = parseInt(Object.keys(b)[0]); // Obtém o número da chave de 'b'
    return keyA - keyB; // Retorna a diferença entre as chaves para ordenação
  });

  return (
    <div className="w-full  h-full flex flex-col justify-start items-center px-4   gap-4 bg-[#FCFCFC]">
      <div className="border-[#FCCF5C] p-4 mt-10 w-full lg:w-1/3  space-y-4 border-2 rounded-2xl ">
        <h2 className="font-sans text-2xl font-normal flex flex-row items-center justify-start gap-2 ">
          <WarningIcon className="w-7 h-7" /> {data.warningTitle}
        </h2>
        <p className="font-sans text-base font-normal p-2">{data.warning}</p>
      </div>
      <div className="p-4 my-4 w-full lg:w-1/3  space-y-4 ">
        <h3 className="w-full font-sans text-base font-semibold  md:text-2xl md:font-normal items-start text-start ">
          {data.titleOfRules}
        </h3>
        <ul className="w-11/12 flex flex-col justify-center items-start gap-5 pl-8">
          {orderedRules.map((rule) => (
            <li
              key={rule}
              className="list-disc font-title font-normal text-base"
            >
              {rule}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 mb-40 ">
        <div className="w-full h-full flex flex-col items-start justify-center  text-start space-y-10 ">
          <div className="md:w-full md:flex md:flex-col  md:items-center">
            <div className="border-[#FCCF5C] p-4 my-4 w-full lg:w-1/3  space-y-4 border-2 rounded-2xl">
              <span className="font-sans text-xl font-normal">
                {data.LGPDWarningTitle}
              </span>
              <p className="font-sans text-base font-normal">
                {data.LGPDWarning}
              </p>
            </div>
          </div>
        </div>
        <ConsentTerms content={data} />
      </div>
    </div>
  );
}
