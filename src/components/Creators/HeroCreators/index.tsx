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
    <div className="w-full h-full py-10 lg:h-[82vh] md:px-0 md:py-0 md:pb-0 lg:px-0 lg:py-10 flex flex-col lg:flex-row justify-center items-center bg-[#FCCF5C]">
      <div className="flex flex-row md:px-4 ">
        <Image
          className="h-[250px] w-[300px] md:h-[450px] md:w-[600px] md:block hidden"
          src={ibson}
          alt="Montagem com a foto de um homem que sorri. Ele possui cabelo curto e grisalho, barba, usa óculos preto e camiseta cinza, e está de braços cruzados. Ao fundo, em volta da foto, está o símbolo do framework Scrum"
        />
      </div>
      <div className=" h-full py-20 lg:w-[50%] lg:rounded-t-none px-4 md:px-8 xl:px-10 flex flex-col flex-nowrap md:justify-center justify-center items-center lg:items-start md:gap-2 lg:gap-3 ">
        <h3 className=" text-theme-grayscale-black text-[32px]  md:text-5xl lg:text-[64px] font-medium font-title leading-[62px] xl:text-start mb-4">
          {data.creatorsHeroTitle}
        </h3>
        <div className="w-full flex flex-col justify-center items-center lg:items-start space-y-2">
          <p className="max-w-max text-start md:text-start font-sans mb-6 text-2xl font-normal">
            {data.creatorsHeroSubtitle}
          </p>
          <Image
            className="h-[250px] w-[300px] md:h-[450px] md:w-[600px] block md:hidden my-6 0"
            src={ibson}
            alt="Montagem com a foto de um homem que sorri. Ele possui cabelo curto e grisalho, barba, usa óculos preto e camiseta cinza, e está de braços cruzados. Ao fundo, em volta da foto, está o símbolo do framework Scrum"
          />
          <div className="flex flex-col justify-start items-start text-start font-sans text-base font-normal  w-full max-w-[625px]">
            <p className="mb-6 ">{data.creatorsHeroFirstParagraph}</p>
            <p>{data.creatorsHeroSecondParagraph}</p>
            <div className="flex flex-row text-start items-start justify-center py-2 my-6 ">
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
    </div>
  );
}
