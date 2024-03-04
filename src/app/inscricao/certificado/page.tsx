import { CertificateForm } from "@/components/certificate/CertificateForm"
import { RegistrationContainer } from "@/components/registration/RegistrationContainer"

export default function Certificate(): JSX.Element {
  return (
    <RegistrationContainer>
      <CertificateForm />
    </RegistrationContainer>
  )
}
