"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { Steps } from "./Steps";
// import { UserConsentTerms } from "./UserConsentTerms";
// import { UserConfirmationMessage } from "./UserConfirmationMessage";
import { Form } from "@/app/inscricao/voluntario/_components/Form";

export function RegistrationPanel() {
  const { currentStep, setCurrentStep } = useContext(GlobalContext);

  // function nextStep() {
  //   setCurrentStep(currentStep + 1)
  //   console.log("currentStep", currentStep)
  // }

  return (
    // <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center bg-theme-white-base">
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-start items-center">
        {<Steps currentStep={currentStep} />}
        <div className="w-full h-full">
          {/* {currentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <UserConsentTerms />
            </div>
          )}
          {currentStep === 1 && (
            <VolunteerForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 2 && (
            <div>
              <UserConfirmationMessage />
            </div>
          )} */}
          <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </div>
  );
}
