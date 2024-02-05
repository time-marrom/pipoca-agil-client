"use client"

import icon from "@/assets/icon-popCorn.svg"
import { menuOptions } from "@/utils/menu"
import { socialMedias } from "@/utils/social"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { MenuIcon } from "../icons/MenuIcon"
import { Button } from "../ui/button"
import { Menu } from "./Menu"

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = useCallback(() => {
    setMenuIsOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false)
  }, [])

  const orderSocialMedias = socialMedias.slice(0, 3).sort((a, b) => a.order - b.order)

  const headerOptions = menuOptions.filter(
    (option) =>
      option.name !== "Sobre os criadores" && option.name !== "Quero voluntariar"
  )

  return (
    <header className="flex justify-between items-center text-sm py-3 px-5">
      <Image src={icon} alt="icone de um microfone - pipoca ágil" />
      <nav className="hidden lg:flex items-center gap-10 text-md">
        <ul className="flex flex-row gap-12 text-base">
          {headerOptions.map(({ name, path }) => (
            <li key={name} className="font-sans font-semibold">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <Button
          className="border-2 border-[#5A0C94] text-[#5A0C94] rounded-2xl"
          variant="outline"
          asChild
        >
          <Link href="/simulacao/inscricao" className="font-title">
            Quero voluntariar
          </Link>
        </Button>
      </nav>
      <div className="hidden md:flex flex-row justify-center items-center gap-10">
        <ul className="flex flex-row gap-4">
          {orderSocialMedias.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <Link href={path} target="_blank">
                <Icon className="h-8 w-8 fill-theme-grayscale-black" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button size="icon" variant="ghost" className="p-1 lg:hidden" onClick={openMenu}>
        <MenuIcon className="h-6 w-6 fill-theme-grayscale-black" />
      </Button>
      <Menu isVisible={menuIsOpen} onClose={closeMenu} />
    </header>
  )
}
