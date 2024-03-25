"use client";

import { HeroSVG } from "@/components/icons/HeroSVG";
import { Button } from "@/components/ui/button";
import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface HeroProps {
  content: HomeContent;
}

export function Hero({ content }: HeroProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full mt-20 md:h-[55vh] md:w-full lg:h-[80vh] lg:px-0 lg:pb-10 flex flex-col md:flex-row justify-between md:justify-start items-center md:bg-[#FCCF5C]">
      <div className="w-full h-full md:w-2/3 lg:w-1/2 bg-white md:rounded-r-full flex justify-center items-center">
        <HeroSVG className="lg:h-[80%] lg:w-[80%] " />
      </div>
      <div className="w-full  lg:w-1/2 py-10 rounded-t-[90px] md:rounded-t-none px-4 md:px-8 xl:px-10 flex flex-col justify-center items-center md:justify-start md:items-start gap-6 bg-[#FCCF5C]">
        <h3 className="lg:w-1/2 text-theme-grayscale-black text-6xl md:text-5xl lg:text-6xl font-medium font-title leading-[62px] text-center md:text-start mb-4">
          {data.heroTitle}
        </h3>
        <p className="w-full lg:w-1/2 text-lg text-center md:text-start font-sans mb-6 text-[#3A3A3A]">
          {data.heroSubtitle}
        </p>
        <Button
          className="w-[283px] h-[72px] text-4xl md:w-[188px] md:h-[48px] lg:w-[283px] lg:h-[72px] border-none bg-[#5A0C94] text-white rounded-xl hover:translate-y-[-10px] hover:duration-500 hover:transition-all ease-in-out hover:shadow-lg hover:shadow-[#858585]"
          variant="default"
          asChild
        >
          <Link
            href="/inscricao/voluntario"
            className="font-title text-[24px] md:text-[16px] lg:text-[24px]  font-semibold"
          >
            {data.heroLabelButton}
          </Link>
        </Button>
      </div>
    </div>
  );
}
