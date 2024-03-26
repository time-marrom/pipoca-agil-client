"use client";

import { Scrum } from "@/components/icons/Scrum";
import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface DescriptionProps {
  content: HomeContent;
}

export function Description({ content }: DescriptionProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });

  return (
    <div className="bg-[#FCCF5C] w-full">
      <div className="w-full h-full flex flex-col items-center justify-center text-start px-4 md:px-8 py-12 md:py-10 gap-2 rounded-t-[90px]  lg:px-14 lg:py-10 bg-[#FCFCFC]">
        <div className="flex flex-col-reverse md:flex-row md:gap-12 w-full h-full justify-between">
          <div className="w-full flex flex-col justify-center items-left lg:items-start gap-10">
            <h3 className="text-theme-grayscale-black block md:hidden text-[32px] lg:text-5xl font-medium font-title text-center md:text-left">
              {data.descriptionTitle}
            </h3>
            <div className="  flex justify-center items-center flex-col-reverse md:flex-row gap-10 md:w-full">
              <div className="flex gap-4 lg:gap-10 flex-col lg:justify-center w-full md:w-1/2">
                <h3 className="hidden md:block text-theme-grayscale-black text-4xl md:text-[32px] lg:text-5xl font-medium font-title text-center md:text-left">
                  {data.descriptionTitle}
                </h3>
                <p className=" font-sans font-normal text-base lg:text-2xl  text-start md:text-left">
                  {data.descriptionFirstParagraph}
                </p>
                <p className="font-sans font-normal text-base lg:text-2xl  text-start md:text-left">
                  {data.descriptionSecondParagraph}
                </p>
              </div>
              <div className="  w-full md:w-1/2 flex flex-col  justify-center items-center">
                <Scrum className="flex h-[70%] w-[100%] md:h-[80%] md:w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
