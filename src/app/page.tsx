import { PageContainer } from "@/components/PageContainer"
import { IndicatesPopcornCTA } from "@/components/home/IndicatesPopcornCTA"
import { NewsletterBox } from "@/components/home/NewsletterBox"
import { PopcornClubCTA } from "@/components/home/PopcornClubCTA"

export default function Home() {
  return (
    <PageContainer>
      <PopcornClubCTA />
      <IndicatesPopcornCTA />
      <NewsletterBox />
    </PageContainer>
  )
}
