"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TypeWriter } from "@/components/ui/typeWriter";
import Image from "next/image";

export function Start() {
  const [showFirstPart, setShowFirstPart] = useState(true);
  const [showSecondPart, setShowSecondPart] = useState(false);

  const resetAnimation = () => {
    setShowSecondPart(false);
    setTimeout(() => setShowFirstPart(true), 100);
  };

  return (
    <section
      id="start"
      className="min-h-screen mt-8 w-full bg-gradient-to-br from-purple-300 via-pink-200 py-10 md:py-20
      flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8 lg:px-12"
    >
      <div className="w-full md:w-[55%] lg:w-[80%] flex flex-col md:pr-4 mt-10 md:mt-0">
        <p className="text-4xl lg:text-4xl lg:mb-6 xl:text-6xl font-bold flex items-center flex-wrap h-24">
          {showFirstPart && (
            <TypeWriter
              text="Arte e precisão"
              className="text-pink-500 hover:text-pink-600 mr-2"
              onComplete={() => {
                setShowFirstPart(false);
                setShowSecondPart(true);
              }}
            />
          )}
          {!showFirstPart && (
            <span className="text-pink-500 hover:text-pink-600 mr-2">
              Arte e precisão
            </span>
          )}
          {showSecondPart && (
            <TypeWriter
              text="em cada ponto"
              delay={80}
              onComplete={() => {
                setTimeout(resetAnimation, 2000);
              }}
            />
          )}
        </p>
        <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          <p>
            Transformamos tecidos e ideias em peças únicas feitas especialmente
            para você.
          </p>
          <p>
            Ajustes, consertos e criação sob medida com qualidade artesanal.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            className="bg-pink-500 hover:bg-white text-white hover:text-pink-500 px-4 sm:px-6 py-4 sm:py-6 rounded-2xl shadow
            transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg text-sm sm:text-base"
            onClick={() => {
              const servicesSection = document.getElementById("contact");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Peça um orçamento
          </Button>
          <Button
            className="text-pink-500 bg-white hover:bg-pink-600 hover:text-white px-4 sm:px-6 py-4 sm:py-6 rounded-2xl shadow
            transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg text-sm sm:text-base"
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Ver serviços
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[45%] lg:w-[50%] flex justify-center md:justify-end">
        <div className="flex">
          <Image
            src="/imagens/logo.jpg"
            alt="Costura artesanal de alta qualidade"
            width={300}
            height={300}
            className="rounded-full shadow w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] 
            lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-cover
            transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
