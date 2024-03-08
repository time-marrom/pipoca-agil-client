import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Steps() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center pb-10 gap-2 rounded-b-[90px] bg-[#FCCF5C]">
      <div className="p-2 w-full h-full flex flex-col items-start justify-center">
        <Button
          type="button"
          aria-label="Voltar"
          variant="link"
          asChild
          className="w-12 h-12 flex items-center justify-center rounded-full text-theme-grayscale-black font-normal font-sans text-base mx-2"
        >
          <Link href="/">Voltar</Link>
        </Button>
      </div>
      <h2 className="w-full h-full text-2xl font-bold font-title text-theme-grayscale-black my-1">
        Emissão de Certificado
      </h2>
    </div>
  );
}
