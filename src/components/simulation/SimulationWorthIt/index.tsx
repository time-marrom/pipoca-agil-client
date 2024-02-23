"use client";

import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface SimulationWorthItProps {
  content: SimulationContent;
}

export function SimulationWorthIt({ content }: SimulationWorthItProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-20 px-8 md:px-8 md:py-20 gap-2 rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCCF5C]">
      <div className="w-full flex flex-col lg:flex-col gap-8 md:text-center md:items-center">
        <h3 className="w-full flex justify-center items-center text-theme-grayscale-black text-5xl font-medium font-title mb-10 text-center">
          {data.metricsPanelTitle}
        </h3>
        <div className="w-full font-sans grid grid-flow-col grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-28 ">
          {data.metricsPanelObject.map((item, index) => (
            <p
              key={index}
              className="flex flex-col font-title font-medium text-6xl text-center mb-10 md:mb-10 lg:pr-4  md:text-center gap-4"
            >
              +{item.number}
              <span className="w-full text-2xl font-sans font-normal text-theme-grayscale-black">
                {item.metric}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
