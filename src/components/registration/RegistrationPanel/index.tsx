"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { Steps } from "./Steps";
import { UserConsentTerms } from "./UserConsentTerms";
import { UserConfirmationMessage } from "./UserConfirmationMessage";
import { Form } from "@/app/inscricao/voluntario/_components/Form";
import { getSanityVoluntaryContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface RegistrationPanelProps {
  content: SubscriptionContent;
}

export function RegistrationPanel({ content }: RegistrationPanelProps) {
  const { data } = useQuery({
    queryKey: ["voluntary"],
    queryFn: getSanityVoluntaryContent,
    initialData: content,
  });
  const { currentStep, setCurrentStep } = useContext(GlobalContext);

  return (
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-start items-center">
        {<Steps currentStep={currentStep} />}
        <div className="w-full h-full">
          {currentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <UserConsentTerms content={data} />
            </div>
          )}
          {currentStep === 1 && (
            <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
          )}
        </div>
      </div>
    </div>
  );
}
