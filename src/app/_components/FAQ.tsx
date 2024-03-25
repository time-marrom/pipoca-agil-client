"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getSanityHomeContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

interface FAQProps {
  content: HomeContent;
}

export function FAQ({ content }: FAQProps) {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getSanityHomeContent,
    initialData: content,
  });
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-20 px-8 md:px-8 md:py-20 gap-2 rounded-t-[90px] lg:px-16 lg:py-20 bg-[#FCCF5C] space-y-6">
      <h3 className="text-[#252525] text-5xl md:text-5xl font-medium font-title mb-4 text-center">
        {data.faqTitle}
      </h3>
      <div className="h-full w-full max-w-6xl flex flex-col justify-start items-center">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.faqTopics.map(({ answer, question }, index) => (
            <AccordionItem
              key={index}
              value={`value-${index}`}
              className="w-full text-start bg-[#FCFCFC] hover:bg-[#FDE3A0] rounded-xl p-4 border-none transition-all duration-300 ease-in-out"
            >
              <AccordionTrigger className="w-full">
                <h4 className="font-sans font-medium text-2xl">{question}</h4>
              </AccordionTrigger>
              <AccordionContent className="w-full space-y-4">
                <p className="font-sans font-normal text-base">{answer}</p>
                <p className="text-sm font-title text-theme-grayscale-black">
                  Essa informação te ajudou?
                </p>
                <div className="flex flex-row items-center justify-start space-x-6">
                  <Button
                    type="button"
                    variant="default"
                    data-active={active}
                    onClick={() => setActive(!active)}
                    className="w-12 text-[#7401B7] bg-white border-2 border-[#7401B7] active:bg-[#7401B7] active:text-white hover:text-white transition-all duration-300 ease-in-out font-medium py-2 px-4 rounded-md text-sm font-title data-[active=true]:bg-[#7401B7] data-[active=true]:text-white"
                  >
                    Sim
                  </Button>
                  <Link
                    href="/contato"
                    passHref
                    className="text-base text-[#7401B7] underline font-medium font-title"
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
  );
}
