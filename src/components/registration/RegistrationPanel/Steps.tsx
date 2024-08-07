"use client";

import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { FormCheckIcon } from "@/components/icons/FormCheckIcon";
import { StepOneIcon } from "@/components/icons/StepOneIcon";
import { StepTwoIcon } from "@/components/icons/StepTwoIcon";
import Link from "next/link";

export function Steps({ currentStep }: StepsProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center pb-10 gap-2 rounded-b-[90px] bg-[#FCCF5C]">
      <div className="p-2 w-full h-full flex flex-row items-center justify-start ">
        <Link
          href="/"
          className="p-2 w-40 h-full flex flex-row items-center justify-start text-theme-grayscale-black font-normal font-sans text-base "
        >
          <ArrowLeftIcon className="w-8 h-8 mx-5" />
          Voltar
        </Link>
      </div>
      <h2 className="w-8/12 h-full text-[32px] font-medium font-title md:text-[32px] lg:text-5xl  text-theme-grayscale-black my-1">
        Inscrição de pessoa voluntária
      </h2>
      <div className="relative w-full flex flex-row justify-center items-start text-center mx-auto mb-2 gap-1 md:gap-6 ">
        <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepOneIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='0']:fill-[#FCFCFC] data-[current-step='1']:hidden"
          />
          <FormCheckIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#fcfcfc]  hidden data-[current-step='1']:block"
          />
          <p className="font-medium text-xs md:text-sm font-title">
            Termo de Consentimento
          </p>
        </div>
        <div className="w-[110px] h-[2px] " />
        <div className="absolute top-[26px] w-[155px] md:w-[200px] h-[2px] bg-[#3A3A3A]" />
        <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepTwoIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='1']:fill-[#FCFCFC]"
          />
          <div className="w-32">
            <p className="font-medium text-xs md:text-sm font-title">
              Dados pessoais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
