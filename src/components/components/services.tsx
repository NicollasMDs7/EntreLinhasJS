"use client";

import {
  Scissors,
  Shirt,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Ajustes",
    description:
      "Ajustamos suas roupas para o caimento perfeito, customizados para seu corpo.",
    icon: <Scissors className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Reformas",
    description:
      "Damos uma nova vida a peças antigas, transformando-as em novas criações.",
    icon: <Shirt className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Entregas",
    description:
      "Entregamos suas peças no conforto da sua casa, prontas para usar.",
    icon: <PackageCheck className="w-8 h-8 text-purple-500" />,
  },
];

export function Services() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 24 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 32 },
        },
      },
      created(slider) {
        setInterval(() => slider.next(), 4000); // autoplay
      },
    },
    []
  );

  return (
    <section
      id="services"
      className="py-16 bg-white flex justify-center items-center h-screen"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-black">Nossos Serviços</h2>
        <p className="text-gray-600 mb-24">
          Oferecemos uma variedade de soluções em costura para atender todas as
          suas necessidades
        </p>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {services.map((service, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl p-6 shadow-md text-left flex flex-col justify-center items-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 pl-12 pr-12 mb-4">
                  {service.description}
                </p>

                <Button
                  className="mt-auto bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
                  onClick={() => {
                    const servicesSection = document.getElementById("contact");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            ))}
          </div>

          {/* Nav buttons - visíveis apenas em mobile */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 block md:hidden">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 block md:hidden">
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
