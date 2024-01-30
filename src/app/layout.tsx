import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/react-query";
import { RootProviders } from "@/providers/rootProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fredoka, Open_Sans } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode; 
}

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-title",
  preload: true,
});

export const metadata: Metadata = {
  title: "Pipoca Ágil",
  description:
    "Um podcast descontraído sobre Agilidade e os Desafios desta Jornada! Um podcast demográfico e orgânico! Um podcast para o Mundo Ágil.",
};

export default function RootLayout({ children, background }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen w-full flex-col items-center justify-between",
          openSans.variable,
          fredoka.variable
        )}
      >
        <Header />
        <ReactQueryProvider>
          <RootProviders>{children}</RootProviders>
        </ReactQueryProvider>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
