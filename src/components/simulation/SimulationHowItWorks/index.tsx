"use client";

import { CheckIcon } from "@/components/icons/CheckIcon";
import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface SimulationHowItWorksProps {
  content: SimulationContent;
}

export function SimulationHowItWorks({ content }: SimulationHowItWorksProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-start py-20 px-8 md:px-8 md:py-20 gap-2 rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCCF5C]">
      <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-12 w-full justify-between ">
        <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:justify-center ">
          <h3 className="text-theme-grayscale-black text-4xl font-semibold font-title mb-4 text-center md:text-left">
            {data.howToPanelTitle}
          </h3>
          <p className="lg:w-3/4 font-sans font-normal text-base mb-6 md:mb-10 lg:pr-4 text-start md:text-left">
            {data.howToPanelSubtitle}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <ul className="w-full font-sans grid grid-flow-col grid-cols-1 grid-rows-4 lg:grid-cols-1 lg:grid-rows-4 md:grid-cols-2 md:grid-rows-2 ml:pr-8 ">
            {data.howToPanelTopics.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-base mb-4 md:mb-6"
              >
                <CheckIcon className="fill-[#252525] hover:fill-purple-500 hover:scale-110 transition-all ease-in-out delay-100" />
                <span className="ml-4">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
