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
    <footer className="bg-[#F6F6F6] py-4 px-36 w-full h-full flex flex-col justify-between items-center gap-8  ">
      <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-between items-start gap-2 font-sans text-[#3A3A3A]">
        <div className="flex flex-col items-end mb-20 gap-8  ">
          <h4 className="font-title font-semibold text-base text-[#3A3A3A] ">
            Siga o Pipoca Ágil
          </h4>
          <ul className="flex flex-row gap-4  ">
            {orderSocialMedias.map(({ name, path, icon: Icon }) => (
              <li key={name}>
                <Link href={path} target="_blank">
                  <Icon className="h-8 w-8 fill-[#431B61] " />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-full flex flex-col justify-between items-start gap-2 my-4 py-2">
          <p className="block lg:hidden my-2">Navegação</p>
          <ul className="w-2/3 h-full flex flex-col lg:flex-row gap-20">
            {footerOptions.map(({ name, path, options }) => (
              <li key={name} className="flex-row items-center">
                <Link href={path}>
                  <span className="flex-row hover:text-[#b667f3] underline text-base font-semibold font-title">
                    {name}
                  </span>
                </Link>
                {options && options.length > 0 && (
                  <ul>
                    {options.map((option: string) => (
                      <li className="mb-8 mt-8 text-[12px]" key={option}>
                        <span>
                          <span className="flex flex-col font-sans text-sm font-normal">
                            {option}
                          </span>
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
      <div className="w-full h-full flex flex-col justify-between items-center gap-4 font-sans text-xs font-light text-[#3A3A3A] px-4">
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
