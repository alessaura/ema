"use client";

import Image from "next/image";
import { useState, type ReactNode, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Ms_Madi, Montserrat } from "next/font/google";
import AcquisitionModal from "./AcquisitionModal";
import { useLanguage } from '@/app/context/LanguageContext';

const msMadi = Ms_Madi({ subsets: ["latin"], weight: "400" });
const montserratBlk = Montserrat({ subsets: ["latin"], weight: "900", style: "italic" });

export interface RegionData {
  id: string;
  letter: string;
  regionName: string;
  bgImage: string;
  letterImage?: string;
  title: string;
  description: string;
  highlights: string[];
  insight: string;
  productImages: string[];
}

interface RegionSectionProps {
  region: RegionData;
  index?: number;
}

const OutlineOutside = ({
  children,
  className,
  fill = "#0F172A",
  stroke = "#FFFFFF",
  strokeWidth = 3,
  style,
}: {
  children: ReactNode;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}) => (
  <span className={`relative inline-block leading-none ${className ?? ""}`} style={style}>
    <span
      aria-hidden
      className="block"
      style={{
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: `${strokeWidth}px ${stroke}`,
        filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.35))",
      }}
    >
      {children}
    </span>
    <span className="absolute inset-0 block pointer-events-none" style={{ color: fill }}>
      {children}
    </span>
  </span>
);

const RegionSection = ({ region, index = 0 }: RegionSectionProps) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const letterSrc = region.letterImage ?? region.bgImage;

  return (
    <section className={`relative py-20 md:py-32 ${index % 2 === 0 ? "bg-white" : "bg-secondary"}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header com letra capitular */}
        <div className="mb-16">
          <div className="flex items-start gap-8 mb-8">
            <div className="relative w-[180px] h-[180px] shrink-0">
              <Image
                src={letterSrc}
                alt={`Letra ${region.letter}`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <div className="flex-1 pt-4">
              <div className="mb-4">
                <OutlineOutside
                  className={msMadi.className}
                  stroke="#FFFFFF"
                  strokeWidth={3}
                  fill="#0F172A"
                  style={{ fontSize: "clamp(48px, 8vw, 84px)" }}
                >
                  {region.regionName}
                </OutlineOutside>
              </div>

              <div
                className={`${montserratBlk.className} italic tracking-wider mb-6`}
                style={{
                  fontSize: "clamp(24px, 4vw, 42px)",
                  color: "#221F46",
                }}
              >
                BRASIL
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">
                "{region.title}"
              </h3>

              <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
                {region.description}
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo principal em layout elegante */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Coluna 1: Destaques culturais */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 border-b-2 border-primary/20 pb-2">
              {t('details.regional.highlights')}
            </h4>
            <div className="space-y-4">
              {region.highlights.map((h, i) => {
                const [title, description] = h.split(":");
                return (
                  <div key={i} className="group">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                        {(title ?? "").trim()}
                      </h5>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {(description ?? "").trim()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 w-full px-6 py-4 text-base rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: "#4F8671" }}
            >
              {t('details.acquire')}
            </Button>
          </div>

          {/* Coluna 2-3: Galeria elegante */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 border-b-2 border-primary/20 pb-2">
              {t('details.products.regional')}
            </h4>
            
            {/* Imagem principal */}
            <div className="mb-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src={region.productImages[selectedImageIndex] || region.productImages[0]}
                  alt={`Imagem principal da região ${region.regionName}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Thumbnails elegantes */}
            <div className="grid grid-cols-4 gap-3">
              {region.productImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImageIndex === i 
                      ? 'ring-2 ring-primary shadow-lg scale-105' 
                      : 'hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Insight cultural - mais integrado */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl" />
            <div className="relative bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-sm">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-xl">🇧🇷</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('details.regional.insight')}</h4>
                <p className="text-lg leading-relaxed text-gray-800 italic font-medium">
                  "{region.insight}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AcquisitionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default RegionSection;
