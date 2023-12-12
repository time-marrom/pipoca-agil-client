import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { SpotifyIcon } from "@/components/icons/SpotifyIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";

export const socialMedias: Social[] = [
  {
    order: 1,
    name: "YouTube",
    path: "https://www.youtube.com/@PipocaAgil",
    icon: YouTubeIcon,
  },
  {
    order: 2,
    name: "Spotify",
    path: "https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J",
    icon: SpotifyIcon,
  },
  {
    order: 3,
    name: "Instagram",
    path: "https://www.instagram.com/pipocaagil",
    icon: InstagramIcon,
  },
  {
    order: 4,
    name: "Facebook",
    path: "https://www.facebook.com/pipocaagil",
    icon: FacebookIcon,
  },
  {
    order: 5,
    name: "LinkedIn",
    path: "https://br.linkedin.com/company/pipoca-%C3%A1gil",
    icon: LinkedInIcon,
  },
];
