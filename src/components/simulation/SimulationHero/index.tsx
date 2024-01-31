"use client"

import { ImageHero } from "@/components/icons/CheckIcon copy"
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
    <div className="w-full h-full md:p-20 flex flex-col lg:flex-row justify-start items-center bg-white">
      <div className="bg-white px-4 flex items-center justify-start h-[200px]">
        <ImageHero className="h-[200px] w-[270px]" />
      </div>
      <div className="bg-yellow-500 px-4 pt-16 pb-4 rounded-t-[90px] flex flex-col justify-center items-center text-center">
        <h3 className="text-theme-grayscale-black text-5xl font-bold font-title mb-4">
          {data.heroTitle}
        </h3>
        <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-theme-grayscale-darkest">
          {data.heroSubtitle}
        </p>
        <button
          type="button"
          title="Botão Quero me voluntariar"
          className="bg-purple-700 hover:bg-purple-500 p-4 text-white font-bold rounded-md font-sans"
        >
          {data.heroLabelButton}
        </button>
      </div>
    </div>
  )
}
