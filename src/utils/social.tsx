import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"

export const socialMedias: Social[] = [
  {
    order: 1,
    name: "Facebook",
    path: "https://www.facebook.com/pipocaagil",
    icon: FaFacebookSquare
  },
  {
    order: 2,
    name: "Instagram",
    path: "https://www.instagram.com/pipocaagil",
    icon: FaInstagramSquare
  },
  {
    order: 3,
    name: "X",
    path: "https://twitter.com/pipoca_agil",
    icon: FaSquareXTwitter
  },
  {
    order: 4,
    name: "LinkedIn",
    path: "https://br.linkedin.com/company/pipoca-%C3%A1gil",
    icon: FaLinkedin
  }
]
