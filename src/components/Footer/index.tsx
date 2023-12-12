import { menuOptions } from "@/utils/menu";
import { socialMedias } from "@/utils/social";
import Link from "next/link";

export function Footer(): JSX.Element {
  const footerOptions = menuOptions.filter(
    (option) => option.name !== "Início"
  );

  const orderSocialMedias = socialMedias
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-[#431B61] py-4 w-full h-full flex flex-col justify-between items-center gap-4 p-4">
      <div className="w-full lg:w-[90vw] h-full flex flex-col lg:flex-row-reverse justify-between items-center gap-2 font-sans text-white">
        <h4 className="block lg:hidden">Siga o Pipoca Ágil</h4>
        <ul className="flex flex-row lg:flex-col gap-1 mb-1">
          {orderSocialMedias.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <Link href={path} target="_blank">
                <Icon className="h-6 w-6 fill-[#FCCF5C]" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-full flex flex-col justify-between items-center gap-2 my-4 py-2">
          <p className="block lg:hidden my-2">Navegação</p>
          <ul className="w-2/3 h-full flex flex-col lg:flex-row justify-between items-center gap-2 text-sm">
            {footerOptions.map(({ name, path }) => (
              <li key={name} className="font-sans font-semibold">
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-[#FCCF5C]" />
      <div className="w-full h-full flex flex-col justify-between items-center gap-1 font-sans text-xs font-light text-theme-white-base p-4">
        <p>&copy;Time Marrom 2023. Todos os direitos reservados</p>
        <p>Ibson Cabral</p>
        <p>pipocaagil@gmail.com</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Rio de Janeiro - RJ</p>
      </div>
    </footer>
  );
}
