import { PageContainer } from "@/components/PageContainer";
import { SimulationCTA } from "@/components/simulation/SimulationCTA";
import { SimulationDescription } from "@/components/simulation/SimulationDescription";
import { SimulationFAQ } from "@/components/simulation/SimulationFAQ";
import { SimulationHero } from "@/components/simulation/SimulationHero";
import { SimulationWorthIt } from "@/components/simulation/SimulationHowItWorks";

import { getSanitySimulationContent } from "@/services/axios";

export default async function SimulationPage() {
  const content = await getSanitySimulationContent();

  return (
    <PageContainer>
      <SimulationHero content={content} />
      <SimulationDescription content={content} />
      <SimulationWorthIt content={content} />
      <SimulationCTA />
      <SimulationFAQ />
    </PageContainer>
  );
}
