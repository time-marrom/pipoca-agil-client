import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pipoca Ágil",
  description:
    "Um podcast descontraído sobre Agilidade e os Desafios desta Jornada! Um podcast demográfico e orgânico! Um podcast para o Mundo Ágil."
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-screen w-screen flex-col items-center justify-between`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
