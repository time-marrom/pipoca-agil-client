"use client";
import Link from "next/link";
import Image from "next/image";
import whoIsItFor_1 from "@/assets/whoIsItFor_1.svg";
import whoIsItFor_2 from "@/assets/whoIsItFor_2.svg";
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
  return (
    // <div className="w-full h-full p-4 md:p-20 flex flex-col-reverse lg:flex-row justify-between items-center bg-theme-white-lighter">
    <div className="w-full h-full flex flex-col items-center justify-center text-start py-20 px-8 md:px-8 md:py-20 gap- rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCFCFC] ">
      <div className="w-full lg:w-1/2 bg-pink-400"></div>
      <div className="w-full h-full  flex flex-col justify-center items-center gap-4  ">
        <h3 className="text-theme-grayscale-black text-4xl font-semibold font-title mb-8 text-center md:text-left">
          {data.whoIsPanelTitle}
        </h3>
        <div className="w-full flex flex-col   ">
          <Image src={whoIsItFor_1} alt="" className="flex items-center" />
          <Image src={whoIsItFor_2} alt="" />
        </div>
        <div className="w-full flex flex-col items-center py-4 gap-4">
          <p className=" font-sans font-normal text-base">
            {data.volunteerText}
          </p>
          <Link
            href="/simulacao/inscricao"
            className="flex h-12 max-w-max my-1 px-4 py-2 text-base font-medium font-title rounded-2xl text-center items-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
          >
            {data.volunteerLabelButton}
          </Link>

          <p className="font-sans font-normal text-base mt-6">
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
  );
}
