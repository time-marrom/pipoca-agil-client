import Image from "next/image";
import Link from "next/link";
import adelia from "@/components/Photos/adelia.svg";
import anna from "@/components/Photos/anna.svg";
import danilo from "@/components/Photos/danilo.svg";
import gabi from "@/components/Photos/gabi.svg";
import gisa from "@/components/Photos/gisa.svg";
import josi from "@/components/Photos/josi.svg";
import luyara from "@/components/Photos/luyara.svg";
import monique from "@/components/Photos/monique.svg";
import nathalia from "@/components/Photos/nathalia.svg";
import paulo from "@/components/Photos/paulo.svg";
import ricardo from "@/components/Photos/ricardo.svg";

import iconLinkedin from "@/assets/iconLinkedin.svg";
import iconGlobo from "@/assets/iconGlobo.svg";

const team = [
  {
    id: 1,
    photo: adelia,
    name: "Adélia Volpato",
    role: "Product Owner",
    linkedin: "https://www.linkedin.com/in/adeliavolpato ",
    portfolio: "",
    alt: "Foto de uma mulher com braços cruzados. Ela sorri, possui cabelo castanho claro e está num fundo amarelo",
  },
  {
    id: 2,
    photo: anna,
    name: "Anna Lopes",
    role: "Analista QA",
    linkedin: "https://www.linkedin.com/in/annagabrieleribeirolopes",
    portfolio: "https://www.behance.net/annagrl",
    alt: "Foto de uma mulher com as mãos na cintura. Ela sorri, possui cabelo castanho e usa óculos. Ao fundo tem um quadro azul com letras e nomes",
  },
  {
    id: 3,
    photo: danilo,
    name: "Danilo Oliveira",
    role: "Scrum Master",
    linkedin: "https://www.linkedin.com/in/danilo-pacheco-de-oliveira",
    portfolio: "",
    alt: "Foto de um homem que sorri. Ele possui cabelo curto e preto, usa uma blusa azul e está num fundo branco",
  },
  {
    id: 4,
    photo: gabi,
    name: "Gabrielle Oliveira",
    role: "Dev Front-end",
    linkedin: "https://www.linkedin.com/in/gabrielle-oliveira-08855919a/ ",
    portfolio: "",
    alt: "Foto de rosto de uma mulher. Ela faz uma expressão um pouco séria, possui cabelo castanho, olhos castanho escuros e está num fundo branco e marrom",
  },
  {
    id: 5,
    photo: gisa,
    name: "Gislaine Vieira",
    role: "Scrum Master",
    linkedin: "https://www.linkedin.com/in/gislaine-cardoso-vieira",
    portfolio: "",
    alt: "Foto de uma mulher que sorri. Ela possui cabelo preto e liso, usa uma blusa preta e está num fundo branco",
  },
  {
    id: 6,
    photo: josi,
    name: "Josiemerson Teixeira",
    role: "Dev Front-end",
    linkedin: "https://www.linkedin.com/in/josiemerson-teixeira-bb6422255/",
    portfolio: "",
    alt: "Foto de um homem com a mão na lateral do rosto. Ele possui cabelo preto, barba e bigode e ao fundo se vê uma porta marrom numa parede branca",
  },
  {
    id: 7,
    photo: luyara,
    name: "Luyara Marinho",
    role: "Analista QA",
    linkedin:
      "https://www.linkedin.com/in/luyara-karoline-marinho-paiva-43472849",
    portfolio: "",
    alt: "Foto de uma mulher que faz uma expressão mais séria. Ela possui cabelo preto na altura dos ombros e usa uma blusa branca com detalhes pretos",
  },
  {
    id: 8,
    photo: monique,
    name: "Monique Barboza",
    role: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/moniquebarboza",
    portfolio: "",
    alt: "Foto de rosto de uma mulher que sorri. Ela possui cabelo ruivo, usa um colar prata, blusa preta e está num fundo branco",
  },
  {
    id: 9,
    photo: nathalia,
    name: "Nathalia Marcelo",
    role: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/nathaliamarcello",
    portfolio: "https://nathaliamarcello.framer.website/",
    alt: "Foto de uma mulher que sorri. Ela possui cabelo castanho claro na altura dos ombros e ao fundo há plantas e árvores",
  },
  {
    id: 10,
    photo: paulo,
    name: "Paulo Ruan",
    role: "Dev Full-stack",
    linkedin: "https://www.linkedin.com/in/pauloruan",
    portfolio: "",
    alt: "Foto de um homem que sorri. Ele possui cabelo curto e preto, barba e bigode, usa óculos e camisa cinza clara e está num fundo branco",
  },
  {
    id: 11,
    photo: ricardo,
    name: "Ricardo Lobato",
    role: "Product Owner",
    linkedin: "https://www.linkedin.com/in/ricardolobato18",
    portfolio: "",
    alt: "Foto de um homem que sorri. Ele não possui cabelo, usa uma blusa social azul escura e está num fundo branco",
  },
];

export function Card(): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {team.map((member) => (
        <div key={member.id} className="h-6/6 w-6/6 gap-4">
          <div className="bg-white shadow-lg rounded-2xl my-4  flex flex-col justify-between ">
            <div className="relative overflow-hidden rounded-t-2xl ">
              <Image
                src={member.photo}
                alt={member.alt}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between bg-[#FCCF5C] p-3 rounded-b-2xl h-[140px]  md:h-1/2 lg:h-[140px]">
              <h2 className="text-xl font-semibold font-title">
                {member.name}
              </h2>
              <div className="flex flex-row justify-between  mt-4">
                <div>
                  <p className="text-[#5A0C94] font-sans font-normal text-sm ">
                    {member.role}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <Link href={member.linkedin} target="_blank">
                    <Image
                      src={iconLinkedin}
                      alt="Icon linkedin"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link href={member.portfolio}>
                    <Image
                      src={iconGlobo}
                      alt="Icon Globo"
                      width={22}
                      height={22}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
