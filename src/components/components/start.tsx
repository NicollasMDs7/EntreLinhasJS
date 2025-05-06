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
      className="min-h-screen w-full bg-gradient-to-br from-purple-300 via-pink-200 py-20
      flex items-center justify-center"
    >
      <div className="w-[60%] flex flex-col ml-24">
        <p className="text-6xl font-bold flex items-center flex-wrap h-24">
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
        <div className="mt-4 text-2xl ">
          <p>
            Transformamos tecidos e ideias em peças únicas feitas especialmente
            para você.
          </p>
          <p>
            Ajustes, consertos e criação sob medida com qualidade artesanal.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <Button
            className="bg-pink-500 hover:bg-white text-white hover:text-pink-500 px-6 py-6 rounded-2xl shadow
            transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
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
            className="text-pink-500 bg-white hover:bg-pink-600 hover:text-white px-4 py-6 rounded-2xl shadow
  transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
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
      <div className="w-[40%]">
        <div className="flex">
          <Image
            src="/imagens/logo.jpg"
            alt="Costura artesanal de alta qualidade"
            width={500}
            height={500}
            className="rounded-full  shadow
  transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
