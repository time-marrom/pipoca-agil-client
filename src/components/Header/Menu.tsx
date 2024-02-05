"use client";
import Link from "next/link";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      className={`${
        isVisible ? "flex" : "invisible"
      } fixed w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm lg:hidden`}
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-5 w-[75vw] md:w-[45vw] bg-[#F6EBCF] h-[40vh] md:h-[35vh] shadow-md p-4 rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <nav className="w-full h-full flex flex-col justify-evenly text-xl  md:my-5 items-center ">
          <Link
            href="/"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Início
          </Link>

          <button className="w-9/12 h-1/5 p-2 font-medium rounded-2xl text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base hover:bg-theme-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed font-title">
            <Link
              href="/simulacao/inscricao"
              className="font-title text-lg font-semibold hover:text-theme-secondary-light"
            >
              Quero voluntariar
            </Link>
          </button>

          <Link
            href="/simulacao/inscricao"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Quero Mentorar
          </Link>
          <Link
            href="/simulacao/inscricao"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Emitir certificado
          </Link>
        </nav>
      </div>
    </div>
  );
}
