"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
};

export function NewsletterBox(): JSX.Element {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data.email);
    resetField("email");
  }

  return (
    <div className="w-full h-full p-4 md:p-20 flex flex-col items-start justify-start bg-theme-white-lighter">
      <form
        className="w-full h-full flex flex-col items-start text-start justify-start rounded-lg p-12 gap-1 font-sans bg-theme-white-light shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-grayscale-black text-2xl font-bold font-title mb-4">
          Newsletter
        </h3>
        <p className="text-grayscale-darker text-start font-sans mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          voluptatem sunt? Repellat non et in adipisci soluta vitae doloremque
          nemo error, sed tenetur ad blanditiis deserunt deleniti repudiandae
          saepe praesentium.
        </p>
        <input
          className="w-full max-w-md rounded-md border bg-theme-white-base border-secondary-light px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary-base focus:border-transparent text-grayscale-black placeholder:text-grayscale-darkest placeholder:opacity-50"
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <span className="text-status-error text-sm italic">
            O campo email é obrigatório
          </span>
        )}
        <Button
          variant="default"
          size="sm"
          type="submit"
          disabled={!isDirty || !isValid}
          className="font-sans disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Quero receber
        </Button>
      </form>
    </div>
  );
}
