import { MentorPanel } from "@/components/registration/MentorPanel";
import { RegistrationContainer } from "@/components/registration/RegistrationContainer";
import { Button } from "@/components/ui/button";
import { getSanityMentorContent } from "@/services/axios";
import Link from "next/link";

export default async function MentorRegistration() {
  const content = await getSanityMentorContent();
  return (
    <RegistrationContainer>
      {/* <MentorPanel content={content} /> */}
      <div className="w-full h-full min-h-[65vh] flex flex-col justify-start items-center space-y-8">
        <h1 className="font-title text-3xl">Inscrições Encerradas</h1>
        <p className="font-sans text-base ">
          A inscricão para o mentor foi encerrada. Acompanhe o Pipoca Ágil nas
          redes sociais para saber as novidades do projeto.
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
