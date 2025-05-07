import Link from "next/link";
import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900/60 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Nicollas<span className="text-[#FD6F00]">.Dev</span>
            </h2>
            <p className="text-gray-400 mt-2">Desenvolvedor Web</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/NicollasMDs7"
                target="_blank"
                className="text-gray-400 hover:text-[#FD6F00] transition-colors"
              >
                <Github size={24} strokeWidth={2} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nicollas-mendes-dias-871357303/"
                target="_blank"
                className="text-gray-400 hover:text-[#FD6F00] transition-colors"
              >
                <Linkedin size={24} strokeWidth={2} />
              </Link>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link
                    href="#inicio"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sobre"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projetos"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center flex-wrap gap-1">
            © {currentYear} Nicollas Dias. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 mt-2 flex items-center justify-center">
            Feito com{" "}
            <Heart className="text-[#FD6F00] mx-1" size={16} fill="#FD6F00" />{" "}
            por
            <Link
              href="https://www.linkedin.com/in/nicollas-mendes-dias-871357303/"
              target="_blank"
              className="text-[#FD6F00] hover:text-[#e66500] ml-1 transition-colors"
            >
              Nicollas Dias
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}