"use client"

import { SocialGrid } from "@/components/SocialGrid"
import { menuOptions } from "@/utils/menu"
import Link from "next/link"

export function Navbar(): JSX.Element {
  return (
    <nav className="w-screen h-20 flex flex-row items-center justify-between font-title bg-primary-base">
      <h1 className="max-w-max mx-4 text-xl font-bold text-grayscale-black">
        logo_pipoca.jpg
      </h1>
      <div className="w-3/4 flex flex-row items-center justify-between">
        <ul className="w-2/4 h-full flex flex-row items-center justify-between">
          {menuOptions.map((option) => (
            <li key={option.order}>
              <Link
                href={option.path}
                className="text-base font-medium cursor-pointer transition duration-300 hover:underline hover:text-secondary-base hover:decoration-secondary-base"
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/clube-do-pipoca"
          className="w-36 h-10 p-2 text-base font-medium rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
        >
          Clube do Pipoca
        </Link>
        <SocialGrid />
      </div>
    </nav>
  )
}
