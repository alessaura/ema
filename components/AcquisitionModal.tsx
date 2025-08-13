// components/AcquisitionModal.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";

interface AcquisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

type VolumeOption = "complete" | "volume1" | "volume2";

const AcquisitionModal = ({ isOpen, onClose }: AcquisitionModalProps) => {
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>("complete");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    cpf: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const volumeOptions = [
    {
      id: "complete" as VolumeOption,
      title: "COLEÇÃO COMPLETA",
      description: ""
    },
    {
      id: "volume1" as VolumeOption,
      title: "EMBALAGEM MUNDO AFORA 1",
      description: "Ministério da Cultura Apresenta:\nProjeto: Embalagem e Design Uma História Mundo Afora\nPronac: 204685"
    },
    {
      id: "volume2" as VolumeOption,
      title: "EMBALAGEM MUNDO AFORA 2",
      description: "Ministério da Cultura Apresenta:\nProjeto: Embalagem e Design Uma História Mundo Afora 2\nPRONAC 231862"
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitEpub = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aqui você implementará o envio do email
      const emailBody = `
Solicitação de Download - EPUB Acessível

Volume selecionado: ${volumeOptions.find(v => v.id === selectedVolume)?.title}

Dados do solicitante:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
CPF: ${formData.cpf}
      `;

      // Implementar envio do email aqui
      console.log("Dados para envio:", { selectedVolume, formData, emailBody });
      
      // Simular delay do envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Solicitação enviada com sucesso! Você receberá o link de download por email.");
      onClose();
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", cpf: "" });
      
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      alert("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLivroImpresso = () => {
    // URL da loja - você deve substituir pela URL real
    const lojaUrl = "https://loja-exemplo.com";
    window.open(lojaUrl, "_blank");
  };

  const formatCPF = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    const match = cleanValue.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cleanValue;
  };

  const formatPhone = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    const match = cleanValue.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleanValue;
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.phone.trim() && 
           formData.cpf.trim();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adquirir Material">
      <div className="space-y-6">
        {/* Volume Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Selecione o volume:
          </h3>
          
          <div className="space-y-4">
            {volumeOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name="volume"
                  value={option.id}
                  checked={selectedVolume === option.id}
                  onChange={(e) => setSelectedVolume(e.target.value as VolumeOption)}
                  className="mt-1 w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {option.title}
                  </div>
                  {option.description && (
                    <div className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                      {option.description}
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Download Options */}
        <div className="space-y-6">
          {/* EPUB Form */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">
              EPUB acessível
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Esse ePUB tem audiodescrição para acessibilidade de pessoas com deficiência visual.
            </p>
            
            <form onSubmit={handleSubmitEpub} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", formatPhone(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                </div>
                
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    required
                    value={formData.cpf}
                    onChange={(e) => handleInputChange("cpf", formatCPF(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Download do EPUB"}
              </Button>
            </form>
          </div>

          {/* Print Book Button */}
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">
              Livro Impresso
            </h4>
            <Button
              onClick={handleLivroImpresso}
              className="w-full bg-yellow-600 hover:bg-yellow-700"
            >
              IR PARA LOJA
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AcquisitionModal;