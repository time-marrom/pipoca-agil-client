// import {} from "@/utils/"

import Image from "next/image"
import Link from "next/link"

const metrics = [
  {
    label: "Participantes na simulação",
    value: 150
  },
  {
    label: "Conteúdos/Vídeos",
    value: 250
  },
  {
    label: "Ouvintes no Spotify",
    value: 150
  },
  {
    label: "Inscrições no canal",
    value: 10000
  }
]

const activities = [
  "Escute sobre agilidade na vida real",
  "Oportunidade de praticar numa simulação",
  "Aprenda na trilha do básico ao avançado",
  "Dê risada com a gente ao longo do caminho"
]

export function Hero(): JSX.Element {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-start justify-between text-start font-sans p-12 gap-12 bg-white-light">
      <div className="flex flex-row justify-between items-start gap-8">
        <div className="w-2/3 h-full flex flex-col justify-between items-start gap-4">
          <h1 className="text-grayscale-black text-4xl font-bold font-title mb-4">
            Sobre o Pipoca Ágil
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic vel
            aliquid voluptate! Delectus, ab! Iure officiis natus nemo, labore deleniti
            quae et magnam suscipit error quibusdam aspernatur eaque ipsam! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Eum quasi quisquam harum commodi
            exercitationem facere reprehenderit beatae alias velit illo, adipisci animi,
            labore voluptate blanditiis asperiores provident voluptatem consequuntur
            nulla?
          </p>
          <Link
            href="/clube-pipoca"
            className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
          >
            Entrar no grupo do Pipoca
          </Link>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center justify-center gap-2">
          <Image
            src="https://static.wixstatic.com/media/a11c9d_4b60dddc591c4536a136a4eb44951fa9~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a11c9d_4b60dddc591c4536a136a4eb44951fa9~mv2.png"
            alt="Pipoca Ágil"
            width={500}
            height={500}
            priority
            className="w-60 h-60 object-cover object-center rounded-md"
          />
          <span className="font-sans font-thin italic text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
      <div className="w-full h-1/3">
        <ul className="flex flex-row items-center justify-between">
          {metrics.map((metric, index) => (
            <li
              key={index}
              className="flex flex-col text-center items-center justify-center w-1/5 h-28 rounded-md p-1 bg-primary-light"
            >
              <h3 className="font-sans text-2xl font-semibold">
                +{Number(metric.value).toLocaleString("pt-BR")}
              </h3>
              <span className="font-sans text-lg font-semibold">{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}