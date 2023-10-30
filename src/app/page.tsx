import { PageContainer } from "@/components/PageContainer"
import { Hero } from "@/components/home/Hero"
import { IndicatesPopcornCTA } from "@/components/home/IndicatesPopcornCTA"
import { NewsletterBox } from "@/components/home/NewsletterBox"
import { PopcornClubCTA } from "@/components/home/PopcornClubCTA"
import { SimulationCTA } from "@/components/home/SimulationCTA"

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <SimulationCTA />
      <PopcornClubCTA />
      <IndicatesPopcornCTA />
      <NewsletterBox />
    </PageContainer>
  )
}
