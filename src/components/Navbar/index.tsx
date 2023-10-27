"use client"

import { SocialGrid } from "@/components/SocialGrid"
import { menuOptions } from "@/utils/menu"
import Link from "next/link"

export function Navbar(): JSX.Element {
  return (
    <nav className="w-full h-full md:h-12 px-4 bg-[#FF9C00] flex flex-row items-center justify-between">
      <h1 className="text-xl font-bold text-black">logo_pipoca.jpg</h1>
      <ul className="w-2/4 h-full flex flex-row items-center justify-between gap-1">
        {menuOptions.map((option) => (
          <li key={option.order}>
            <Link
              href={option.path}
              className="text-sm lg:text-base font-normal cursor-pointer transition duration-300 hover:underline hover:text-[#7401B7] hover:decoration-[#7401B7]"
            >
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/clube-do-pipoca"
        className="bg-[#7401B7] py-2 px-2 rounded-md text-white hover:bg-[#4C0178] cursor-pointer transition duration-300"
      >
        Clube do Pipoca
      </Link>
      <SocialGrid />
    </nav>
  )
}
