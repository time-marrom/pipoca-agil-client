import { Button } from "@/components/ui/button";
import Link from "next/link";

const mock = [
  "45 grupos ativos hoje",
  "450 pessoas participando hoje",
  "10 temas em andamento",
  "média de 3 meses de duração",
];

export function SimulationCTA(): JSX.Element {
  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col items-start justify-between text-start">
      <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
        Simulação Ágil
      </h3>
      <div className="w-full h-full flex flex-col-reverse md:flex-row items-start justify-between gap-6">
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center text-start">
          <p className="text-grayscale-darkest text-start font-sans mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, voluptatem sunt? Repellat non et in adipisci soluta
            vitae doloremque nemo error, sed tenetur ad blanditiis deserunt
            deleniti repudiandae saepe praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum nemo iure ipsum. Vel dicta tenetur molestias ad aliquid, iusto quo dolores quas ullam? Atque, ducimus! Corrupti vero odio officiis.
          </p>
          <div className="w-full h-full flex flex-row justify-start items-center gap-4">
            <Button variant="default" size="sm" asChild>
              <Link href="/simulacao/inscricao" className="font-sans text-base">
                Quero ser voluntário
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/simulacao/inscricao" className="font-sans text-base">
                Quero ser mentor
              </Link>
            </Button>
          </div>
        </div>
        <ul className="list-disc list-outside w-full md:w-1/2 h-full flex flex-col items-start justify-center text-start mx-5">
          {mock.map((item) => (
            <li
              key={item}
              className="text-grayscale-black text-start font-sans mb-2 lg:mb-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
