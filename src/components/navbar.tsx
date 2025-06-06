"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
    // Número de WhatsApp formatado e mensagem codificada para URL
    const whatsappNumber = "5511988386274";
    const whatsappMessage = encodeURIComponent(
      "Olá, vim pelo site. Gostaria de saber mais sobre os serviços de costura."
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    // Verificar inicialmente
    checkIfMobile();
    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile);
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 shadow-md bg-white">
      <h1 className="text-4xl font-bold text-pink-500 z-20">
        <span className="text-purple-600">Entre</span>Linhas
      </h1>

      {isMobile && (
        <button
          onClick={toggleMenu}
          className="z-20 text-gray-800 hover:text-pink-500 transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      )}

      <div
        className={`
          ${
            isMobile
              ? "absolute top-full left-0 w-full bg-white p-6 shadow-lg z-10"
              : "flex justify-between items-center flex-1 ml-6"
          }
          ${isMobile && !isMenuOpen ? "hidden" : ""}
          transition-all duration-300
        `}
      >
        <nav className={`${isMobile ? "w-full" : "mx-auto"}`}>
          <ul
            className={`${
              isMobile ? "flex flex-col space-y-4" : "flex space-x-6"
            } text-2xl`}
          >
            <li
              className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
                document
                  .getElementById("start")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Início
            </li>
            <li
              className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Serviços
            </li>
            <li
              className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Galeria
            </li>
            <li
              className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Depoimentos
            </li>
            <li
              className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contato
            </li>
          </ul>
        </nav>

        {isMobile && (
          <div className="flex space-x-4 mb-4 justify-center mt-4">
            <Link
              href="https://www.instagram.com/entrelinhasjs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-110 duration-300"
            >
              <Instagram size={24} strokeWidth={2} />
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              className="transition-transform hover:scale-110 duration-300 hover:bg-green-500"
            >
              <img
                src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </Link>
          </div>
        )}

        <Button
          className={`
            bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-2xl shadow
            transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg
            ${isMobile ? "w-full mt-4" : ""}
          `}
          onClick={() => {
            const servicesSection = document.getElementById("contact");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Peça um orçamento
        </Button>
      </div>
    </header>
  );
}
