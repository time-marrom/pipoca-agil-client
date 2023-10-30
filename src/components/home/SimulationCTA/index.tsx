import Link from "next/link"

const mock = [
  "45 grupos ativos hoje",
  "450 pessoas participando hoje",
  "10 temas em andamento",
  "média de 3 meses de duração"
]

export function SimulationCTA(): JSX.Element {
  return (
    <div className="w-full h-80 flex flex-row items-start justify-between text-start p-12">
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-start">
        <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
          Simulação Ágil
        </h3>
        <p className="text-grayscale-darkest text-start font-sans mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem
          sunt? Repellat non et in adipisci soluta vitae doloremque nemo error, sed
          tenetur ad blanditiis deserunt deleniti repudiandae saepe praesentium.
        </p>
        <div className="w-full h-full flex flex-row justify-start items-center gap-4">
          <Link
            href="/pipoca-indica"
            className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
          >
            Quero ser voluntário
          </Link>
          <Link
            href="/pipoca-indica"
            className="h-10 max-w-max my-1 px-4 py-2 text-base font-medium font-sans rounded-md text-center text-white-base cursor-pointer transition duration-300 bg-secondary-base hover:bg-secondary-dark"
          >
            Quero ser mentor
          </Link>
        </div>
      </div>
      <ul className="list-disc list-outside w-1/3 h-full flex flex-col items-start justify-center text-start">
        {mock.map((item, index) => (
          <li key={index} className="text-grayscale-black text-start font-sans mb-6">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
