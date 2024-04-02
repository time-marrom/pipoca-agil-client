import IconConfMessage from "@/assets/iconConfMessage.svg";
import Image from "next/image";

export function UserConfirmationMessage() {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center gap-3 py-1 bg-theme-white-base">
        <div className="flex flex-col justify-center items-center text-center ">
          <Image src={IconConfMessage} alt="icone de confirmação" />

          <h3 className="font-title font-medium text-3xl lg:pb-8">
            Inscrição enviada com sucesso!
          </h3>
          <p className="font-normal text-base font-sans">
            Te enviaremos um e-mail de confirmação com mais informações.
          </p>
        </div>
      </div>
    </div>
  );
}
