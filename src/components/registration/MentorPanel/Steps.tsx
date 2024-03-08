"use client";

import { StepOneIcon } from "@/components/icons/StepOneIcon";
import { StepTwoIcon } from "@/components/icons/StepTwoIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Steps({ currentStep }: StepsProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center pb-10 gap-2 rounded-b-[90px] bg-[#FCCF5C]">
      <div className="p-2 w-full h-full flex flex-col items-start justify-center">
        <Button
          type="button"
          aria-label="Voltar"
          variant="link"
          asChild
          className="w-12 h-12 flex items-center justify-center rounded-full text-theme-grayscale-black font-normal font-sans text-base mx-2"
        >
          <Link href="/">Voltar</Link>
        </Button>
      </div>
      <h2 className="w-full h-full text-2xl font-bold font-title text-theme-grayscale-black my-1">
        Inscrição de pessoa voluntária
      </h2>
      <div className="w-full flex flex-row justify-center items-start text-center mx-auto mb-2 gap-1 md:gap-6">
        <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepOneIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='0']:fill-[#FCFCFC]"
          />
          <p className="font-medium text-xs md:text-sm font-title">
            Termo de Consentimento
          </p>
        </div>
        <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepTwoIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='1']:fill-[#FCFCFC]"
          />
          <p className="font-medium text-xs md:text-sm font-title">
            Formulário
          </p>
        </div>
        {/* <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepThreeIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='2']:fill-[#FCFCFC]"
          />
          <p className="font-medium text-xs md:text-sm font-title">Conclusão</p>
        </div> */}
      </div>
    </div>
  );
}