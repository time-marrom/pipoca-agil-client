"use client";
import whoIsItFor_1 from "@/assets/whoIsItFor_1.svg";
import whoIsItFor_2 from "@/assets/whoIsItFor_2.svg";
import whoIsItFor_lg from "@/assets/whoIsItFor_lg.svg";
import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SimulationWhoIsItForProps {
  content: SimulationContent;
}

export function SimulationWhoIsItFor({ content }: SimulationWhoIsItForProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content,
  });

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isSmaller = windowWidth < 768;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#FCCF5C]">
      <div className="w-full h-full flex flex-col items-center justify-center text-start py-20 px-8  md:px-8 md:py-20 gap- rounded-t-[90px]  lg:px-32 lg:py-40 bg-[#FCFCFC]">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full h-full  flex flex-col justify-center items-center gap-4 md:items-start ">
          <div className="flex flex-col items-center justify-center gap-8 w-full ">
            <h3 className="text-theme-grayscale-black text-4xl md:text-5xl font-semibold font-title mb-8 text-center ">
              {data.whoIsPanelTitle}
            </h3>
            <p className="text-theme-grayscale-darker font-sans text-[16px] md:text-[24px] text-center lg:w-[70%] ">
              Você está estudando e/ou buscando emprego em alguma das áreas
              abaixo? Sim? Então você está no lugar certo!
            </p>
          </div>
          {isSmaller && (
            <div className="w-full flex flex-col md:flex-row items-center justify-center my-10 gap-6">
              <Image
                src={whoIsItFor_1}
                alt=""
                className="flex items-center md:w-full md:h-full"
              />
              <Image
                src={whoIsItFor_2}
                alt=""
                className="md:w-full md:h-1/7 md:mb-9 md:mr-5 "
              />
            </div>
          )}
          {!isSmaller && (
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center my-14">
              <Image
                src={whoIsItFor_lg}
                alt=""
                className="md:w-full md:h-1/7 md:mb-9 md:mr-5 "
              />
            </div>
          )}
          <div className="w-full flex flex-col items-center py-4 gap-12 md:gap-20 md:flex-row">
            <div className=" flex flex-col items-center  md:items-start gap-4 md:gap-8 md:w-2/3">
              <p className=" font-sans font-normal text-base mb-2 md:text-2xl  md:w-full">
                {data.volunteerText}
              </p>
              <Link
                href="/inscricao/voluntario"
                className="flex h-12 max-w-max  p-4  text-base font-medium font-title rounded-2xl text-center items-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]"
              >
                {data.volunteerLabelButton}
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 md:w-2/3">
              <p className="font-sans font-normal text-base  mb-2 md:text-2xl md:w-full ">
                {data.mentorText}
              </p>
              <Link
                href="/inscricao/mentor"
                className="flex h-12 max-w-max  p-4 text-base font-medium font-title rounded-2xl text-center items-center text-theme-secondary-base cursor-pointer transition duration-300 bg-[#FCFCFC] border-2 border-theme-secondary-base  hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:bg-[#FCFCFC]"
              >
                {data.mentorLabelButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
