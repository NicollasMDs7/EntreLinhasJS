"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Bruna Guimarães",
    role: "Cliente desde 2020",
    content:
      "Fiquei impressionada com a qualidade do serviço. Minhas roupas ficaram perfeitas e o atendimento foi excelente. Recomendo a todos!",
    avatar: "/imagens/feedback-1.jpg", // Substitua pelo caminho correto da imagem
    rating: 5,
  },
  {
    name: "Aline Fregonese",
    role: "Cliente desde 2021",
    content:
      "Precisava de ajustes urgentes em um fantasia para o carnaval e a Entre Linhas me salvou! Entrega rápida e trabalho impecável.",
    avatar: "/imagens/feedback-2.jpg", // Substitua pelo caminho correto da imagem
    rating: 5,
  },
  {
    name: "Maria Silva",
    role: "Cliente desde 2018",
    content:
      "Satisfeita desde sempre, já precise diversas vezes de seus serviços e sempre fui muito bem atendida. Recomendo a todos!",
    avatar: "/imagens/feedback-3.jpg", // Substitua pelo caminho correto da imagem
    rating: 5,
  },
  {
    name: "Lavinia Alves",
    role: "Cliente desde 2022",
    content:
      "Indico a Entre Linhas para quem busca qualidade e excelência em seus serviços. Recomendo!",
    avatar: "/imagens/feedback-4.jpg", // Substitua pelo caminho correto da imagem
    rating: 5,
  },
  {
    name: "Nícollas Dias",
    role: "Cliente desde 2024",
    content:
      "Trabalho de qualidade e atendimento excepcional. Recomendo a todos!",
    avatar: "/imagens/feedback-5.jpg", // Substitua pelo caminho correto da imagem
    rating: 5,
  },
  
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  // Configurar autoplay com tempo mais lento (8 segundos)
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 8000); // Aumentado para 8 segundos
      
      setAutoplayInterval(interval);
    }
    
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, [loaded]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Confira
            alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider min-h-[350px] md:min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4 bg-purple-100 flex items-center justify-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-purple-500">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5", // Estrelas um pouco maiores
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic flex-grow text-base">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Indicadores de slide */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(instanceRef.current.track.details.slides.length)]
              .slice(0, testimonials.length)
              .map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === idx ? "bg-purple-500" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
