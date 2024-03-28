import { MentorPanel } from "@/components/registration/MentorPanel";
import { RegistrationContainer } from "@/components/registration/RegistrationContainer";
import { getSanityMentorContent } from "@/services/axios";

export default async function MentorRegistration() {
  const content = await getSanityMentorContent();
  return (
    <RegistrationContainer>
      <MentorPanel content={content} />
    </RegistrationContainer>
  );
}
