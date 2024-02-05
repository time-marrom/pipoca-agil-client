import { PageContainer } from "@/components/PageContainer"
import { SimulationDescription } from "@/components/simulation/SimulationDescription"
import { SimulationHero } from "@/components/simulation/SimulationHero"
import { SimulationHowItWorks } from "@/components/simulation/SimulationHowItWorks"
import { SimulationWhoIsItFor } from "@/components/simulation/SimulationWhoIsItFor"
import { SimulationWorthIt } from "@/components/simulation/SimulationWorthIt"
import { getSanitySimulationContent } from "@/services/axios"

export default async function Home() {
  const content = await getSanitySimulationContent()

  return (
    <PageContainer>
      <SimulationHero content={content} />
      <SimulationDescription content={content} />
      <SimulationHowItWorks content={content} />
      <SimulationWhoIsItFor content={content} />
      <SimulationWorthIt content={content} />
    </PageContainer>
  )
}
