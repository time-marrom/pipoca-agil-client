"use client";

import icon from "@/assets/icon-popCorn.svg";
import { menuOptions } from "@/utils/menu";
import { socialMedias } from "@/utils/social";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { Button } from "../ui/button";
import { Menu } from "./Menu";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const headerOptions = menuOptions.filter((option) => option.name);

  return (
    <header className="w-full flex justify-between md:justify-between items-center text-sm py-3 px-5">
      <Image src={icon} alt="icone de um microfone - pipoca ágil" />
      <nav className="hidden lg:flex items-center gap-10 text-md ">
        <ul className="flex flex-row gap-12 text-base ">
          {headerOptions.map(({ name, path }) => (
            <li
              key={name}
              className="font-title font-medium hover:text-[#5A0C94] hover:underline"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex justify-between w-[330px]">
        <Button
          className="bg-[#FCFCFC] border-4 border-[#5A0C94] text-[#5A0C94] rounded-2xl p-5 hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:bg-[#FCFCFC] "
          variant="default"
          asChild
        >
          <Link
            href="/inscricao/mentor"
            className="font-title text-2xl font-[600]"
          >
            Quero Mentorar
          </Link>
        </Button>

        <Button
          className="border-none border-[#5A0C94] text-white rounded-2xl p-6 xl:m-0  hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]"
          variant="default"
          asChild
        >
          <Link
            href="/inscricao/voluntario"
            className="font-title text-2xl font-[600]"
          >
            Quero voluntariar
          </Link>
        </Button>
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="p-1 lg:hidden"
        onClick={openMenu}
      >
        <MenuIcon className="h-6 w-6 fill-theme-grayscale-black" />
      </Button>
      <Menu isVisible={menuIsOpen} onClose={closeMenu} />
    </header>
  );
}
