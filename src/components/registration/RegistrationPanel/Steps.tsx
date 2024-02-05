"use client"

import { StepOneIcon } from "@/components/icons/StepOneIcon"
import { StepThreeIcon } from "@/components/icons/StepThreeIcon"
import { StepTwoIcon } from "@/components/icons/StepTwoIcon"
import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"

export type StepsProps = {
  currentStep: number
}

export function Steps({ currentStep }: StepsProps) {
  const { role } = useContext(GlobalContext)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center my-2 pb-10 gap-2 rounded-b-[90px] bg-[#FCCF5C]">
      <h2 className="w-full h-full text-2xl font-bold font-title text-theme-grayscale-black my-1">
        {role === "VOLUNTÁRIO" ? "Inscrição para voluntário" : "Inscrição para mentor"}
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
          <p className="font-medium text-xs md:text-sm font-title">Formulário</p>
        </div>
        <div className="w-24 flex flex-col items-center justify-center text-center p-1">
          <StepThreeIcon
            data-current-step={currentStep}
            className="text-lg mb-1 h-12 w-12 fill-[#FCCF5C] data-[current-step='2']:fill-[#FCFCFC]"
          />
          <p className="font-medium text-xs md:text-sm font-title">Conclusão</p>
        </div>
      </div>
    </div>
  )
}
