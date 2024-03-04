import IconConfMessage from "@/assets/iconConfMessage.svg"
import Image from "next/image"

export function UserConfirmationMessage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-xs h-full flex items-center justify-center my-12 gap-8 py-8 bg-theme-white-base">
        <div className="text-center lg:m-8 ">
          <div>
            <Image
              src={IconConfMessage}
              className="lg:mr-20"
              alt="icone de confirmação"
            />
          </div>
          <h3 className="font-title font-medium text-3xl lg:pb-8">
            Inscrição enviada com sucesso!
          </h3>
          <p className="font-normal text-base font-sans">
            Te enviaremos um e-mail de confirmação com mais informações.
          </p>
        </div>
      </div>
    </div>
  )
}
