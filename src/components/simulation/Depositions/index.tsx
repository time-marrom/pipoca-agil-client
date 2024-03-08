import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

interface IData {
  text: string
  author: string
}

const data: IData[] = [
  {
    author: "- Ronald Petrotheli, Product Owner",
    text: "Atuei como Product Owner por 7 meses, que posso considerar o projeto mais querido pelo LinkedIn. Aprendi muito no que concerne a escrever uma boa escrita de história de usuário, saber ouvir cliente, e a espinha dorsal para que possamos entregar valor percebido para o mesmo. Trabalhar em equipe, ter resiliência e um bom poder de comunicação foram os principais alicerces para complementar as características para ser um bom Product Owner. Parabéns pelo projeto Ibson!! Grato"
  },
  {
    author: "- Karen Mussi Peixoto, Scrum Master",
    text: "Estou como Scrum Master na Squad Popcorners e só tenho a agradecer a oportunidade de fazer parte do time Pipoca Ágil, como falei com o Ibson no início quando entrei para o time em meados de outubro de 2023, essa oportunidade é sensacional. Ter a oportunidade de aprender na prática e ainda contar com a mentoria do mestre da agilidade Ibson é muito gratificante. Com certeza esta participação vem contribuindo muito para meu aprendizado como Scrum Master e com o Mundo Ágil, que é tão encantador, repleto de possibilidades de crescimento e trocas sensacionais. Obrigada Pipoca Ágil por proporcionar tanto conhecimento e oportunidades para tantos profissionais. Grande abraço."
  },
  {
    author: "- Tiago Mata, Analista de QA",
    text: "O projeto Pipoca 🍿 me proporcionou ter minha primeira experiência em um grupo ágil, utilizando a metodologia Scrum. E pude ter o contato e a primeira vivência profissional dentro de uma equipe luz rosa 🌹 que tenho em meu coração 💓."
  },
  {
    author: "- Priscila Vieira, Analista de QA",
    text: "Participar do projeto Pipoca Ágil foi muito importante para a minha carreira. Tive a possibilidade de aprimorar meus conhecimentos na área de QA e entender melhor sobre o mundo ágil. Foi um privilégio estar em um time engajado como o Azul Ciano. Nada como ter um ambiente apropriado para colocar a mão na massa. Esse projeto é transformador 😍. Estou muito feliz pela oportunidade."
  }
]

export function Depositions() {
  return (
    <div className="h-full w-full bg-[#FCCF5C]">
      <div className="w-full h-full flex flex-col items-center justify-center text-center py-20 px-8  md:px-8 md:py-20 rounded-t-[90px]  lg:px-32 lg:py-40 bg-[#FCFCFC]">
        <h3 className="text-theme-grayscale-black text-4xl md:text-5xl font-semibold font-title mb-8 text-center">
          Palavras de quem já participou
        </h3>

        <Carousel className="w-[70vw] md:w-full max-w-5xl">
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem key={index} className="">
                <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4">
                  <p className="text-theme-grayscale-black font-sans text-sm md:text-base text-center lg:w-[70%]">
                    {item.text}
                  </p>
                  <p className="text-theme-secondary-base font-title text-sm md:text-base text-center font-medium lg:w-[70%]">
                    {item.author}
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
  )
}
