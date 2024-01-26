import * as React from "react";

type GlobalContextProps = {
  isAcceptedTerms: boolean;
  setIsAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  isAcceptedTerms: false,
  setIsAcceptedTerms: () => {},
  role: "",
  setRole: () => {},
};

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE);

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isAcceptedTerms, setIsAcceptedTerms] = React.useState<boolean>(false);
  const [role, setRole] = React.useState<string>("VOLUNTÁRIO");

  const memoizedValue = React.useMemo(
    () => ({
      isAcceptedTerms,
      setIsAcceptedTerms,
      role,
      setRole,
    }),
    [isAcceptedTerms, setIsAcceptedTerms, role, setRole]
  );

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
}
