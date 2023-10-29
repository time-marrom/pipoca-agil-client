import { PageContainer } from "@/components/PageContainer"
import { Hero } from "@/components/home/Hero"
import { IndicatesPopcornCTA } from "@/components/home/IndicatesPopcornCTA"
import { NewsletterBox } from "@/components/home/NewsletterBox"
import { PopcornClubCTA } from "@/components/home/PopcornClubCTA"

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <PopcornClubCTA />
      <IndicatesPopcornCTA />
      <NewsletterBox />
    </PageContainer>
  )
}
