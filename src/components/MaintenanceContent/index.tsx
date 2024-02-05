"use client"

import { getSanityMaintenanceContent } from "@/services/axios"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function MaintenanceContent({ content }: MaintenanceContentProps): JSX.Element {
  const { data } = useQuery({
    queryKey: ["maintenance"],
    queryFn: getSanityMaintenanceContent,
    initialData: content
  })
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-h-[50vh] my-12 mx-auto gap-4">
      <h1 className="text-2xl font-bold font-title">{data.title}</h1>
      <span className="text-md font-base font-sans">
        Página {pathname} em manutenção.
      </span>
      <p className="text-md font-base font-sans">{data.description}</p>
      <Image
        src="https://media.tenor.com/NQYmifze-vQAAAAC/rihanna-work.gif"
        alt="Rihanna Work GIF"
        width="500"
        height="500"
        priority
        className="w-auto h-auto"
      />
    </div>
  )
}
