import { RegistrationContainer } from "@/components/registration/RegistrationContainer";
import { RegistrationPanel } from "@/components/registration/RegistrationPanel";
import { Button } from "@/components/ui/button";
import { getSanityVoluntaryContent } from "@/services/axios";
import Link from "next/link";

export default async function VolunteerRegistration() {
  const content = await getSanityVoluntaryContent();

  return (
    <RegistrationContainer>
      {/* <RegistrationPanel content={content} /> */}
      <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center space-y-8">
        <h1 className="font-title text-3xl">Inscrições Encerradas</h1>
        <p className="font-sans text-base ">
          A inscricão para o voluntário foi encerrada. Acompanhe o Pipoca Ágil
          nas redes sociais para saber as novidades do projeto.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="rounded-xl font-title font-medium text-base">
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </div>
    </RegistrationContainer>
  );
}
