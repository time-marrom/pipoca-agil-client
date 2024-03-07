"use client";

import Link from "next/link";
import Image from "next/image";
import ibson from "@/components/Photos/ibson.svg";
import iconLinkedin from "@/assets/iconLinkedin.svg";

// interface SimulationHeroProps {
//   content: SimulationContent;
// }

export function HeroCreators() {
  return (
    <div className="w-full h-full py-10 lg:h-[80vh] md:px-0 md:py-0 md:pb-0 lg:px-0 lg:py-10 flex flex-col lg:flex-row justify-center items-center bg-[#FCCF5C]">
      <div className="flex flex-row md:px-4">
        <Image
          className="h-[250px] w-[300px] md:h-[450px] md:w-[600px]"
          src={ibson}
          alt="Montagem com a foto de um homem que sorri. Ele possui cabelo curto e grisalho, barba, usa óculos preto e camiseta cinza, e está de braços cruzados. Ao fundo, em volta da foto, está o símbolo do framework Scrum"
        />
      </div>
      <div className="py-20 lg:w-[50%] lg:rounded-t-none px-4 md:px-8 xl:px-10 flex flex-col md:justify-center justify-center xl:items-start gap-6">
        <h3 className="text-theme-grayscale-black text-5xl lg:text-5xl font-[500] font-title leading-[62px] text-center xl:text-start mb-4">
          Ibson Cabral
        </h3>
        <div className="lg:w-[70%]">
          <p className="w-full text-center md:text-start font-sans mb-6 text-2xl font-normal">
            Criador do Pipoca Ágil e da Simulação de Projetos Ágeis
          </p>
          <span className="font-sans text-base font-normal ">
            <p className="mb-6">
              Ibson é um facilitador e entusiasta da transformação ágil e
              digital. Com o objetivo de criar um podcast "chão de fábrica",
              para contar casos reais e soluções práticas para a implementação
              da agilidade na transformação digital das empresas, ele criou o
              Pipoca Ágil.
            </p>
            <p>
              Além disso, em 2023, ele criou a iniciativa "Simulação de Projetos
              Ágeis", com o objetivo de oferecer um ambiente seguro para que
              pessoas em transição de carreira possam colocar em pártica seus
              conhecimentos.
            </p>
          </span>
        </div>
        <div className="flex flex-row m-auto xl:m-0  hover:translate-y-[-10px] hover:duration-1000 hover:transition-all">
          <Image src={iconLinkedin} alt="icone linkedin" />
          <Link
            href="https://www.linkedin.com/in/ibson-cabral/"
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
