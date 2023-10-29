import { PageContainer } from "@/components/PageContainer"
import { IndicatesPopcornCTA } from "@/components/home/IndicatesPopcornCTA"
import { NewsletterBox } from "@/components/home/NewsletterBox"

export default function Home() {
  return (
    <PageContainer>
      <IndicatesPopcornCTA />
      <NewsletterBox />
    </PageContainer>
  )
}
