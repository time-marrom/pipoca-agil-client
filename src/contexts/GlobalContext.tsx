import * as React from "react"

type GlobalContextProps = {
  isAcceptedTerms: boolean
  setIsAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>
  role: string
  setRole: React.Dispatch<React.SetStateAction<string>>
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  currentStep: number
}

type GlobalContextProviderProps = {
  children: React.ReactNode
}

const DEFAULT_VALUE = {
  isAcceptedTerms: false,
  setIsAcceptedTerms: () => {},
  role: "",
  setRole: () => {},
  currentStep: 0,
  setCurrentStep: () => {}
}

export const GlobalContext = React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [isAcceptedTerms, setIsAcceptedTerms] = React.useState<boolean>(false)
  const [role, setRole] = React.useState<string>("VOLUNTÁRIO")
  const [currentStep, setCurrentStep] = React.useState<number>(0)

  const memoizedValue = React.useMemo(
    () => ({
      isAcceptedTerms,
      setIsAcceptedTerms,
      role,
      setRole,
      currentStep,
      setCurrentStep
    }),
    [isAcceptedTerms, setIsAcceptedTerms, role, setRole, currentStep, setCurrentStep]
  )

  return <GlobalContext.Provider value={memoizedValue}>{children}</GlobalContext.Provider>
}
