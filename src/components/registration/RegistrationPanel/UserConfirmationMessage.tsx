import Image from "next/image";
import IconConfMessage from "@/assets/iconConfMessage.svg";

export function UserConfirmationMessage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-end items-center w-full h-full my-12 gap-8 py-8 bg-theme-white-base">
      <div className="text-center lg:text-left lg:m-8 ">
        <h3 className="font-title font-medium text-3xl lg:pb-8">
          Inscrição enviada com sucesso!
        </h3>
        <p className="font-normal text-base font-sans">
          Te enviaremos um e-mail de confirmação com mais informações.
        </p>
      </div>
      <div>
        <Image
          src={IconConfMessage}
          className="lg:mr-20"
          alt="icone de confirmação"
        />
      </div>
    </div>
  );
}
