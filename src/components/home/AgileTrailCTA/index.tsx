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
  },
  {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    url: "https://via.placeholder.com/600/474645",
    thumbnailUrl: "https://via.placeholder.com/150/474645"
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    url: "https://via.placeholder.com/600/c984bf",
    thumbnailUrl: "https://via.placeholder.com/150/c984bf"
  },
  {
    userId: 2,
    id: 16,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    url: "https://via.placeholder.com/600/602b9e",
    thumbnailUrl: "https://via.placeholder.com/150/602b9e"
  }
]

export function AgileTrailCTA(): JSX.Element {
  return (
    <div className="w-full h-max flex flex-row items-start justify-between text-start p-12 gap-2 bg-white-light">
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-start gap-4">
        <h4 className="text-grayscale-black text-xl font-bold font-title mb-4">
          Artigos recentes
        </h4>
        <ul className="w-full h-full grid grid-cols-2 grid-rows-3 gap-4">
          {mock.map((item) => (
            <li
              key={item.id}
              className="flex flex-row items-center justify-start gap-4 bg-white-lighter p-4 rounded-md shadow-md h-28 w-96"
            >
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                width={150}
                height={150}
                priority
                className="w-14 h-14 rounded-full object-cover object-center"
              />
              <h5 className="text-grayscale-black text-sm font-sans break-all text-ellipsis">
                {item.title}
              </h5>
            </li>
          ))}
        </ul>
        <Link
          href="/trilha-agil"
          className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
        >
          Ver todos
        </Link>
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-start">
        <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
          Trilha Ágil
        </h3>
        <p className="text-grayscale-darkest text-start font-sans mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem
          sunt? Repellat non et in adipisci soluta vitae doloremque nemo error, sed
          tenetur ad blanditiis deserunt deleniti repudiandae saepe praesentium.
        </p>
        <Link
          href="/trilha-agil"
          className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
        >
          Ver todas as trilhas
        </Link>
      </div>
    </div>
  )
}