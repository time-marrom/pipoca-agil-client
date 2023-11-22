import { mockArray } from "@/components/simulation/SimulationTestimony";
import Link from "next/link";

export function SimulationCTA() {
  return (
    <div className="w-full h-[490px] p-8 flex flex-row justify-between items-start bg-theme-white-lighter">
      <div className="w-1/2">
        <ul className="list-disc w-10/12 space-y-3">
          {mockArray.map(({ testimony, id }) => (
            <li key={id} className="font-sans font-normal text-base italic">
              {testimony}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 flex flex-col justify-start items-start space-y-4">
        <h3 className="font-sans font-medium text-lg">Para quem é?</h3>
        <p className="font-sans font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          perferendis exercitationem velit illum veritatis cumque eum voluptatem
          amet labore accusamus vero consequatur minima, eveniet reprehenderit
          nulla assumenda ipsa mollitia at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure perferendis exercitationem velit
          illum veritatis cumque eum voluptatem amet labore accusamus vero
          consequatur minima, eveniet reprehenderit nulla assumenda ipsa
          mollitia at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link
          href="/simulacao/inscricao"
          className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
        >
          Inscreva-se
        </Link>
      </div>
    </div>
  );
}
