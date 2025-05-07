"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [radioError, setRadioError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = "Formato: (99) 99999-9999";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Formatação para telefone
    if (name === "telefone") {
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length <= 11) {
        if (formattedValue.length > 2) {
          formattedValue = `(${formattedValue.slice(
            0,
            2
          )}) ${formattedValue.slice(2)}`;
        }
        if (formattedValue.length > 10) {
          formattedValue = `${formattedValue.slice(
            0,
            10
          )}-${formattedValue.slice(10)}`;
        }
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
    setRadioError(null); // Limpa o erro quando uma opção é selecionada
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Verifica se uma opção foi selecionada
    if (!selectedOption) {
      setRadioError("Por favor, selecione uma opção");
      return;
    }

    setEnviando(true);
    setMensagemStatus("");

    try {
      // Simulando um envio bem-sucedido
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMensagemStatus(
        "Mensagem enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });

      setTimeout(() => {
        setMensagemStatus("");
      }, 5000);
    } catch (error) {
      setMensagemStatus("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-black">Realize seu Orçamento</h2>
        <p className="text-gray-600 mb-8">
          Envie sua mensagem e responderemos o mais breve possível
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-left text-gray-700 mb-1 font-medium"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full border ${
                  errors.nome ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Seu nome completo"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.nome}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-gray-700 mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="seu.email@exemplo.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefone"
                className="block text-left text-gray-700 mb-1 font-medium"
              >
                Telefone
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={`w-full border ${
                  errors.telefone ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="(99) 99999-9999"
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.telefone}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-left text-gray-700 mb-2 font-medium">
                Selecione uma opção:
              </label>

              <RadioGroup
                value={selectedOption || ""}
                onValueChange={handleRadioChange}
                className="grid grid-cols-2 gap-3 md:flex md:flex-row md:space-x-6 md:space-y-0"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="ajustes"
                    id="r1"
                    className="radio-black border-2 border-black checked:bg-black focus:ring-black"
                  />
                  <Label htmlFor="r1" className="cursor-pointer">
                    Ajustes
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="reformas"
                    id="r2"
                    className="radio-black border-2 border-black checked:bg-black focus:ring-black"
                  />
                  <Label htmlFor="r2" className="cursor-pointer">
                    Reformas
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="personalizados"
                    id="r3"
                    className="radio-black border-2 border-black checked:bg-black focus:ring-black"
                  />
                  <Label htmlFor="r3" className="cursor-pointer">
                    Personalizados
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="outros"
                    id="r4"
                    className="radio-black border-2 border-black checked:bg-black focus:ring-black"
                  />
                  <Label htmlFor="r4" className="cursor-pointer">
                    Outros
                  </Label>
                </div>
              </RadioGroup>

              {radioError && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {radioError}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="mensagem"
                className="block text-left text-gray-700 mb-1 font-medium"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className={`w-full border ${
                  errors.mensagem ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.mensagem}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={enviando}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
                enviando ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>

            {mensagemStatus && (
              <div
                className={`mt-4 p-3 rounded-lg ${
                  mensagemStatus.includes("sucesso")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {mensagemStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
