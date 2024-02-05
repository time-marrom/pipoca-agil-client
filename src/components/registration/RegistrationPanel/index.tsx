"use client"

import { Button } from "@/components/ui/button"
import { GlobalContext } from "@/contexts/GlobalContext"
import Link from "next/link"
import { useContext, useState } from "react"
import { Steps } from "./Steps"
import { UserConfirmationMessage } from "./UserConfirmationMessage"
import { UserConsentTerms } from "./UserConsentTerms"
import { UserRegistrationForm } from "./UserRegistrationForm"

export function RegistrationPanel() {
  const { isAcceptedTerms, role } = useContext(GlobalContext)
  const [currentStep, setCurrentStep] = useState(0)

  function nextStep() {
    setCurrentStep(currentStep + 1)
    console.log("currentStep", currentStep)
  }

  return (
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center bg-theme-white-base">
      <div className="w-full max-w-3xl h-full flex flex-col justify-start items-center">
        {<Steps currentStep={currentStep} />}
        <div className="w-full h-full">
          {currentStep === 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <UserConsentTerms />
              <button
                type="button"
                onClick={() => nextStep()}
                disabled={!isAcceptedTerms}
                className="w-22 h-10 p-4 flex items-center text-base font-medium rounded-2xl text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed font-sans"
              >
                Continuar
              </button>
            </div>
          )}
          {currentStep === 1 && (
            <UserRegistrationForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 2 && (
            <div>
              <UserConfirmationMessage />
              <div className="flex flex-row justify-center items-center w-full h-full py-2 mx-auto space-x-8">
                <Button variant="default" size="sm" asChild className="font-sans">
                  <Link href="/">Voltar para o Início</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
