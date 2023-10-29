import { client } from "@/utils/sanity/client"
import { queries } from "@/utils/sanity/queries"
import Image from "next/image"

export async function MaintenanceContent({
  pageName
}: MaintenanceContentProps): Promise<JSX.Element> {
  const maintenanceContent = await client.fetch<MaintenanceContent>(queries.maintenance)

  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-h-[50vh] my-12 mx-auto gap-4">
      <h1 className="text-2xl font-bold font-title">{maintenanceContent.title}</h1>
      <span className="text-md font-base font-sans">
        Página {pageName} em manutenção.
      </span>
      <p className="text-md font-base font-sans">{maintenanceContent.description}</p>
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
