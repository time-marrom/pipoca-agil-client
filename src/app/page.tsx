import { PageContainer } from "@/components/PageContainer"
import { getSanityHomeContent } from "@/services/axios"
import { Description } from "./_components/Description"
import { Hero } from "./_components/Hero"
import { HowItWorks } from "./_components/HowItWorks"
import { WhoIsItFor } from "./_components/WhoIsItFor"
import { WorthIt } from "./_components/WorthIt"
import { Depositions } from "./_components/Depositions"
import { FAQ } from "./_components/FAQ"

export default async function Home() {
  const content = await getSanityHomeContent()

  return (
    <PageContainer>
      <Hero content={content} />
      <Description content={content} />
      <HowItWorks content={content} />
      <WhoIsItFor content={content} />
      <WorthIt content={content} />
      <Depositions content={content} />
      <FAQ content={content} />
    </PageContainer>
  )
}
