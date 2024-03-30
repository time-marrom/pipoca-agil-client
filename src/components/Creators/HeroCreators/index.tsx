"use client";

import Link from "next/link";
import Image from "next/image";
import ibson from "@/components/Photos/ibson.svg";
import iconLinkedin from "@/assets/iconLinkedin.svg";
import { getSanityCreatorsContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface HeroCreatorsProps {
  content: CreatorsContent;
}

export function HeroCreators({ content }: HeroCreatorsProps) {
  const { data } = useQuery({
    queryKey: ["creators"],
    queryFn: getSanityCreatorsContent,
    initialData: content,
  });

  return (
    <div className="w-full h-full  flex flex-col lg:flex-col justify-center px-8 pt-20 md:pt-40 md:pb-20 items-center bg-[#FCCF5C]">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center lg:items-start gap-2 ">
        <Image
          className="h-[250px] w-[300px] md:h-[280px] md:w-[320px] lg:h-[450px] lg:w-[600px] md:block hidden"
          src={ibson}
          alt="Montagem com a foto de um homem que sorri. Ele possui cabelo curto e grisalho, barba, usa óculos preto e camiseta cinza, e está de braços cruzados. Ao fundo, em volta da foto, está o símbolo do framework Scrum"
        />
        <div className=" h-full w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col justify-between items-start ">
          <div>
            <h3 className=" text-theme-grayscale-black text-[32px]  md:text-5xl lg:text-[64px] font-medium font-title leading-[62px] xl:text-start mb-4 lg:mb-6">
              {data.creatorsHeroTitle}
            </h3>
            <p className="max-w-max text-start md:text-start font-sans mb-6 text-base font-semibold md:text-2xl md:font-normal">
              {data.creatorsHeroSubtitle}
            </p>

            <div className="w-full flex flex-col justify-center items-center lg:items-start space-y-2">
              <Image
                className="h-[250px] w-[300px] md:h-[450px] md:w-[600px] block md:hidden my-6 0"
                src={ibson}
                alt="Montagem com a foto de um homem que sorri. Ele possui cabelo curto e grisalho, barba, usa óculos preto e camiseta cinza, e está de braços cruzados. Ao fundo, em volta da foto, está o símbolo do framework Scrum"
              />
            </div>
          </div>
          <div className="flex-col justify-start items-start text-start font-sans text-base font-normal  w-full max-w-[625px] hidden md:hidden lg:block">
            <p className="mb-6 ">{data.creatorsHeroFirstParagraph}</p>
            <p>{data.creatorsHeroSecondParagraph}</p>
            <div className="flex flex-row text-start items-start my-10 ">
              <Image src={iconLinkedin} alt="icone linkedin" />
              <Link
                href="https://www.linkedin.com/in/ibson-cabral"
                target="_blank"
                className="font-title text-base font-semibold underline text-[#7401B7] px-2 "
              >
                LinkedIn do Ibson
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-col justify-start items-start text-start font-sans text-base font-normal md:block lg:hidden w-full md:mt-6">
        <p className="mb-6 ">{data.creatorsHeroFirstParagraph}</p>
        <p>{data.creatorsHeroSecondParagraph}</p>
        <div className="flex flex-row text-start items-start my-10">
          <Image src={iconLinkedin} alt="icone linkedin" />
          <Link
            href="https://www.linkedin.com/in/ibson-cabral"
            target="_blank"
            className="font-title text-base font-semibold underline text-[#7401B7] px-2 "
          >
            LinkedIn do Ibson
          </Link>
        </div>
      </div>
    </div>
  );
}
