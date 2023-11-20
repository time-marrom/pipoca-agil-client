"use client";

import { AiOutlineUser } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";

export type StepsProps = {
  currentStep: number;
};

export function Steps({ currentStep }: StepsProps) {
  return (
    <div className="w-full flex flex-row justify-center items-center text-center mx-auto mb-2 gap-4">
      <div className="flex flex-col items-center justify-center text-center p-1">
        <MdOutlineAssignment
          data-current-step={currentStep}
          className="text-lg mb-1 h-6 w-6 fill-current data-[current-step='0']:text-theme-secondary-base data-[current-step='1']:text-theme-secondary-base data-[current-step='2']:text-theme-secondary-base"
        />
        <p className="font-medium text-lg font-title">Termo de Consentimento</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-1">
        <AiOutlineUser
          data-current-step={currentStep}
          className="text-lg mb-1 h-6 w-6 fill-current data-[current-step='1']:text-theme-secondary-base data-[current-step='2']:text-theme-secondary-base"
        />
        <p className="font-medium text-lg font-title">Preenchimento de Dados</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-1">
        <GiConfirmed
          data-current-step={currentStep}
          className="text-lg mb-1 h-6 w-6 fill-current data-[current-step='2']:text-theme-secondary-base"
        />
        <p className="font-medium text-lg font-title">Confirmação</p>
      </div>
    </div>
  );
}
