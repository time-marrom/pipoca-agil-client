import { PageContainer } from "@/components/PageContainer";
import { SimulationWhoIsItFor } from "@/components/simulation/SimulationWhoIsItFor";
import { SimulationDescription } from "@/components/simulation/SimulationDescription";
import { SimulationFAQ } from "@/components/simulation/SimulationFAQ";
import { SimulationHero } from "@/components/simulation/SimulationHero";
import { SimulationHowItWorks } from "@/components/simulation/SimulationHowItWorks";
import { SimulationWorthIt } from "@/components/simulation/SimulationWorthIt";

import { getSanitySimulationContent } from "@/services/axios";

export default async function SimulationPage() {
  const content = await getSanitySimulationContent();

  return (
    <PageContainer>
      <SimulationHero content={content} />
      <SimulationDescription content={content} />
      <SimulationHowItWorks content={content} />
      <SimulationWhoIsItFor content={content} />
      <SimulationWorthIt content={content} />

      <SimulationFAQ />
    </PageContainer>
  );
}
