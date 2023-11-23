import * as React from "react";

type GlobalContextProps = {
  isAcceptedTerms: boolean;
  setIsAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  isAcceptedTerms: false,
  setIsAcceptedTerms: () => {},
  profile: "",
  setProfile: () => {},
};

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE);

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isAcceptedTerms, setIsAcceptedTerms] = React.useState<boolean>(false);
  const [profile, setProfile] = React.useState<string>("Voluntário");

  const memoizedValue = React.useMemo(
    () => ({
      isAcceptedTerms,
      setIsAcceptedTerms,
      profile,
      setProfile,
    }),
    [isAcceptedTerms, profile]
  );

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
}
