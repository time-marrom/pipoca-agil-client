"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { Steps } from "./Steps";
import { MentorConfirmationMessage } from "./MentorConfirmationMessage";
import { MentorConsentTerms } from "./MentorConsentTerms";
import { MentorRegistrationForm } from "./MentorRegistrationForm";
import { getSanityMentorContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface MentorPanelProps {
  content: SubscriptionContent;
}

export function MentorPanel({ content }: MentorPanelProps) {
  const { data } = useQuery({
    queryKey: ["mentor"],
    queryFn: getSanityMentorContent,
    initialData: content,
  });

  const { mentorCurrentStep, setMentorCurrentStep } = useContext(GlobalContext);
  console.log("mentorCurrentStep", mentorCurrentStep);

  return (
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-start items-center">
        {<Steps currentStep={mentorCurrentStep} />}
        <div className="w-full h-full">
          {mentorCurrentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <MentorConsentTerms content={data} />
            </div>
          )}
          {mentorCurrentStep === 1 && (
            <MentorRegistrationForm
              currentStep={mentorCurrentStep}
              setCurrentStep={setMentorCurrentStep}
            />
          )}
          {mentorCurrentStep === 2 && (
            <div>
              <MentorConfirmationMessage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
