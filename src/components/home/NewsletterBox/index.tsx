"use client"

import { useForm } from "react-hook-form"

type Inputs = {
  email: string
}

export function NewsletterBox() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty, isValid }
  } = useForm<Inputs>()

  function onSubmit(data: Inputs) {
    console.log(data.email)
    resetField("email")
  }

  return (
    <div className="w-full h-80 flex flex-col items-start justify-center bg-[#c3c3c3] rounded-lg p-12">
      <h3 className="text-[#252525] text-2xl font-bold mb-4">
        Se inscreva na nossa Newsletter
      </h3>
      <p className="text-[#3a3a3a] text-center mb-8">
        Receba as atualizações do Pipoca no seu email
      </p>
      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full rounded-md border bg-[#f6f6f6] border-[#9243c0] px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#7401b7] focus:border-transparent text-[#252525] placeholder:text-[#727272] placeholder:opacity-50"
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <span className="text-[#E70000] text-sm italic">
            O campo email é obrigatório
          </span>
        )}
        <button
          className="bg-[#7401b7] hover:bg-[#4c0178] h-10 max-w-max my-2 text-white rounded-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Quero receber
        </button>
      </form>
    </div>
  )
}
