import { socialMedias } from "@/utils/social"
import Link from "next/link"

export function SocialGrid(): JSX.Element {
  const orderedSocialMedias = socialMedias.sort((a, b) => a.order - b.order)

  return (
    <ul className="max-h-max w-48 grid grid-cols-4 grid-rows-1 gap-1">
      {orderedSocialMedias.map(({ name, path, icon: Icon }) => (
        <li key={name} className="flex items-center text-center w-8 max-h-max p-1">
          <Link href={path} className="flex items-center text-center rounded-sm">
            <Icon className="w-6 h-6 font-bold cursor-pointer transition duration-300 text-secondary-base hover:text-secondary-dark" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
