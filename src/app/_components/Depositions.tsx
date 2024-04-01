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
import { useEffect, useRef, useState } from "react";

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

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isSmaller = windowWidth < 1024;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full w-full bg-[#FCCF5C]">
      <div className=" w-full h-full flex flex-col items-center justify-center text-center py-20 px-8  md:px-8 md:py-20 rounded-t-[90px] lg:px-14 lg:py-10 bg-[#FCFCFC]">
        <h3 className=" text-theme-grayscale-black text-[32px] lg:text-5xl font-medium font-title mb-8 text-center">
          {data.depositionsTitle}
        </h3>

        <Carousel
          className="w-[70vw] md:w-[70vw] lg:w-full max-w-5xl gap-10"
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: isSmaller ? 1 : 2,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {data.depositionsTopics.map(({ author, deposition }, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col w-full items-center justify-center lg:basis-1/2 pl-6 "
              >
                <div className="  w-full h-full flex flex-col justify-start text-center items-start gap-4">
                  <QuotationMark className="w-12 h-10" />

                  <p className="text-theme-grayscale-black font-sans text-sm md:text-base text-start items-center md:text-start lg:w-full">
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
