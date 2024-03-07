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
import { socialMedias } from "@/utils/social";

const team = [
  {
    photo: adelia,
    name: "Adélia Volpato",
    role: "Product Owner",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: anna,
    name: "Anna Lopes",
    role: "Analista QA",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: danilo,
    name: "Danilo Oliveira",
    role: "Scrum Master",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: gabi,
    name: "Gabrielle Oliveira",
    role: "Dev Front-end",
    linkedin: "https://www.linkedin.com/in/gabrielle-oliveira-08855919a/ ",
    portfolio: "",
  },
  {
    photo: gisa,
    name: "Gislaine Vieira",
    role: "Scrum Master",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: josi,
    name: "Josiemerson Teixeira",
    role: "Dev Front-end",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: luyara,
    name: "Luyara Marinho",
    role: "Analista QA",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: monique,
    name: "Monique Barboza",
    role: "UX/UI Designer",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: nathalia,
    name: "Nathalia Marcelo",
    role: "UX/UI Designer",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: paulo,
    name: "Paulo Ruan",
    role: "Dev Full-stack",
    linkedin: " ",
    portfolio: "",
  },
  {
    photo: ricardo,
    name: "Ricardo Lobato",
    role: "Product Owner",
    linkedin: " ",
    portfolio: "",
  },
];

export function Card(): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
      {team.map((member, index) => (
        <div className=" h-6/6 w-5/6">
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl my-4  flex flex-col justify-between "
          >
            <div className="relative overflow-hidden rounded-t-2xl ">
              <Image
                src={member.photo}
                alt={member.name}
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
                  <Link href={member.linkedin}>
                    <Image
                      src={iconLinkedin}
                      alt="Icon linkedin"
                      width={23}
                      height={23}
                    />
                  </Link>
                  <Link href={member.portfolio}>
                    <Image
                      src={iconGlobo}
                      alt="Icon Globo"
                      width={23}
                      height={23}
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
