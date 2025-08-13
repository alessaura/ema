"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AcquisitionModal from "./AcquisitionModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
            
            {/* Texto principal e CTAs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">
                Embalagem e Design: Uma História Mundo Afora
              </h3>
              <p className="text-lg leading-relaxed">
                Descubra como cada país e região brasileira desenvolveu suas próprias soluções de embalagem. 
                Uma jornada completa através da criatividade, cultura e inovação em design.
              </p>
              
              <div className="flex flex-col space-y-3">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-6 py-3 text-base rounded-lg transition-colors"
                >
                  Baixar ePUB Gratuito
                </Button>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-6 py-3 text-base rounded-lg transition-colors"
                >
                  Ver Livro Físico
                </Button>
              </div>
            </div>

            {/* Benefícios da coleção */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-6">O que você encontrará:</h4>
              
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="complete-collection"
                  checked
                  disabled
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary mt-1"
                />
                <label htmlFor="complete-collection" className="text-sm leading-relaxed">
                  <strong>Coleção Completa:</strong> Todos os volumes da série em um só lugar
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="cultural-insights"
                  checked
                  disabled
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary mt-1"
                />
                <label htmlFor="cultural-insights" className="text-sm leading-relaxed">
                  <strong>Insights Culturais:</strong> Como a cultura influencia o design
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="accessibility"
                  checked
                  disabled
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary mt-1"
                />
                <label htmlFor="accessibility" className="text-sm leading-relaxed">
                  <strong>100% Acessível:</strong> ePUB com audiodescrição inclusa
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="ministerio-cultura"
                  checked
                  disabled
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary mt-1"
                />
                <label htmlFor="ministerio-cultura" className="text-sm leading-relaxed">
                  <strong>Apoio Cultural:</strong> Ministério da Cultura (PRONAC 204685 e 231862)
                </label>
              </div>
            </div>

            {/* Informações da empresa e contato */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Contato</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:contato@embalagemmundoafora.com.br" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                      contato@embalagemmundoafora.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Endereço</p>
                    <p className="text-sm opacity-90">
                      São Paulo, SP<br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <a href="tel:+5511999999999" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div>
                <p className="text-sm font-medium mb-3">Siga-nos</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/embalagemmundoafora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.148-1.192C4.654 15.145 4.29 14.087 4.29 12.99s.365-2.155 1.012-2.806c.7-.702 1.851-1.193 3.148-1.193s2.448.49 3.148 1.193c.647.65 1.012 1.708 1.012 2.805s-.365 2.155-1.012 2.806c-.7.701-1.851 1.192-3.149 1.192zm7.138 0c-1.297 0-2.448-.49-3.148-1.192-.647-.65-1.012-1.708-1.012-2.805s.365-2.155 1.012-2.806c.7-.702 1.851-1.193 3.148-1.193s2.448.49 3.148 1.193c.647.65 1.012 1.708 1.012 2.805s-.365 2.155-1.012 2.806c-.7.701-1.851 1.192-3.148 1.192z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/embalagem-mundo-afora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/embalagemmundoafora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@embalagemmundoafora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Imagens dos produtos */}
            <div className="flex items-center justify-center space-x-8 lg:col-span-1">
              <div className="text-center">
                <Image
                  src="/images/footer-phone.png"
                  width={140}
                  height={240}
                  alt="ePUB com audiodescrição no smartphone"
                  className="object-contain"
                />
                <p className="text-xs mt-2 opacity-80">ePUB Digital</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/footer-book.png"
                  width={180}
                  height={240}
                  alt="Livro físico Embalagens Mundo Afora"
                  className="object-contain"
                />
                <p className="text-xs mt-2 opacity-80">Livro Físico</p>
              </div>
            </div>
          </div>

          {/* Rodapé com créditos e links */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Informações do projeto */}
              <div>
                <h5 className="font-semibold mb-3">Projeto Cultural</h5>
                <p className="text-sm opacity-90 leading-relaxed">
                  Ministério da Cultura Apresenta<br />
                  Projeto: Embalagem e Design Uma História Mundo Afora<br />
                  PRONAC: 204685 e 231862
                </p>
              </div>

              {/* Links úteis */}
              <div>
                <h5 className="font-semibold mb-3">Links Úteis</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Download Gratuito
                    </button>
                  </li>
                  <li>
                    <a href="#sobre" className="opacity-90 hover:opacity-100 transition-opacity">
                      Sobre o Projeto
                    </a>
                  </li>
                  <li>
                    <a href="#colecao" className="opacity-90 hover:opacity-100 transition-opacity">
                      A Coleção
                    </a>
                  </li>
                  <li>
                    <a href="#acessibilidade" className="opacity-90 hover:opacity-100 transition-opacity">
                      Acessibilidade
                    </a>
                  </li>
                </ul>
              </div>

              {/* Suporte */}
              <div>
                <h5 className="font-semibold mb-3">Suporte</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="mailto:contato@embalagemmundoafora.com.br" className="opacity-90 hover:opacity-100 transition-opacity">
                      Contato
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="opacity-90 hover:opacity-100 transition-opacity">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#ajuda-download" className="opacity-90 hover:opacity-100 transition-opacity">
                      Ajuda com Download
                    </a>
                  </li>
                  <li>
                    <a href="#termos" className="opacity-90 hover:opacity-100 transition-opacity">
                      Termos de Uso
                    </a>
                  </li>
                </ul>
              </div>

              {/* Copyright */}
              <div>
                <h5 className="font-semibold mb-3">Copyright</h5>
                <p className="text-sm opacity-90 leading-relaxed">
                  © 2024 Embalagem Mundo Afora<br />
                  Todos os direitos reservados.<br />
                  <span className="text-xs">
                    Projeto financiado pelo Ministério da Cultura
                  </span>
                </p>
              </div>
            </div>

            {/* Linha final de copyright */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm opacity-75">
                Desenvolvido com ❤️ para democratizar o acesso ao conhecimento sobre design e cultura brasileira
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AcquisitionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Footer;