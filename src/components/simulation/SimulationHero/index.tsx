"use client"

import { HeroSVG } from "@/components/icons/HeroSVG"
import { Button } from "@/components/ui/button"
import { getSanitySimulationContent } from "@/services/axios"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

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
    <div className="w-full h-full lg:h-[80vh] md:px-0 md:py-0 md:pb-0 lg:px-0 lg:py-10 flex flex-col lg:flex-row justify-between items-center bg-white lg:bg-[#FCCF5C]">
      <div className="w-full lg:w-2/5 h-full bg-white lg:rounded-r-[500px] flex justify-center items-center">
        <HeroSVG className="h-[250px] w-[300px] md:h-[450px] md:w-[600px]" />
      </div>
      <div className="bg-[#FCCF5C] py-20 rounded-t-[90px] lg:rounded-t-none px-4 md:px-8 flex flex-col justify-start text-start items-start">
        <h3 className="text-theme-grayscale-black text-4xl lg:text-5xl font-bold font-title mb-4">
          {data.heroTitle}
        </h3>
        <p className="w-full lg:w-1/2 text-start md:text-start font-sans mb-6 text-theme-grayscale-darkest">
          {data.heroSubtitle}
        </p>
        <Button
          className="border-2 bg-[#5A0C94] border-[#5A0C94] text-white rounded-2xl"
          variant="default"
          asChild
        >
          <Link href="/inscricao/voluntario" className="font-title">
            Quero voluntariar
          </Link>
        </Button>
      </div>
    </div>
  )
}
