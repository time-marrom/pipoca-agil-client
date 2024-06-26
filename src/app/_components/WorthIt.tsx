"use client";

import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface WorthItProps {
  content: HomeContent;
}

export function WorthIt({ content }: WorthItProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-20 px-8 md:px-8 md:py-20 gap-2 rounded-t-[90px] lg:px-14 lg:py-10 bg-[#FCCF5C]">
      <div className="w-full flex flex-col lg:flex-col gap-10 lg:gap-14 md:text-center md:items-center">
        <h3 className="w-full flex justify-center items-center text-theme-grayscale-black text-[32px] lg:text-5xl font-medium font-title mb-10 text-center">
          {data.worthItTitle}
        </h3>
        <div className="w-full font-sans grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1">
          {data.worthItTopics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center  mb-10 md:mb-10 lg:pr-4  gap-4  "
            >
              <span className="font-title font-medium text-6xl text-center md:text-center bg-[#FCFCFC] text-[#5A0C94] w-40 h-40 rounded-[50%] flex  justify-center items-center hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]">
                +{item.number}
              </span>
              <span className="w-full text-2xl font-sans font-normal text-theme-grayscale-black ">
                {item.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
