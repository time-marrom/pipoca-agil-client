"use client"

import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"
import { ConsentTerms } from "./ConsentTerms"

const mockRules = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Provident eius non amet aperiam iure dicta omnis ab eaque",
  "dolorem quidem consequuntur mollitia quos, id natus asperiores, nam dolores quasi doloribus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Quisquam, accusamus exercitationem porro sed numquam molestias debitis quis?",
  "Nobis eum ratione quae perspiciatis, quia incidunt asperiores, porro necessitatibus dolor ipsam voluptas?"
]

export function UserConsentTerms() {
  const { isAcceptedTerms, setIsAcceptedTerms } = useContext(GlobalContext)

  function handleCheckboxChange(): void {
    setIsAcceptedTerms(!isAcceptedTerms)
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-start px-4 my-2 gap-4">
      <hr className="w-full h-1 bg-theme-secondary-base" />
      <h3 className="font-sans font-medium text-lg">
        Pré-requisitos e Regras para participar do projeto
      </h3>
      <ul className="flex flex-col justify-center items-start gap-1">
        {mockRules.map((rule) => (
          <li key={rule} className="list-disc font-sans font-normal text-sm">
            {rule}
          </li>
        ))}
      </ul>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <ConsentTerms />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={isAcceptedTerms}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 underline font-sans"
          >
            Li e concordo com os termos
          </label>
        </div>
      </div>
    </div>
  )
}
