"use client";

import { StepOneIcon } from "@/components/icons/StepOneIcon";
import { StepThreeIcon } from "@/components/icons/StepThreeIcon";
import { StepTwoIcon } from "@/components/icons/StepTwoIcon";

export type StepsProps = {
  currentStep: number;
};

export function Steps({ currentStep }: StepsProps) {
  return (
    <div className="w-full flex flex-row justify-center items-center text-center mx-auto mb-2 gap-1 md:gap-6">
      <div className="flex flex-col items-center justify-center text-center p-1">
        <StepOneIcon
          data-current-step={currentStep}
          className="text-lg mb-1 h-12 w-12 fill-[#FDE3A0] data-[current-step='0']:fill-[#FBBB18]"
        />
        <p className="font-medium text-xs md:text-sm font-title">
          Termo de Consentimento
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-1">
        <StepTwoIcon
          data-current-step={currentStep}
          className="text-lg mb-1 h-12 w-12 fill-[#FDE3A0] data-[current-step='1']:fill-[#FBBB18]"
        />
        <p className="font-medium text-xs md:text-sm font-title">
          Preenchimento de Dados
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-1">
        <StepThreeIcon
          data-current-step={currentStep}
          className="text-lg mb-1 h-12 w-12 fill-[#FDE3A0] data-[current-step='2']:fill-[#FBBB18]"
        />
        <p className="font-medium text-xs md:text-sm font-title">Confirmação</p>
      </div>
    </div>
  );
}
