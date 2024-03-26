"use client";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../Card";
import { getSanityCreatorsContent } from "@/services/axios";

interface DescriptionTeamProps {
  content: CreatorsContent;
}

export function DescriptionTeam({ content }: DescriptionTeamProps) {
  const { data } = useQuery({
    queryKey: ["creators"],
    queryFn: getSanityCreatorsContent,
    initialData: content,
  });

  console.log("oi", data);

  return (
    <>
      <div className="bg-[#FCCF5C] w-full">
        <div className="w-full h-full flex flex-col items-center justify-center text-start py-12 2xl:px-80 xl:px-36 px-8 rounded-t-[90px] md:px-8 md:py-20 lg:px-32 lg:py-40 bg-[#FCFCFC]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 md:items-start">
            <div className="flex flex-col items-start justify-center gap-8 w-full ">
              <h3 className="text-theme-grayscale-black  text-[32px]  md:text-5xl lg:text-[64px] font-medium font-title mb-8 text-start ">
                {data.creatorsGridTitle}
              </h3>
              <p className="text-theme-grayscale-darker font-sans text-[16px] md:text-[24px] text-start ">
                {data.creatorsGridSubtitle}
              </p>
            </div>

            <div className="w-full flex flex-col items-start py-4 gap-12 md:gap-20 md:flex-row">
              <div className=" flex flex-col items-center  md:items-start gap-4 md:gap-8 md:w-2/3">
                <p className=" font-sans font-normal text-sm mb-2 md:text-base  md:w-full">
                  {data.creatorsGridFirstParagraph}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 md:w-2/3">
                <p className="font-sans font-normal text-sm mb-2 md:text-base md:w-full ">
                  {data.creatorsGridSecondParagraph}
                </p>
              </div>
            </div>
            <div>
              <Card content={content} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
