import { PageContainer } from "@/components/PageContainer";
import { SimulationCTA } from "@/components/simulation/SimulationCTA";
import { SimulationFAQ } from "@/components/simulation/SimulationFAQ";
import { SimulationHero } from "@/components/simulation/SimulationHero";
import { SimulationTestimony } from "@/components/simulation/SimulationTestimony";

export default function SimulationPage() {
  return (
    <PageContainer>
      <SimulationHero />
      <SimulationCTA />
      <SimulationTestimony />
      <SimulationFAQ />
    </PageContainer>
  );
}
