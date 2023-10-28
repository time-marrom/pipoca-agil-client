import { client } from "@/utils/sanity/client"
import Image from "next/image"

export async function HomeContainer() {
  const homeContent = await client.fetch<HomeContent>(`*[_type == "home"][0]`)

  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-h-[100vh] my-12 mx-auto gap-4">
      <h1 className="text-xl">{homeContent.title}</h1>
      <p className="text-md">{homeContent.description}</p>
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
