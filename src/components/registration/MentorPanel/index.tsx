"use client"

import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"
import { Steps } from "./Steps"
import { MentorConfirmationMessage } from "./MentorConfirmationMessage"
import { MentorConsentTerms } from "./MentorConsentTerms"
import { MentorRegistrationForm } from "./MentorRegistrationForm"

export function MentorPanel() {
  const { mentorCurrentStep, setMentorCurrentStep } = useContext(GlobalContext)

  // function nextStep() {
  //   setCurrentStep(currentStep + 1)
  //   console.log("currentStep", currentStep)
  // }

  return (
    // <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center bg-theme-white-base">
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-start items-center">
        {<Steps currentStep={mentorCurrentStep} />}
        <div className="w-full h-full">
          {mentorCurrentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <MentorConsentTerms />
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
  )
}
