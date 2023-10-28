import Link from "next/link"

export default function IndicatesPopcornCTA(): JSX.Element {
  return (
    <div className="w-full h-80 flex flex-col items-start justify-center text-start bg-[#c3c3c3] rounded-lg p-12">
      <h3 className="text-[#252525] text-2xl font-bold mb-4">Pipoca Indica</h3>
      <p className="text-[#3a3a3a] text-start mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo recusandae fuga
        amet magni itaque harum nam in cupiditate molestias cum, nostrum perferendis? Ipsa
        nam non expedita, accusamus cum sunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum.
      </p>
      <Link
        href="/pipoca-indica"
        className="bg-[#7401b7] hover:bg-[#4c0178] h-10 max-w-max my-1 text-white rounded-lg px-4 py-2"
      >
        Ver mais
      </Link>
    </div>
  )
}
