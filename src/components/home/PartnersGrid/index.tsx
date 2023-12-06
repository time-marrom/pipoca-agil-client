import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const mock = [
  {
    userId: 1,
    id: 1,
    title: "dolorem eum magni eos aperiam quia",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    userId: 1,
    id: 2,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    userId: 1,
    id: 4,
    title: "dolorem eum magni eos aperiam quia",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    userId: 1,
    id: 6,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
];

export function PartnersGrid(): JSX.Element {
  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col items-start justify-between text-start">
      <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
        Parceiros
      </h3>
      <ul className="grid grid-rows-2 grid-cols-3 md:grid-rows-1 md:grid-cols-6 gap-4 my-6">
        {mock.map((item) => (
          <li key={item.id}>
            <Image
              src={item.thumbnailUrl}
              alt={item.title}
              width={150}
              height={150}
              priority
              className="w-20 h-20 rounded-full object-cover object-center"
            />
          </li>
        ))}
      </ul>
      <Button variant="default" size="sm" asChild>
        <Link href="/pipoca-indica" className="font-sans text-base">
          Seja parceiro
        </Link>
      </Button>
    </div>
  );
}
