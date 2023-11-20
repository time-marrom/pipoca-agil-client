import { PageContainer } from "@/components/PageContainer";
import { SimulationFAQ } from "@/components/simulation/SimulationFAQ";
import { SimulationTestimony } from "@/components/simulation/SimulationTestimony";

export default function SimulationPage() {
  return (
    <PageContainer>
      <SimulationTestimony />
      <SimulationFAQ />
    </PageContainer>
  );
}
