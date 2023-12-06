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
];

export function PodcastCTA(): JSX.Element {
  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col items-start justify-between text-start gap-2 bg-theme-white-light">
      <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
        Podcast
      </h3>
      <div className="flex flex-col h-full md:flex-row items-start justify-between gap-6">
        <div className="w-full h-full md:w-1/2 flex flex-col items-start justify-center text-start">
          <p className="text-grayscale-darkest text-start font-sans mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, voluptatem sunt? Repellat non et in adipisci soluta
            vitae doloremque nemo error, sed tenetur ad blanditiis deserunt
            deleniti repudiandae saepe praesentium.
          </p>
          <Button variant="default" size="sm" asChild>
            <Link href="/podcast" className="font-sans text-base">
              Ver mais
            </Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center text-start">
          <h4 className="text-grayscale-black text-xl font-bold font-title mb-4">
            Episódios recentes
          </h4>
          <ul className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-2">
            {mock.map((item) => (
              <li
                key={item.id}
                className="flex md:flex-col items-center justify-start gap-2 bg-theme-white-lighter p-4 rounded-md shadow-md h-36 lg:h-52 w-80 lg:w-52"
              >
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  width={150}
                  height={150}
                  priority
                  className="w-40 h-20 rounded-md object-cover object-center"
                />
                <h5 className="w-1/2 md:w-full text-grayscale-black text-sm font-sans break-all text-ellipsis">
                  {item.title}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
