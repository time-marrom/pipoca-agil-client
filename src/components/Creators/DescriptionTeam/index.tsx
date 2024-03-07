import { Card } from "../Card";
import { HeroCreators } from "../HeroCreators";

export function DescriptionTeam(): JSX.Element {
  return (
    <>
      <HeroCreators />
      <div className="bg-[#FCCF5C] w-full">
        <div className="w-full h-full flex flex-col items-center justify-center text-start py-12 2xl:px-80 xl:px-36 px-8 rounded-t-[90px] md:px-8 md:py-20 lg:px-32 lg:py-40 bg-[#FCFCFC]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 md:items-start">
            <div className="flex flex-col items-start justify-center gap-8 w-full ">
              <h3 className="text-theme-grayscale-black text-4xl md:text-5xl font-semibold font-title mb-8 text-start ">
                Time Marrom
              </h3>
              <p className="text-theme-grayscale-darker font-sans text-[16px] md:text-[24px] text-start lg:w-[70%] ">
                Participamos como voluntários na Simulação e somos os
                responsáveis pela criação desse site
              </p>
            </div>

            <div className="w-full flex flex-col items-center py-4 gap-12 md:gap-20 md:flex-row">
              <div className=" flex flex-col items-center  md:items-start gap-4 md:gap-8 md:w-2/3">
                <p className=" font-sans font-normal text-base mb-2 md:text-2xl  md:w-full">
                  Utilizando o framework Scrum, nosso time desenvolveu esse site
                  com o propósito de facilitar o acesso para você, que tem
                  interesse e/ou gostaria de participar da Simulação. Além
                  disso, nossa intenção é te ajudar a esclarecer dúvidas sobre o
                  projeto.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 md:w-2/3">
                <p className="font-sans font-normal text-base  mb-2 md:text-2xl md:w-full ">
                  Dessa forma, otimizamos o tempo e esforço da equipe de gestão
                  da Simulação, para que possam te dar um maior suporte.
                  Melhoramos também a sua experiência desde antes mesmo de você
                  entrar no projeto.
                </p>
              </div>
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
