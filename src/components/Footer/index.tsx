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
    <footer className="bg-[#F6F6F6] py-4 w-full h-full flex flex-col justify-between items-center gap-4 p-4">
      <div className="w-full lg:w-[90vw] h-full flex flex-col lg:flex-row-reverse justify-between items-center gap-2 font-sans text-[#3A3A3A]">
        <h4 className="block lg:hidden">Siga o Pipoca Ágil</h4>
        <ul className="flex flex-row lg:flex-col gap-1 mb-1 ">
          {orderSocialMedias.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <Link href={path} target="_blank">
                <Icon className="h-6 w-6 fill-[#431B61]" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-full flex flex-col justify-between items-center gap-2 my-4 py-2">
          <p className="block lg:hidden my-2">Navegação</p>
          <ul className="w-2/3 h-full flex flex-col lg:flex-row justify-between items-center gap-2 text-sm ">
            {footerOptions.map(({ name, path, options }) => (
              <li key={name} className="font-title font-semibold text-base ">
                <Link href={path}>
                  <span className="hover:text-[#b667f3] underline">{name}</span>
                </Link>
                {options && options.length > 0 && (
                  <ul>
                    {options.map((option: string) => (
                      <li key={option}>
                        <Link
                          href={`${path}/${option
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <span className=" font-sans">{option}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-[#431B61]" />
      <div className="w-full h-full flex flex-col justify-between items-center gap-1 font-sans text-xs font-light text-[#3A3A3A] p-4">
        <p>&copy;Time Marrom 2023. Todos os direitos reservados</p>
        <p>Ibson Cabral</p>
        <p>pipocaagil@gmail.com</p>
        <p>Rio de Janeiro - RJ</p>
      </div>
    </footer>
  );
}
