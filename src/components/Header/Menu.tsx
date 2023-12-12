import { menuOptions } from "@/utils/menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "../icons/MenuIcon";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      className={`${
        isVisible ? "flex" : "invisible"
      } fixed w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm lg:hidden`}
      onClick={onClose}
    >
      <div
        className="w-60 md:w-80 bg-[#FDE3A0] h-[70vh] md:h-[60vh] shadow-md p-4 rounded-md"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-2">
          <h1>Logo_do_pipoca.png</h1>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <MenuIcon className="h-4 w-4 fill-theme-grayscale-black" />
          </Button>
        </div>
        <nav className="w-full h-full flex flex-col gap-4 text-xl p-5 items-center">
          <ul className="flex flex-col gap-4 text-xl p-5 items-center">
            {menuOptions.map((menuOption) => (
              <li key={menuOption.name} onClick={onClose}>
                <Link
                  href={menuOption.path}
                  className="font-sans font-semibold"
                >
                  {menuOption.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="default" asChild>
            <Link href="/clube-pipoca" className="font-sans">
              Clube do Pipoca
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
