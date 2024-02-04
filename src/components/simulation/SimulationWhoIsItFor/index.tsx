"use client";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "react-use";
import whoIsItFor_1 from "@/assets/whoIsItFor_1.svg";
import whoIsItFor_2 from "@/assets/whoIsItFor_2.svg";
import whoIsItFor_lg from "@/assets/whoIsItFor_lg.svg";

import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface SimulationWhoIsItForProps {
  content: SimulationContent;
}

export function SimulationWhoIsItFor({ content }: SimulationWhoIsItForProps) {
  const { data } = useQuery({
    queryKey: ["simulation"],
    queryFn: getSanitySimulationContent,
    initialData: content,
  });

  const isSmaller = useMedia("(min-width: 767px)");
  const isLarger = useMedia("(min-width: 768px)");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-start py-20 px-8  md:px-8 md:py-20 gap- rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCFCFC] ">
      <div className="w-full lg:w-1/2"></div>
      <div className="w-full h-full  flex flex-col justify-center items-center gap-4 md:items-start ">
        <h3 className="text-theme-grayscale-black text-4xl font-semibold font-title mb-8 text-center md:text-left">
          {data.whoIsPanelTitle}
        </h3>
        {!isSmaller && (
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center">
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
        {isLarger && (
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center">
            <Image
              src={whoIsItFor_lg}
              alt=""
              className="md:w-full md:h-1/7 md:mb-9 md:mr-5 "
            />
          </div>
        )}
        <div className="w-full flex flex-col items-center py-4 gap-10 md:flex-row">
          <div className=" flex flex-col items-center  md:items-start md:w-2/3">
            <p className=" font-sans font-normal text-base mb-2 md:text-lg md:w-full">
              {data.volunteerText}
            </p>
            <Link
              href="/simulacao/inscricao"
              className="flex h-12 max-w-max my-1 px-4 py-2 text-base font-medium font-title rounded-2xl text-center items-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
            >
              {data.volunteerLabelButton}
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-2/3">
            <p className="font-sans font-normal text-base  mb-2 md:text-lg md:w-full ">
              {data.mentorText}
            </p>
            <Link
              href="/simulacao/inscricao"
              className="flex h-12 max-w-max my-1 px-4 py-2 text-base font-medium font-title rounded-2xl text-center items-center text-theme-secondary-base cursor-pointer transition duration-300 bg-theme-white-base border-2 border-theme-secondary-base hover:bg-theme-secondary-dark"
            >
              {data.mentorLabelButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
