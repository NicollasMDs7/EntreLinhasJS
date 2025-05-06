import { Button } from "@/components/ui/button";
export function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md">
      <h1 className="text-4xl font-bold text-purple-600">
        <span className="text-pink-500">Entre</span>Linhas
      </h1>
      <nav className="">
        <ul className="flex space-x-6 text-2xl">
          <li
            id="start"
            className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
          >
            Início
          </li>
          <li
            id="services"
            className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
          >
            Serviços
          </li>
          <li
            id="gallery"
            className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
          >
            Galeria
          </li>
          <li
            id="testimonials"
            className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
          >
            Depoimentos
          </li>
          <li
            id="contact"
            className="underline-magical text-gray-800 hover:text-[#FF00FF] transition-colors cursor-pointer"
          >
            Contato
          </li>
        </ul>
      </nav>
      <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-2xl shadow transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg">
        Peça um orçamento
      </Button>
    </header>
  );
}
