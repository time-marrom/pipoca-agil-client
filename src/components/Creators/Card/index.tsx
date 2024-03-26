import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getSanityCreatorsContent } from "@/services/axios";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { urlFor } from "@/lib/url-for";

interface CardProps {
  content: CreatorsContent;
}

export function Card({ content }: CardProps) {
  const { data } = useQuery({
    queryKey: ["creators"],
    queryFn: getSanityCreatorsContent,
    initialData: content,
  });

  const orderedCreators = data.creators.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {orderedCreators.map((creator) => (
        <div key={creator.name} className="h-6/6 w-6/6 gap-4">
          <div className="bg-white shadow-lg rounded-2xl my-4  flex flex-col justify-between ">
            <div className="overflow-hidden rounded-t-2xl ">
              <Image
                src={urlFor(creator.image).url() as string}
                alt={creator.name}
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="flex flex-col justify-between bg-[#FCCF5C] p-3 rounded-b-2xl h-[100px]  ">
              <h2 className="text-xl font-semibold font-title truncate">
                {creator.name}
              </h2>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-[#5A0C94] font-sans font-normal text-sm ">
                    {creator.role}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  {creator.socialNetworks.map((social) => (
                    <Link href={social.path} key={social.path} target="_blank">
                      {social.name === "LinkedIn" ? (
                        <LinkedInIcon className="fill-[#5A0C94] h-6 w-6" />
                      ) : (
                        <GlobeIcon className="fill-[#5A0C94] h-6 w-6" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
