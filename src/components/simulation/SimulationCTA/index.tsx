import Image from "next/image";
import Link from "next/link";

export function SimulationCTA() {
  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col-reverse lg:flex-row justify-between items-center bg-theme-white-lighter">
      <div className="w-full lg:w-1/2"></div>
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start space-y-5 my-5">
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
