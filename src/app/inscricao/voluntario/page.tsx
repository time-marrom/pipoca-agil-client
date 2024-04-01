import { RegistrationContainer } from "@/components/registration/RegistrationContainer";
import { RegistrationPanel } from "@/components/registration/RegistrationPanel";
import { getSanityVoluntaryContent } from "@/services/axios";

export default async function VolunteerRegistration() {
  const content = await getSanityVoluntaryContent();

  return (
    <RegistrationContainer>
      <RegistrationPanel content={content} />
    </RegistrationContainer>
  );
}
