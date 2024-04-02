import { menuOptions } from "@/utils/menu"
import { socialMedias } from "@/utils/social"
import Link from "next/link"

export function Footer() {
  const footerOptions = menuOptions.slice().sort((a, b) => a.order - b.order)
  const orderSocialMedias = socialMedias.slice().sort((a, b) => a.order - b.order)
  const tabletOptions = [
    [footerOptions[0]],
    [footerOptions[1], footerOptions[3]],
    [footerOptions[2], footerOptions[4], footerOptions[5]]
  ]

  return (
    <footer className="bg-[#F6F6F6] w-full h-full py-10 px-4 md:px-10 lg:px-36 flex flex-col justify-center items-center">
      {/* mobile */}
      <div className="w-full h-full flex md:hidden lg:hidden flex-col justify-center items-center gap-12">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <p className="text-base font-medium font-title">
            Siga o Pipoca Ágil nas redes sociais
          </p>
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
        <ul className="h-full w-full flex flex-col items-center text-center">
          {footerOptions.map(({ name, path }) => (
            <li
              key={name}
              className="flex flex-row items-center md:items-start md:py-2 py-4 "
            >
              <Link href={path}>
                <span className="flex flex-row hover:text-[#b667f3] underline text-base font-medium font-title">
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-full h-0.5 bg-[#431B61]" />
        <div className="h-full w-full flex flex-col items-center text-center space-y-3">
          <p className="font-sans font-normal text-sm">&copy; 2024 Time Marrom</p>
          <p className="font-sans font-normal text-sm">Todos os direitos reservados</p>
        </div>
      </div>

      {/* tablet */}
      <div className="w-full h-full hidden md:flex lg:hidden flex-col justify-center items-center gap-12">
        <div className="w-full flex">
          <div className="w-2/5 flex flex-col justify-start items-start space-y-4">
            <p className="text-base font-medium font-title">
              Siga o Pipoca Ágil nas redes sociais
            </p>
            <ul className="flex flex-row gap-10">
              {orderSocialMedias.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link href={path} target="_blank">
                    <Icon className="h-8 w-8 fill-[#431B61] " />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="w-3/5 flex flex-row justify-end items-start gap-8">
            {tabletOptions.map((array, index) => (
              <div className="flex flex-col gap-4 items-end justify-end" key={index}>
                {array.map(({ name, path }) => (
                  <li
                    key={name}
                    className="flex flex-row items-center md:items-start md:py-2 py-4 "
                  >
                    <Link href={path}>
                      <span className="flex flex-row hover:text-[#b667f3] underline text-base font-medium font-title">
                        {name}
                      </span>
                    </Link>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
        <hr className="w-full h-0.5 bg-[#431B61]" />
        <div className="h-full w-full flex flex-col items-center text-center space-y-3">
          <p className="font-sans font-normal text-sm">&copy; 2024 Time Marrom</p>
          <p className="font-sans font-normal text-sm">Todos os direitos reservados</p>
        </div>
      </div>

      {/* desktop */}
      <div className="w-full h-full hidden lg:flex flex-col justify-center items-center gap-8">
        <div className="w-full h-full flex justify-between items-start">
          <div className="w-1/3 flex flex-col justify-start items-start space-y-4">
            <p className="text-base font-medium font-title">
              Siga o Pipoca Ágil nas redes sociais
            </p>
            <ul className="flex flex-row gap-10">
              {orderSocialMedias.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link href={path} target="_blank">
                    <Icon className="h-8 w-8 fill-[#431B61] " />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="w-2/3 flex flex-row justify-end items-start gap-4">
            {footerOptions.map(({ name, path }) => (
              <li
                key={name}
                className="flex flex-row items-center md:items-start md:py-2 py-4 "
              >
                <Link href={path}>
                  <span className="flex flex-row hover:text-[#b667f3] underline text-base font-medium font-title">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full h-0.5 bg-[#431B61]" />
        <div className="h-full w-full flex flex-col items-center text-center space-y-3">
          <p className="font-sans font-normal text-sm">&copy; 2024 Time Marrom</p>
          <p className="font-sans font-normal text-sm">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
