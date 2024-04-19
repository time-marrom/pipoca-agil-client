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
    <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {orderedCreators.map((creator) => (
        <div key={creator.name} className="md:w-40 md:h-56 gap-4 ">
          <div className="bg-white shadow-lg rounded-2xl my-4  flex flex-col justify-between ">
            <div className="overflow-hidden rounded-t-2xl ">
              <Image
                src={urlFor(creator.image).url() as string}
                alt={creator.creatorDescription}
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="flex flex-col  bg-[#FCCF5C] p-3 rounded-b-2xl ">
              <h2 className="text-sm font-medium font-title truncate">
                {creator.name}
              </h2>
              <div className="flex flex-row justify-between ">
                <div>
                  <p className="text-[#5A0C94] font-sans font-normal text-xs  ">
                    {creator.role}
                  </p>
                </div>
                <div className="flex flex-row ">
                  {creator.socialNetworks.map((social) => (
                    <Link href={social.path} key={social.path} target="_blank">
                      {social.name === "LinkedIn" ? (
                        <LinkedInIcon className="fill-[#5A0C94] h-5 w-h-5" />
                      ) : (
                        <GlobeIcon className="fill-[#5A0C94] h-5 w-h-5" />
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
