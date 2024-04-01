import { menuOptions } from "@/utils/menu";
import { socialMedias } from "@/utils/social";
import Link from "next/link";
import { Item } from "./components/item";

export function Footer(): JSX.Element {
  const footerOptions = menuOptions.slice().sort((a, b) => a.order - b.order);

  const orderSocialMedias = socialMedias
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-[#F6F6F6] py-10  md:py-2 lg:py-4  px-6 md:px-16 lg:px-36 w-full h-full flex flex-col gap-12 lg:gap-8 md:gap-4">
      <div className=" w-full h-full flex flex-col justify-center items-center md:flex-row  gap-8  font-sans text-[#3A3A3A]  bg-red-500">
        <div className="max-w-max md:w-2/3 lg:w-1/5 flex flex-col justify-center items-center md:items-start  gap-4 bg-green-300 ">
          <h4 className="font-title font-semibold text-base text-[#3A3A3A] ">
            Siga o Pipoca Ágil nas redes sociais
          </h4>
          <ul className="w-full flex flex-row gap-10 justify-center items-center md:justify-between  bg-violet-500 ">
            {orderSocialMedias.map(({ name, path, icon: Icon }) => (
              <li key={name}>
                <Link href={path} target="_blank">
                  <Icon className="h-8 w-8 fill-[#431B61] " />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-full h-full flex flex-col  items-center gap-2 lg:my-4 py-2 bg-slate-500"> */}
        <ul className="h-full w-full flex flex-col  md:grid md:grid-cols-3 md:grid-rows-3 lg:flex-row lg:justify-evenly lg:gap-4 items-center lg:items-end text-center lg:text-end  bg-pink-400">
          {footerOptions.map(({ name, path }, index) => (
            <li
              key={name}
              className="flex flex-row text-base  items-center md:py-2 py-4  bg-blue-300 md:w-1/3"
            >
              <Item name={name} path={path} order={index} />
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
      <hr className=" w-full h-0.5 bg-[#431B61]" />
      <div className="w-full h-full flex flex-col justify-between items-center  font-sans text-xs font-light text-center text-[#3A3A3A] lg:px-4">
        <p className="font-sans text-sm font-normal">&copy;2024 Time Marrom</p>
        <p className="font-sans text-sm font-normal">
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
