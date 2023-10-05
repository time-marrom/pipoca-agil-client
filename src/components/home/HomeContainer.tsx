import { client } from "@/utils/sanity/client"

export async function HomeContainer() {
  const homeContent = await client.fetch<HomeContent>(`*[_type == "home"][0]`)

  return (
    <div className="items-center justify-center text-center">
      <h1 className="text-xl">{homeContent.title}</h1>
      <p className="text-md">{homeContent.description}</p>
    </div>
  )
}
