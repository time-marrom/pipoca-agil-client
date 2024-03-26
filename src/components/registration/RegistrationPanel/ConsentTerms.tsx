import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";

export function ConsentTerms() {
  const { isAcceptedTerms, setIsAcceptedTerms, setCurrentStep } =
    useContext(GlobalContext);

  function handleCheckboxChange(): void {
    setIsAcceptedTerms(!isAcceptedTerms);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-12 px-4 border-none bg-[#5A0C94] text-white font-title text-base font-medium rounded-2xl p-2 xl:m-0 hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]">
        Acessar o termo completo
      </AlertDialogTrigger>
      <AlertDialogContent className="w-96 h-3/5 overflow-y-auto  bg-[#F6F6F6]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal text-2xl font-sans text-start ">
            Termos e condições para participar do projeto de simulação do Pipoca
            Ágil.
          </AlertDialogTitle>
          <AlertDialogDescription className="font-normal text-base font-sans overflow:scroll text-start text-theme-grayscale-black">
            <p className="mb-4">
              Este documento estabelece os termos e condições aplicáveis ao
              trabalho voluntário no Projeto de Simulação Ágil.
            </p>
            <p className="mb-4">
              O voluntário concorda em realizar suas atividades de maneira
              ética, responsável e em conformidade com as leis e regulamentos
              aplicáveis.
            </p>
            <p className="mb-4">
              O voluntário se compromete a contribuir com suas habilidades,
              conhecimentos e esforços para o desenvolvimento e sucesso do
              projeto.
            </p>
            <p className="mb-4">
              O voluntariado neste projeto não gera contrato de trabalho ou
              remuneração financeira. O trabalho realizado é de caráter
              voluntário e não gera vínculo empregatício.
            </p>
            <p className="mb-4">
              O voluntário concorda em respeitar as diretrizes e orientações
              fornecidas pelos responsáveis pelo projeto, bem como os prazos e
              metas estabelecidos.
            </p>
            <p className="mb-4">
              O voluntário deverá tratar todas as informações e dados
              relacionados ao projeto como confidenciais e não divulgá-los sem
              autorização prévia dos responsáveis.
            </p>
            <p className="mb-4">
              As regras sobre divulgação de informações e dados do projeto estão
              relacionados no anexo A deste documento.
            </p>
            <p className="mb-4">
              O voluntário concorda em cumprir as normas de segurança e saúde
              ocupacional estabelecidas para o projeto, bem como utilizar os
              equipamentos e recursos fornecidos de forma adequada.
            </p>
            <p className="mb-4">
              O projeto pode ser interrompido, cancelado ou modificado a
              qualquer momento pelos responsáveis, sem que isso gere direitos ou
              compensações ao voluntário.
            </p>
            <p className="mb-4">
              O voluntário concorda em ceder os direitos de propriedade
              intelectual sobre qualquer material, documento ou resultado
              produzido durante o voluntariado ao projeto.
            </p>
            <p className="mb-4">
              Os responsáveis pelo projeto não se responsabilizam por danos,
              lesões ou prejuízos causados ao voluntário durante o exercício de
              suas atividades.
            </p>
            <p className="mb-4">
              O voluntário declara estar ciente dos riscos envolvidos no
              trabalho voluntário e assume total responsabilidade por sua
              segurança e bem-estar durante sua participação no projeto.
            </p>
            <p className="mb-4">
              Este termo de voluntariado será regido pelas leis do país em que o
              projeto está sendo realizado e qualquer disputa relacionada a ele
              será resolvida pelos tribunais competentes.
            </p>
            <p className="mb-4">
              Ao aceitar estes termos e condições, o voluntário declara estar
              ciente e concordar com todas as disposições aqui estabelecidas,
              conforme disposto no anexo B.
            </p>
            <h3 className="font-normal text-2xl"> Anexo A</h3>
            <p className="mb-4">
              Regras sobre confidencialidade e direitos autorais do material
              produzido pelos grupos de voluntariado:
            </p>

            <p className="mb-4">
              <strong>Plágio:</strong> A cópia direta ou parcial do material
              produzido por qualquer equipe, sem dar crédito adequado ou
              permissão. Isso inclui texto, imagens, vídeos, gráficos ou
              qualquer outro conteúdo criado pela equipe original.
            </p>
            <p className="mb-4">
              <strong>Propriedade Intelectual:</strong> Todo o material criado
              por qualquer equipe original é protegido por direitos autorais e
              propriedade intelectual. Qualquer uso ou reprodução deste material
              sem permissão é considerado plágio.
            </p>
            <p className="mb-4">
              <strong>Citação Adequada:</strong> Se uma equipe deseja usar parte
              do material produzido por outra equipe, deve buscar a permissão da
              equipe original e fornecer uma citação adequada. Isso inclui citar
              a fonte, nomear os autores e fornecer todas as informações
              necessárias para garantir que o crédito seja dado corretamente.
            </p>
            <p className="mb-4">
              <strong>Autorização:</strong> É fundamental obter autorização por
              escrito da equipe original antes de usar seu material de qualquer
              forma. Isso inclui a reprodução ou adaptação do material para uso
              em outros projetos ou atividades.
            </p>
            <p className="mb-4">
              <strong>Consequências:</strong> O plágio é uma violação grave da
              ética acadêmica e profissional. Se uma equipe for descoberta
              plagiando material produzido por outra equipe, poderá enfrentar
              consequências, como a desqualificação do trabalho voluntário no
              projeto de simulação ágil ou ações legais.
            </p>
            <p className="mb-4">
              <strong>Originalidade:</strong> Cada equipe é responsável por
              produzir seu próprio conteúdo original e não deve recorrer ao
              plágio para obter sucesso ou reconhecimento. A originalidade é um
              valor fundamental em qualquer projeto ou trabalho voluntário.
            </p>
            <p className="mb-4">
              Portanto, é fundamental que todas as equipes envolvidas no projeto
              de simulação ágil sejam transparentes, respeitem a propriedade
              intelectual e evitem qualquer tipo de plágio de material produzido
              por outras equipes. Isso garantirá a integridade do trabalho
              voluntário e promoverá a criatividade e inovação em cada equipe.
            </p>

            <h3 className="font-normal text-2xl"> Anexo B</h3>
            <p className="mb-8">
              As Regras do Projeto têm como objetivo garantir o bom
              funcionamento do projeto e o envolvimento de pessoas
              comprometidas. Aqui estão algumas diretrizes básicas:
            </p>

            <ol className="px-4">
              <li className="list-decimal">Ser maior de 18 anos.</li>
              <li className="list-decimal">
                Ter habilidades básicas de comunicação e trabalho em equipe;
              </li>
              <li className="list-decimal">
                Estar disposto a aprender e compartilhar conhecimentos;
              </li>
              <li className="list-decimal">
                Respeitar as normas de conduta e ética estabelecidas pelo
                projeto;
              </li>
              <li className="list-decimal">
                Ser comprometido e responsável com as tarefas;
              </li>
              <li className="list-decimal">
                Ter acesso a um computador ou celular e internet para participar
                das reuniões e atividades online;
              </li>
              <li className="list-decimal">
                Aceitar e respeitar a diversidade de opiniões e culturas
                presentes no grupo de voluntários;
              </li>
              <li className="list-decimal">
                <strong>Interesse e comprometimento:</strong> Os membros da
                equipe devem estar genuinamente interessados no projeto
                voluntário e comprometidos em contribuir com seu tempo e
                habilidades para o sucesso do mesmo;
              </li>
              <li className="list-decimal">
                <strong>Disponibilidade:</strong> É importante que as pessoas
                tenham disponibilidade para participar das reuniões e atividades
                do projeto. Embora seja um projeto voluntário, é fundamental que
                todos possam dedicar algum tempo regularmente para o progresso
                do trabalho, equipes inativas por mais de duas semanas terão
                membros realocados ou poderão ser desfeitas, entenderemos que os
                membros das mesmas não tem disponibilidade e daremos a
                oportunidade para outras pessoas que realmente queira
                participar;
              </li>
              <li className="list-decimal">
                <strong>Diversidade de habilidades:</strong> A equipe
                Multidisciplinar é composta por diferentes profissionais, como
                um par de PO, SM, UX, UI, Dev Front-end, Dev Back-end , Dev
                FullStack, cada um com suas habilidades e conhecimentos
                específicos. Portanto, é importante que a equipe seja
                diversificada e abrangente em termos de conhecimentos. Espera-se
                a participação de pessoas das áreas de TI, gestão de projetos,
                análise de negócios, design, entre outras;
              </li>
              <li className="list-decimal">
                <strong> Respeito e colaboração:</strong> A comunicação e o
                trabalho em equipe são essenciais para o sucesso do projeto. É
                fundamental que todos os membros sejam respeitosos,
                colaborativos e estejam dispostos a compartilhar ideias, ouvir
                os demais e trabalhar juntos para alcançar os objetivos
                propostos;
              </li>
              <li className="list-decimal">
                <strong>Compromisso com prazos:</strong> O projeto voluntário
                terá metas e prazos a cumprir. É importante que os membros da
                equipe se comprometem a entregar seu trabalho dentro dos prazos
                estabelecidos, para que o projeto possa avançar de forma fluida;
              </li>
              <li className="list-decimal">
                <strong>Confidencialidade:</strong> Pode ser necessário lidar
                com informações confidenciais. Nesses casos, é crucial que os
                membros da equipe respeitem e mantenham sigilo sobre as
                informações sensíveis que possam ter acesso.
              </li>
              <li className="list-decimal">
                <strong>Comunicação clara e frequente:</strong> Para garantir a
                coordenação e o alinhamento entre os membros da equipe, é
                fundamental manter uma comunicação clara e frequente. Isso pode
                ser feito por meio de reuniões regulares, trocas de e-mails,
                plataformas de comunicação, entre outros meios.
              </li>
            </ol>
            <p className="mt-8">
              Essas são algumas regras básicas para participar da equipe
              Multidisciplinar do Projeto voluntário de simulação do Pipoca
              Ágil. Outras regras e normas específicas podem ser estabelecidas
              pela coordenação do projeto conforme a necessidade.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="w-full flex items-center space-x-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded-md checked:touch-pan-up checked:accent-[#5A0C94] caret-theme-secondary-light"
            id="terms"
            checked={isAcceptedTerms}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans py-6  "
          >
            Li e concordo com os termos e regras
          </label>
        </div>
        <AlertDialogFooter className="w-full h-full flex justify-center items-center ">
          <div className="h-full w-full flex flex-row justify-center items-center ">
            <AlertDialogAction
              className=" w-1/3 h-full font-semibold text-base font-title bg-[#DEDEDE] rounded-2xl text-[#727272] hover:bg-theme-secondary-dark hover:text-[#F6F6F6]"
              disabled={!isAcceptedTerms}
              onClick={() => setCurrentStep(1)}
            >
              Continuar
            </AlertDialogAction>
            <AlertDialogAction className=" w-1/3 h-full font-semibold text-base font-title mx-4 bg-transparent border-2 border-theme-secondary-base rounded-2xl text-theme-secondary-base hover:border-theme-secondary-light hover:text-theme-secondary-light hover:bg-theme-white-base">
              Voltar
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
