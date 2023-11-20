"use client";

import type { FormComponent } from "@/components/registration/RegistrationPanel";
import { FormEvent, useState } from "react";

export function useUserForm(steps: FormComponent[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index: number, event?: FormEvent<HTMLFormElement>): void {
    event && event.preventDefault();
    if (index < 0 || index > steps.length - 1) return;
    setCurrentStep(index);
  }

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const currentComponent = steps[currentStep].component;

  return {
    currentStep,
    changeStep,
    isLastStep,
    isFirstStep,
    currentComponent,
  };
}
