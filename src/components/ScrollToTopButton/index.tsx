"use client"

import { useEffect, useState } from "react"
import { BsArrowUpShort } from "react-icons/bs"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const visibility = isVisible ? "opacity-100" : "opacity-0 pointer-events-none"

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 0)
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      className={`fixed flex items-center justify-center bottom-12 right-20 p-2 rounded-full font-bold bg-secondary-base text-white-base transition-all ease-in-out duration-300 ${visibility} outline-none focus:outline-none hover:bg-secondary-dark`}
      type="button"
      title="Voltar ao topo"
      onClick={scrollToTop}
    >
      <BsArrowUpShort className="w-5 h-5" />
    </button>
  )
}
