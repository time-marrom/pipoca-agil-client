"use client";

import { GlobalContextProvider } from "../contexts/GlobalContext";

type RootProvidersProps = {
  children: React.ReactNode;
};

export function RootProviders({ children }: RootProvidersProps) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
