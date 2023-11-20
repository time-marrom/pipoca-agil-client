"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useUserForm } from "@/hooks/useUserForm";
import Link from "next/link";
import { ReactElement, useContext } from "react";
import { Steps } from "./Steps";
import { UserConfirmationMessage } from "./UserConfirmationMessage";
import { UserConsentTerms } from "./UserConsentTerms";
import { UserSignUpForm } from "./UserSignUpForm";

export type FormComponent = {
  order: number;
  component: ReactElement<any, any>;
};

export function RegistrationPanel() {
  const { isAcceptedTerms } = useContext(GlobalContext);
  const formComponents: FormComponent[] = [
    {
      order: 1,
      component: <UserConsentTerms />,
    },
    {
      order: 2,
      component: <UserSignUpForm />,
    },
    {
      order: 3,
      component: <UserConfirmationMessage />,
    },
  ];
  const formComponentsSorted = formComponents.sort((a, b) => a.order - b.order);
  const { currentComponent, currentStep, changeStep, isFirstStep, isLastStep } =
    useUserForm(formComponentsSorted);

  return (
    <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center py-2 mx-auto bg-theme-white-base">
      <div className="bg-theme-white-light w-4/5 h-full flex flex-col justify-start items-center mx-auto rounded-md shadow-md">
        {<Steps currentStep={currentStep} />}
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div>{currentComponent}</div>
          <div className="h-full w-full flex flex-row justify-center items-center my-1 py-1 gap-4">
            {isFirstStep && (
              <button
                type="button"
                onClick={() => changeStep(currentStep + 1)}
                disabled={!isAcceptedTerms}
                className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próximo
              </button>
            )}
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changeStep(currentStep - 1)}
                className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
            )}
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changeStep(currentStep - 1)}
                className="w-20 h-10 p-2 text-base font-medium rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            )}
            {isLastStep && (
              <div className="flex flex-row justify-center items-center w-full h-full py-2 mx-auto space-x-8">
                <Link
                  href="/"
                  className="w-full max-w-max h-10 p-2 text-base font-medium font-sans rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
                >
                  Ir para a Home
                </Link>
                <Link
                  href="/simulacao"
                  className="w-full max-w-max h-10 p-2 text-base font-medium font-sans rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
                >
                  Ir para a Simulação
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
