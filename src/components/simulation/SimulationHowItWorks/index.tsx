"use client";

import { getSanitySimulationContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/legacy/image";
import numberOneIcon from "../../../assets/simulationWorks_numberOne.svg";
import numberTwoIcon from "../../../assets/simulationWorks_numberTwo.svg";
import numberThreeIcon from "../../../assets/simulationWorks_numberThree.svg";
import { useEffect, useState } from "react";

interface SimulationHowItWorksProps {
  content: SimulationContent;
}

interface Props {
  children: React.ReactNode;
  numberIcon: any;
  type: "topLeft" | "bottomRight" | "topRightAndBottomLeft";
}

export function SimulationHowItWorks({ content }: SimulationHowItWorksProps) {
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

  function CardStepByStepSimulation({ children, numberIcon, type }: Props) {
    const roundedExcludingBottomRight =
      "md:rounded-s-[100px] md:rounded-t-[100px] rounded-s-[80px] rounded-t-[80px]";
    const roundedExcludingTopRightAndBottomLeft =
      "md:rounded-ee-[100px] md:rounded-ss-[100px] rounded-ee-[80px] rounded-ss-[80px]";
    const roundedExcludingTopLeft =
      "md:rounded-bl-[100px] md:rounded-r-[100px] rounded-bl-[80px] rounded-r-[80px]";

    const stylesRounded =
      type === "bottomRight"
        ? roundedExcludingBottomRight
        : type === "topLeft"
        ? roundedExcludingTopLeft
        : roundedExcludingTopRightAndBottomLeft;

    return (
      <div
        className={`flex flex-col gap-6 items-center flex-shrink bg-[#FCFCFC] p-6 md:p-8  ${stylesRounded} `}
      >
        <div className=" flex items-center justify-center flex-col gap-6 w-[90%]">
          <Image
            className="w-[64px] md:w-[120px] h-[64px]  md:h-[120px] "
            src={numberIcon}
            width={isSmaller ? 64 : 144}
            height={isSmaller ? 64 : 144}
          />

          <p className="text-base font-sans text-center">{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center  md:py-[104px] py-12 px-4 2xl:px-80 xl:px-36 gap-2 rounded-t-[90px]  bg-[#FCCF5C]">
      <div className="flex flex-col items-center gap-10 md:gap-14   w-full justify-between ">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <h3 className="text-[#252525] text-[32px] md:text-5xl font-[500px] font-title mb-4 text-center  ">
            {data.howToPanelTitle}
          </h3>
          <p className="font-sans font-normal text-base md:text-2xl mb-6 text-start text-[#3A3A3A] ">
            {/* {data.howToPanelSubtitle} */}
            Você irá trabalhar com pessoas de diversas áreas, formando um time.
          </p>
        </div>
        <div className="w-full 2xl:w-[80%] sm:w-[50%] gap-4 flex  items-center justify-center md:flex-row flex-col">
          <CardStepByStepSimulation
            numberIcon={numberOneIcon}
            type="bottomRight"
          >
            O seu time realizará reuniões frequentes para planejar e desenvolver
            um produto digital seguindo o Scrum, que é a metodologia ágil mais
            utilizada hoje em dia.
          </CardStepByStepSimulation>
          <CardStepByStepSimulation
            numberIcon={numberTwoIcon}
            type="topRightAndBottomLeft"
          >
            O seu time realizará reuniões frequentes para planejar e desenvolver
            um produto digital seguindo o Scrum, que é a metodologia ágil mais
            utilizada hoje em dia.
          </CardStepByStepSimulation>
          <CardStepByStepSimulation numberIcon={numberThreeIcon} type="topLeft">
            O seu time realizará reuniões frequentes para planejar e desenvolver
            um produto digital seguindo o Scrum, que é a metodologia ágil mais
            utilizada hoje em dia.
          </CardStepByStepSimulation>
        </div>
      </div>
    </div>
  );
}
