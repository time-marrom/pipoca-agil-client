import Link from "next/link";

export function PopcornClubCTA(): JSX.Element {
  return (
    <div className="w-full h-80 flex flex-col items-start justify-center text-start p-12">
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
        <Link
          href="/pipoca-indica"
          className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}
