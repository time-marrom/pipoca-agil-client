"use client";

import icon from "@/assets/icon-popCorn.svg";
import { menuOptions } from "@/utils/menu";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { Button } from "../ui/button";
import { Menu } from "./Menu";
import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface HeaderProps {
  content: HomeContent;
}

export function Header({ content }: HeaderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const headerOptions = menuOptions.filter((option) => option.name);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white w-full h-14  md:h-20 flex justify-between md:justify-between items-center text-sm  px-5">
      <div className="h-full ">
        <Image
          className="h-[100%]"
          src={icon}
          alt="icone de um microfone - pipoca ágil"
        />
      </div>
      <nav className="hidden lg:flex items-center gap-10 text-md  ">
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
      <div className="w-1/2 max-w-max h-full flex items-center justify-end md:flex md:justify-end ">
        <div className="hidden md:flex justify-between w-[330px] gap-4 ">
          <Button
            className="h-12 w-40 bg-[#FCFCFC] border-2 border-[#5A0C94] text-[#5A0C94] rounded-2xl p-5 hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:bg-[#FCFCFC]"
            variant="default"
            asChild
          >
            <Link
              href="/inscricao/mentor"
              className="font-title text-2xl font-[600]"
            >
              {data.howIsItForMentorLabelButton}
            </Link>
          </Button>

          <Button
            className="h-12 w-40 border-none bg-[#5A0C94] text-white rounded-2xl p-2 xl:m-0 hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]"
            variant="default"
            asChild
          >
            <Link
              href="/inscricao/voluntario"
              className="font-title text-2xl font-[600]"
            >
              {data.howIsItForVolunteerLabelButton}
            </Link>
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="p-1  py-3 lg:hidden"
          onClick={openMenu}
        >
          <MenuIcon className="h-6 w-6 fill-theme-grayscale-black" />
        </Button>
        <Menu isVisible={menuIsOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
