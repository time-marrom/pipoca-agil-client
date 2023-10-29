import { client } from "@/utils/sanity/client"
import Image from "next/image"

type MaintenanceContentProps = {
  pageName: string
}

export async function MaintenanceContent({
  pageName
}: MaintenanceContentProps): Promise<JSX.Element> {
  const maintenanceContent = await client.fetch<HomeContent>(`*[_type == "home"][0]`)

  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-h-[100vh] my-12 mx-auto gap-4">
      <h1 className="text-xl">{maintenanceContent.title}</h1>
      <p className="text-md">{maintenanceContent.description}</p>
      <span className="">{pageName} Em manutenção.</span>
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
