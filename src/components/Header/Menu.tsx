"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <nav className="w-full h-full flex flex-col justify-evenly text-xl  md:my-5  items-center ">
          <Link
            href="/"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Início
          </Link>

          <Link
            href="/inscricao/voluntario"
            className="font-title text-xl w-9/12 h-1/5 p-2 font-medium rounded-2xl text-center text-theme-white-base cursor-pointer transition duration-300 bg-theme-secondary-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Quero voluntariar
          </Link>

          <Link
            href="/inscricao/mentor"
            className="font-title text-xl bg-[#FCFCFC] border-4 border-[#5A0C94] text-[#5A0C94] w-9/12 h-1/5 p-2 font-medium rounded-2xl text-center cursor-pointer transition duration-300  disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Quero Mentorar
          </Link>

          <Link
            href="/criadores"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Sobre os criadores
          </Link>
          <Link
            href="/inscricao/certificado"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Emitir certificado
          </Link>
          <Link
            href="/contato"
            className="font-title font-semibold hover:text-theme-secondary-light"
          >
            Fale com a gente
          </Link>
        </nav>
      </div>
    </div>
  );
}
