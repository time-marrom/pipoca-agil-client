"use client";

import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

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
    <div className="w-full h-full p-4 md:p-20 flex flex-col lg:flex-row justify-between items-center bg-theme-white-light">
      <h3 className="text-theme-grayscale-black text-2xl font-bold font-title mb-4">
        {data.heroTitle}
      </h3>
      <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-theme-grayscale-darkest">
        {data.heroSubtitle}
      </p>
    </div>
  );
}
