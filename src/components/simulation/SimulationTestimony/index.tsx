import Image from "next/image";

export type SimulationTestimonyArray = {
  id: number;
  name: string;
  testimony: string;
  image: string;
};

export const mockArray = [
  {
    id: 2,
    name: "Maria",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Ana",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 5,
    name: "Lucas",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 6,
    name: "Rafaela",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150/771796",
  },
];

export function SimulationTestimony(): JSX.Element {
  return (
    <div className="h-full w-full py-4 space-y-8 flex flex-col justify-start items-center">
      <h3 className="text-theme-grayscale-black text-2xl font-bold font-title mb-4">
        Vale a pena?
      </h3>
      <div className="w-full flex flex-col lg:flex-row gap-2 justify-center items-center">
        {mockArray.map((item) => (
          <div
            key={item.id}
            className="w-3/4 lg:w-1/5 h-full min-h-[250px] flex flex-col justify-center items-center text-center space-y-2 p-4 rounded-md shadow-md bg-theme-white-light"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              priority
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <p className="font-sans font-semibold text-base">{item.name}</p>
            <p className="text-theme-grayscale-darkest text-start font-sans font-normal text-base italic">
              {item.testimony}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
