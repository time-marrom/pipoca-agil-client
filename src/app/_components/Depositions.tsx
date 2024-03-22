"use client";

import { QuotationMark } from "@/components/icons/QuotationMarks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface DepositionsProps {
  content: HomeContent;
}

export function Depositions({ content }: DepositionsProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });

  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));

  return (
    <div className="h-full w-full bg-[#FCCF5C]">
      <div className=" w-full h-full flex flex-col items-center justify-center text-center py-20 px-8  md:px-8 md:py-20 rounded-t-[90px]  lg:px-32 lg:py-40 bg-[#FCFCFC]">
        <h3 className=" text-theme-grayscale-black text-4xl md:text-5xl font-semibold font-title mb-8 text-center">
          {data.depositionsTitle}
        </h3>

        <Carousel
          className="w-[70vw] md:w-[70vw] lg:w-full max-w-3xl"
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {data.depositionsTopics.map(({ author, deposition }, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="  w-full h-full flex flex-col  justify-center text-center items-center gap-4 ">
                  <QuotationMark />

                  <p className="text-theme-grayscale-black font-sans text-sm md:text-base text-center items-center md:text-center lg:w-[70%]">
                    {deposition}
                  </p>
                  <p className="text-theme-secondary-base font-title text-sm md:text-base text-start font-medium md:text-start lg:w-[70%]">
                    {author}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
