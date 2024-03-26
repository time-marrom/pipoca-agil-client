import { DescriptionTeam } from "@/components/Creators/DescriptionTeam";
import { HeroCreators } from "@/components/Creators/HeroCreators";
import { PageContainer } from "@/components/PageContainer";
import { getSanityCreatorsContent } from "@/services/axios";

export default async function Contact() {
  const content = await getSanityCreatorsContent();
  return (
    <PageContainer>
      <HeroCreators content={content} />
      <DescriptionTeam content={content} />
    </PageContainer>
  );
}
