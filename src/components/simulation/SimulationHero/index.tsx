"use client";

import { HeroSVG } from "@/components/icons/HeroSVG";
import { Button } from "@/components/ui/button";
import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface SimulationHeroProps {
  content: SimulationContent;
}

export function SimulationHero({ content }: SimulationHeroProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full lg:h-[80vh] md:px-0 md:py-0 md:pb-0 lg:px-0 lg:py-10 flex flex-col lg:flex-row justify-between xl:justify-start items-center bg-white lg:bg-[#FCCF5C]">
      <div className="w-full lg:w-2/5 h-full bg-white lg:rounded-r-[500px] flex justify-center items-center">
        <HeroSVG className="h-[250px] w-[300px] md:h-[450px] md:w-[600px]" />
      </div>
      <div className="bg-[#FCCF5C] py-20 rounded-t-[90px] lg:rounded-t-none px-4 md:px-8 xl:px-10 flex flex-col md:justify-start justify-center  xl:items-start gap-6">
        <h3 className="text-theme-grayscale-black text-5xl lg:text-5xl font-[500] font-title leading-[62px] text-center xl:text-start mb-4">
          {data.heroTitle}
        </h3>
        <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-[#3A3A3A]">
          {data.heroSubtitle}
        </p>
        <Button
          className="border-none border-[#5A0C94] text-white rounded-2xl p-6 w-[300px] m-auto xl:m-0  hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]"
          variant="default"
          asChild
        >
          <Link
            href="/inscricao/voluntario"
            className="font-title text-2xl font-[600]"
          >
            Quero voluntariar
          </Link>
        </Button>
      </div>
    </div>
  );
}
