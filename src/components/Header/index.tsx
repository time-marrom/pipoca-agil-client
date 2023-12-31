"use client";

import { menuOptions } from "@/utils/menu";
import { socialMedias } from "@/utils/social";
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

  const orderSocialMedias = socialMedias
    .slice(0, 3)
    .sort((a, b) => a.order - b.order);

  return (
    <header className="flex justify-between items-center text-sm py-3 px-5 bg-[#FCCF5C]">
      <h1>Logo_do_pipoca.png</h1>
      <nav className="hidden lg:flex items-center gap-10 text-md">
        <ul className="flex flex-row gap-4">
          {menuOptions.map(({ name, path }) => (
            <li key={name} className="font-sans font-semibold">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:flex flex-row justify-center items-center gap-10">
        <Button variant="default" asChild>
          <Link href="/clube-pipoca" className="font-sans">
            Clube do Pipoca
          </Link>
        </Button>
        <ul className="flex flex-row gap-4">
          {orderSocialMedias.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <Link href={path} target="_blank">
                <Icon className="h-6 w-6 fill-theme-grayscale-black" />
              </Link>
            </li>
          ))}
        </ul>
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
