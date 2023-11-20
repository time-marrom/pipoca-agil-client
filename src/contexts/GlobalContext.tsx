import * as React from "react"

type GlobalContextProps = {
  isAcceptedTerms: boolean
  setIsAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>
}

type GlobalContextProviderProps = {
  children: React.ReactNode
}

const DEFAULT_VALUE = {
  isAcceptedTerms: false,
  setIsAcceptedTerms: () => {}
}

export const GlobalContext = React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [isAcceptedTerms, setIsAcceptedTerms] = React.useState<boolean>(false)

  const memoizedValue = React.useMemo(
    () => ({
      isAcceptedTerms,
      setIsAcceptedTerms
    }),
    [isAcceptedTerms]
  )

  return <GlobalContext.Provider value={memoizedValue}>{children}</GlobalContext.Provider>
}
