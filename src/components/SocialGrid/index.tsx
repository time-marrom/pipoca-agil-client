import { socialMedias } from "@/utils/social"
import Link from "next/link"

export function SocialGrid(): JSX.Element {
  const orderedSocialMedias = socialMedias.sort((a, b) => a.order - b.order)

  return (
    <ul className="h-full w-32 grid grid-cols-3 grid-rows-1 gap-1">
      {orderedSocialMedias.map(({ name, path, icon: Icon }) => (
        <li key={name} className="flex items-center text-center w-8 h-full p-1">
          <Link href={path} className="flex items-center text-center rounded-sm">
            <Icon className="w-6 h-6 font-bold text-[#7401B7] hover:text-[#4C0178] cursor-pointer transition duration-300" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
