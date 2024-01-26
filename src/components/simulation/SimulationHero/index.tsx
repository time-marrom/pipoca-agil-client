import Image from "next/image";
import simulationImage from "@/assets/simulacao.png";

export function SimulationHero() {
  return (
    <div className="w-full h-full pb-10 flex justify-between items-center bg-[#FCCF5C]">
      <div className="bg-white h-2/4 w-2/5 rounded-r-full overflow-hidden">
        <Image
          src={simulationImage}
          alt="imagem de três pessoas observando um notebook"
        />
      </div>

      <div className=" bg-[#FCCF5C] h-full w-1/2">
        <h3 className=" w-1/3 text-theme-grayscale-black text-5xl font-medium font-title mb-4">
          Simulação de Projetos Ágeis
        </h3>
        <p className="w-full lg:w-1/2 text-center md:text-start font-sans mb-6 text-theme-grayscale-darkest">
          Mão na massa! Coloque seus conhecimentos em prática e ganhe
          experiência para conquistar a vaga dos sonhos!
        </p>
      </div>
    </div>
  );
}
