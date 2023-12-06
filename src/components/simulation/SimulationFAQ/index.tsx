import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SimulationFAQ() {
  return (
    <div className="h-full w-full p-4 md:p-20 space-y-4 flex flex-col justify-start items-center bg-theme-white-lighter">
      <h3 className="font-sans font-medium text-lg">
        Perguntas Frequentes - FAQ
      </h3>
      <div className="h-full w-full max-w-3xl flex flex-col justify-start items-center">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-normal text-base font-sans">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="font-normal text-base font-sans">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-normal text-base font-sans">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="font-normal text-base font-sans">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-normal text-base font-sans">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="font-normal text-base font-sans">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
