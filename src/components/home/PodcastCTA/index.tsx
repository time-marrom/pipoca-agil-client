import Image from "next/image"
import Link from "next/link"

const mock = [
  {
    userId: 1,
    id: 1,
    title: "dolorem eum magni eos aperiam quia",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    userId: 1,
    id: 2,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  }
]

export function PodcastCTA(): JSX.Element {
  return (
    <div className="w-full h-80 flex flex-row items-start justify-between text-start p-12 gap-2 bg-white-light">
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-start">
        <h4 className="text-grayscale-black text-xl font-bold font-title mb-4">
          Episódios recentes
        </h4>
        <ul className="w-full h-full flex flex-row items-start justify-start gap-4">
          {mock.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-start gap-2 bg-white-lighter p-4 rounded-md shadow-md h-48 w-40"
            >
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                width={150}
                height={150}
                priority
                className="w-40 h-20 rounded-md object-cover object-center"
              />
              <h5 className="text-grayscale-black text-sm font-sans break-all text-ellipsis">
                {item.title}
              </h5>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-start">
        <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
          Podcast
        </h3>
        <p className="text-grayscale-darkest text-start font-sans mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem
          sunt? Repellat non et in adipisci soluta vitae doloremque nemo error, sed
          tenetur ad blanditiis deserunt deleniti repudiandae saepe praesentium.
        </p>
        <Link
          href="/podcast"
          className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
        >
          Ver mais
        </Link>
      </div>
    </div>
  )
}
