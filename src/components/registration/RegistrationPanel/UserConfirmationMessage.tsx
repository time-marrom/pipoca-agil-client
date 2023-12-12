import { FaCheckCircle } from "react-icons/fa";

export function UserConfirmationMessage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-2 mx-auto space-y-8">
      <h3 className="font-sans font-medium text-lg">Tudo Pronto!</h3>
      <div className="flex flex-col justify-center items-center w-full h-full gap-4">
        <FaCheckCircle className="text-theme-status-success h-40 w-40" />
        <p className="font-normal text-base font-sans">
          Sua inscrição foi concluída com sucesso!
        </p>
      </div>
      <p className="font-normal text-base font-sans">
        Enviaremos em e-mail de confirmação com mais informações dentro de
        alguns minutos.
      </p>
    </div>
  );
}
