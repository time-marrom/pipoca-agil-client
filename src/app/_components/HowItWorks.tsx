"use client"

import { OneIcon } from "@/components/icons/OneIcon"
import { ThreeIcon } from "@/components/icons/ThreeIcon"
import { TwoIcon } from "@/components/icons/TwoIcon"
import { cn } from "@/lib/utils"
import { getSanityHomeContent } from "@/services/axios"
import { useQuery } from "@tanstack/react-query"
import { ElementType } from "react"

interface HowItWorksProps {
  content: HomeContent
}

interface MappedArray {
  icon: ElementType
  text: string
  rounded: string
}

export function HowItWorks({ content }: HowItWorksProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content
  })

  const mapped: MappedArray[] = [
    {
      icon: OneIcon,
      text: data.howItWorksTopics[0],
      rounded:
        "md:rounded-s-[100px] md:rounded-t-[100px] rounded-s-[80px] rounded-t-[80px]"
    },
    {
      icon: TwoIcon,
      text: data.howItWorksTopics[1],
      rounded:
        "md:rounded-ee-[100px] md:rounded-ss-[100px] rounded-ee-[80px] rounded-ss-[80px]"
    },
    {
      icon: ThreeIcon,
      text: data.howItWorksTopics[2],
      rounded:
        "md:rounded-bl-[100px] md:rounded-r-[100px] rounded-bl-[80px] rounded-r-[80px]"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:py-[104px] py-12 2xl:px-80 xl:px-36 px-8 rounded-t-[90px] bg-[#FCCF5C]">
      <div className="flex flex-col items-center gap-10 md:gap-14 w-full justify-between">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <h3 className="text-[#252525] text-[32px] md:text-5xl font-semibold font-title mb-4 text-center">
            {data.howItWorksTitle}
          </h3>
          <p className="font-sans font-normal text-base md:text-2xl mb-6 text-start text-[#3A3A3A]">
            {data.howItWorksSubtitle}
          </p>
        </div>
        <div className="w-full 2xl:w-[80%] sm:w-[100%] gap-4 flex items-center justify-center md:flex-row flex-col">
          {mapped.map(({ icon: Icon, text, rounded }, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-6 items-center flex-shrink bg-[#FCFCFC] p-6 md:p-8",
                rounded
              )}
            >
              <div className="flex items-center justify-center flex-col gap-6 w-[90%]">
                <Icon className="w-[64px] md:w-[120px] h-[64px] md:h-[120px] fill-[#FCCF5C]" />
                <p className="text-base font-sans text-center">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
