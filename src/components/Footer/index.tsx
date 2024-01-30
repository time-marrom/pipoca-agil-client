import { menuOptions } from "@/utils/menu";
import { socialMedias } from "@/utils/social";
import Link from "next/link";

export function Footer(): JSX.Element {
  const footerOptions = menuOptions.filter(
    (option) => option.name !== "Quero mentorar"
  );

  const orderSocialMedias = socialMedias
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-[#F6F6F6] py-10  md:py-2 lg:py-4  px-6 md:px-16 lg:px-36 w-full h-full flex flex-col justify-between items-center  gap-12 lg:gap-8 md:gap-4">
      <div className=" w-full h-full flex flex-col md:flex-row-reverse justify-between items-start gap-8 lg:gap-2 font-sans text-[#3A3A3A]">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end lg:mb-20 gap-4 lg:gap-8">
          <h4 className="font-title font-semibold text-base text-[#3A3A3A] ">
            Siga o Pipoca Ágil
          </h4>
          <ul className="flex flex-row gap-10  md:gap-4 ">
            {orderSocialMedias.map(({ name, path, icon: Icon }) => (
              <li key={name}>
                <Link href={path} target="_blank">
                  <Icon className="h-8 w-8 fill-[#431B61] " />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-full flex flex-col  justify-between items-center lg:items-start gap-2 lg:my-4 py-2">
          <p className="block md:hidden my-2">Navegação</p>
          <ul className=" h-full w-full flex flex-col md:flex-row lg:gap-20 md:gap-4 md:items-start items-center text-center md:text-start">
            {footerOptions.map(({ name, path, options }) => (
              <li
                key={name}
                className="flex-row items-center md:items-start  md:py-2 py-4 "
              >
                <Link href={path}>
                  <span className="flex-row hover:text-[#b667f3] underline text-base font-semibold font-title ">
                    {name}
                  </span>
                </Link>
                {options && options.length > 0 && (
                  <ul className="flex flex-col ">
                    {options.map((option: string) => (
                      <li className=" lg:my-2 text-[12px] " key={option}>
                        <span className="flex flex-col font-sans text-sm font-normal py-2">
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className=" w-full h-0.5 bg-[#431B61]" />
      <div className="w-full h-full flex flex-col justify-between items-center gap-4 font-sans text-xs font-light text-center text-[#3A3A3A] lg:px-4">
        <p className="font-sans text-sm font-normal">
          &copy;Time Marrom 2023. Todos os direitos reservados
        </p>
        <div className="w-full h-full flex flex-col justify-between items-center font-sans text-xs font-light text-[#3A3A3A]">
          <p className="font-sans text-sm font-normal">Ibson Cabral</p>
          <p className="font-sans text-sm font-normal">pipocaagil@gmail.com</p>
          <p className="font-sans text-sm font-normal">Rio de Janeiro - RJ</p>
        </div>
      </div>
    </footer>
  );
}
