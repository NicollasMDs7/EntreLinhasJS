"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Número de WhatsApp formatado e mensagem codificada para URL
  const whatsappNumber = "5511988386274";
  const whatsappMessage = encodeURIComponent(
    "Olá, vim pelo site. Gostaria de saber mais sobre os serviços de costura."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="w-full bg-gradient-to-br from-purple-300/90 via-pink-200/90 to-purple-200/90 border-t border-pink-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-500">
              Entre<span className="text-purple-600">Linhas</span>
            </h2>
            <p className="text-gray-600 mt-2">Casa de costuras</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
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
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li
                  className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
                  onClick={() => {
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
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Depoimentos
                </li>
                
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-pink-300/50 mt-8 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center flex-wrap gap-1">
            © {currentYear} Entre Linhas. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 mt-2 flex items-center justify-center">
            Feito com{" "}
            <Heart
              className="text-pink-500 mx-1"
              size={16}
              fill="currentColor"
            />{" "}
            por
            <Link
              href="https://nicollas-dev.vercel.app/"
              target="_blank"
              className="text-pink-500 hover:text-pink-600 ml-1 transition-colors hover:scale-105 duration-300"
            >
              Nicollas Dias
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
