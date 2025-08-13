// components/CountrySection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Ms_Madi, Montserrat } from "next/font/google";
import AcquisitionModal from "./AcquisitionModal";

const msMadi = Ms_Madi({ subsets: ["latin"], weight: "400" });
const montserratBlk = Montserrat({ subsets: ["latin"], weight: "900", style: "italic" });

export interface CountryData {
  id: string;
  code: string;
  letter: string;
  countryName: string;
  fullCountryName: string;
  bgImage: string;
  letterImage?: string;
  title: string;
  description: string;
  highlights: string[];
  insight: string;
  productImages: string[];
}

interface CountrySectionProps {
  country: CountryData;
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

const CountrySection = ({ country, index = 0 }: CountrySectionProps) => {
  // Proteção contra undefined
  if (!country) {
    console.error('CountrySection: country prop is undefined');
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Erro: Dados do país não encontrados
        </h2>
      </div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const letterSrc = country.letterImage ?? country.bgImage;

  // Galeria
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    const id = setInterval(() => {
      if (!paused) scrollByAmount("next");
    }, 4500);
    return () => {
      clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className={`relative py-20 md:py-28 ${index % 2 === 0 ? "bg-white" : "bg-secondary"}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="flex items-end">
              <div className="relative w-[200px] h-[200px] shrink-0">
                <Image
                  src={letterSrc}
                  alt={`Letra ${country.letter}`}
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              <div className="-ml-3 -translate-x-1">
                <OutlineOutside
                  className={msMadi.className}
                  stroke="#FFFFFF"
                  strokeWidth={3}
                  fill="#0F172A"
                  style={{ fontSize: "clamp(56px, 9vw, 96px)" }}
                >
                  {country.countryName}
                </OutlineOutside>

                <div
                  className={`${montserratBlk.className} italic tracking-wider mt-1`}
                  style={{
                    fontSize: "clamp(28px, 5vw, 48px)",
                    color: "#221F46",
                  }}
                >
                  {country.fullCountryName}
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-2xl md:text-3xl font-bold leading-tight text-gray-900">
              "{country.title}"
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-gray-800">{country.description}</p>

            <div className="mt-6 space-y-3">
              {country.highlights.map((h, i) => {
                const [t, d] = h.split(":");
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary" />
                    <p className="text-gray-800">
                      <span className="font-semibold">{(t ?? "").trim()}:</span>{" "}
                      <span>{(d ?? "").trim()}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:brightness-95"
              style={{ backgroundColor: "#4F8671" }}
            >
              Adquirir material
            </Button>
          </div>

          <div>
            <div className="relative">
              <div
                ref={trackRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 md:gap-6 pr-6"
                style={{ scrollbarWidth: "none" }}
              >
                {country.productImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative snap-center shrink-0 w-[82%] md:w-[520px] aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Imagem ${i + 1} do país ${country.id}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollByAmount("prev")}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-md hover:bg-white"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Próxima"
                onClick={() => scrollByAmount("next")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-md hover:bg-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div
            className="mx-auto max-w-3xl text-center rounded-xl px-6 py-6 shadow-sm"
            style={{ backgroundColor: "#F5FFFC" }}
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-800 italic">
              <span className="not-italic font-bold">Insight Cultural:</span> {country.insight}
            </p>
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

export default CountrySection;