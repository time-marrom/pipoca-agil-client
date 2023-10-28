import { SocialGrid } from "@/components/SocialGrid"
import { menuOptions } from "@/utils/menu"
import Link from "next/link"

export function Footer(): JSX.Element {
  const footerOptions = menuOptions.filter((option) => option.name !== "Início")
  return (
    <footer className="min-w-full h-64 px-4 bg-[#FF9C00] flex flex-col items-center justify-between">
      <div className="flex w-full flex-row items-center justify-between">
        <ul className="h-full w-3/5 grid grid-rows-1 grid-cols-5  gap-4">
          {footerOptions.map((option) => (
            <li key={option.order} className="w-40 flex flex-col gap-1">
              <Link
                href={option.path}
                className="hover:underline hover:text-[#7401B7] hover:decoration-[#7401B7]"
              >
                <span className="text-sm">{option.name}</span>
              </Link>
              <span className="text-xs">{option.text}</span>
            </li>
          ))}
        </ul>
        <SocialGrid />
      </div>
      <hr className="w-full" />
      <div className="w-full flex flex-col gap-2 items-center justify-center text-center">
        <span className="text-xs">Desenvolvido por Time Marron</span>
        <span className="text-xs">© 2023 Todos os direitos reservados</span>
      </div>
    </footer>
  )
}
