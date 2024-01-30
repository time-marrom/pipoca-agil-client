<!-- import Image from "next/image";
import simulationImage from "@/assets/simulacao.png";

export function SimulationHero() {
  return (
    <div className="w-full h-full pb-10 flex justify-between items-center bg-[#FCCF5C]">
      <div className="bg-white h-2/4 w-2/5 rounded-r-full overflow-hidden">
        <Image
          src={simulationImage}
          alt="imagem de três pessoas observando um notebook"
        />
      </div>

      <div className=" bg-[#FCCF5C] h-full w-1/2">
        <h3 className=" w-1/3 text-theme-grayscale-black text-5xl font-medium font-title mb-4">
          Simulação de Projetos Ágeis
        </h3>
        <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-theme-grayscale-darkest">
          Mão na massa! Coloque seus conhecimentos em prática e ganhe
          experiência para conquistar a vaga dos sonhos!
        </p>
      </div> -->

"use client"

import { getSanitySimulationContent } from "@/services/axios"
import { useQuery } from "@tanstack/react-query"

interface SimulationHeroProps {
  content: SimulationContent
}

export function SimulationHero({ content }: SimulationHeroProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content
  })

  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col lg:flex-row justify-between items-center bg-theme-white-light">
      <h3 className="text-theme-grayscale-black text-2xl font-bold font-title mb-4">
        {data.heroTitle}
      </h3>
      <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-theme-grayscale-darkest">
        {data.heroSubtitle}
      </p>
    </div>
  )
}
