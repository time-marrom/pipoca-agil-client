import { PageContainer } from "@/components/PageContainer";
import { SimulationCTA } from "@/components/simulation/SimulationCTA";
import { SimulationDescription } from "@/components/simulation/SimulationDescription";
import { SimulationFAQ } from "@/components/simulation/SimulationFAQ";
import { SimulationHero } from "@/components/simulation/SimulationHero";
import { SimulationTestimony } from "@/components/simulation/SimulationTestimony";

export default function SimulationPage() {
  return (
    <PageContainer>
      <SimulationHero />
      <SimulationDescription />
      <SimulationCTA />
      <SimulationTestimony />
      <SimulationFAQ />
    </PageContainer>
  );
}
