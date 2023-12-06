import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PopcornClubCTA(): JSX.Element {
  return (
    <div className="w-full h-80 p-4 md:p-20 flex flex-col items-start justify-center text-start">
      <div className="w-full h-full rounded-lg">
        <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
          Clube pipoca
        </h3>
        <p className="text-grayscale-darkest text-start font-sans mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          voluptatem sunt? Repellat non et in adipisci soluta vitae doloremque
          nemo error, sed tenetur ad blanditiis deserunt deleniti repudiandae
          saepe praesentium.
        </p>
        <Button variant="default" size="sm" asChild>
          <Link href="/pipoca-indica" className="font-sans text-base">
            Ver mais
          </Link>
        </Button>
      </div>
    </div>
  );
}
