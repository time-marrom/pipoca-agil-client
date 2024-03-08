"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface IData {
  question: string
  answer: string
}

const data: IData[] = [
  {
    question: "Quais os pré-requisitos para participar?",
    answer:
      "Possuir conhecimento teórico na área que quer atuar. Só isso! Mas, se você já participou de algum projeto (de um curso, voluntário, fictício ou real) e/ou possui alguma certificação, melhor ainda!"
  },
  {
    question: "Preciso saber Scrum para poder participar?",
    answer:
      "Não! Se você quer atuar como Product Owner, Programador Front/Back-end, Analista de Teste/QA ou UX/UI Designer, a nossa intenção é que você aprenda o Scrum ao longo do projeto! Se você estiver se inscrevendo para atuar como Scrum Master em um de nossos times, esperamos que você tenha um conhecimento básico de Scrum."
  },
  {
    question: "Como os times são formados?",
    answer:
      "Aqui na Simulação, como todos que entram são iniciantes, definimos por padrão que cada time é composto por um par de cada uma das seguintes áreas, para que se ajudem: Scrum Masters (SM), Product Owners (PO), UX/UI Designers, Programadores Front-end e/ou Back-end (Devs) e Analistas de Teste (QA - Quality Assurance), totalizando 10 membros por equipe. No entanto, o tamanho pode variar conforme a demanda de cada projeto, podendo ser ajustado para mais ou menos membros."
  },
  {
    question: "Quais são os horários e a carga horária?",
    answer:
      "Cada time entra num acordo para escolher o horário que for possível, de acordo com a disponibilidade dos membros. Os times se auto-gerenciam nas reuniões, por isso é preciso comprometimento e responsabilidade! Atualmente, contamos com times ativos nos turnos da manhã, tarde e noite. Durante o processo de inscrição na Simulação, você deverá indicar em qual ou quais desses turnos possui disponibilidade para participar do projeto."
  },
  {
    question: "Sobre o que é o projeto?",
    answer:
      "Já tivemos outros temas, mas os projetos hoje, em 2024, estão mais direcionados para a área da saúde. Você pode desenvolver aplicativos, sistemas ou sites. Tudo vai depender do time e do que estiver disponível no momento. Mais detalhes serão fornecidos caso você seja chamado para um time."
  },
  {
    question: "Já fiz minha inscrição, e agora?",
    answer:
      "Se você preencher os pré-requisitos, entraremos em contato por e-mail ou WhatsApp. Existem duas maneiras de ingressar em um time: você pode entrar num grupo novo e começar um projeto do zero, ou entrar num time com um projeto que já está em andamento."
  }
]

export function SimulationFAQ() {
  function handleOnClick() {
    console.log("Clicou")
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-20 px-8 md:px-8 md:py-20 gap-2 rounded-t-[90px] lg:px-32 lg:py-40 bg-[#FCCF5C]">
      <h3 className="font-sans font-medium text-lg">Perguntas Frequentes - FAQ</h3>
      <div className="h-full w-full max-w-3xl flex flex-col justify-start items-center ">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              value={`value-${index}`}
              className="w-full text-start bg-[#FCFCFC] rounded-md shadow-md p-4"
            >
              <AccordionTrigger className="w-full">
                <h4 className="font-sans font-medium text-lg">{item.question}</h4>
              </AccordionTrigger>
              <AccordionContent className="w-full space-y-4">
                <p className="font-sans font-normal text-sm">{item.answer}</p>
                <p className="text-sm font-title text-theme-grayscale-black">
                  Essa informação te ajudou?
                </p>
                <div className="flex flex-row items-center justify-start space-x-6">
                  <Button
                    type="button"
                    variant="default"
                    className="w-12 text-[#7401B7] bg-white border-2 border-[#7401B7] visited:bg-[#7401B7] visited:text-white hover:text-white transition-all duration-300 ease-in-out font-medium py-2 px-4 rounded-md text-sm font-title"
                    onClick={() => handleOnClick}
                  >
                    Sim
                  </Button>
                  <Link
                    href="/contato"
                    passHref
                    className="font-sm text-[#7401B7] underline font-medium font-title"
                  >
                    Não, quero entrar em contato
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
