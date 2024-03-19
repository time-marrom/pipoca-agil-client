"use client"

import { Scrum } from "@/components/icons/Scrum"
import { getSanityHomeContent } from "@/services/axios"
import { useQuery } from "@tanstack/react-query"

interface DescriptionProps {
  content: HomeContent
}

export function Description({ content }: DescriptionProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content
  })

  return (
    <div className="bg-[#FCCF5C] w-full">
      <div className="w-full h-full flex flex-col items-center justify-center text-start px-4 md:px-36 py-12 md:py-[104px] gap-2 rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCFCFC]">
        <div className="flex flex-col-reverse md:flex-row md:gap-12 w-full justify-between">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-10">
            <h3 className="text-theme-grayscale-black block lg:hidden text-4xl font-semibold font-title text-center md:text-left">
              {data.descriptionTitle}
            </h3>
            <div className="flex flex-col-reverse md:flex-row gap-10 md:w-full">
              <div className="flex gap-4 flex-col lg:justify-center w-full">
                <h3 className="hidden lg:block text-theme-grayscale-black text-4xl lg:text-5xl font-semibold font-title text-center md:text-left">
                  {data.descriptionTitle}
                </h3>
                <p className=" font-sans font-normal text-base lg:text-2xl  text-start md:text-left">
                  {data.descriptionFirstParagraph}
                </p>
                <p className="font-sans font-normal text-base lg:text-2xl  text-start md:text-left">
                  {data.descriptionSecondParagraph}
                </p>
              </div>
              <div className="w-full flex flex-col  justify-center items-center">
                <Scrum className="flex  w-[328px] h-[292px] lg:w-full lg:h-[492px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
