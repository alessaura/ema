"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Ms_Madi, Montserrat } from "next/font/google";

const msMadi = Ms_Madi({ subsets: ["latin"], weight: "400" });
const montserratBlk = Montserrat({ subsets: ["latin"], weight: "900", style: "italic" });

interface RegionData {
  id: string;
  letter: string;            // Ex.: "S"
  regionName: string;        // Ex.: "udeste"
  bgImage: string;           // Fallback caso não exista letterImage
  letterImage?: string;      // PNG da letra (ex.: "/sudeste.png")
  title: string;
  description: string;
  highlights: string[];      // "Título:Descrição"
  insight: string;
  productImages: string[];
  reverse?: boolean;         // (ignorado no layout novo; mantido p/ compatibilidade)
}

interface RegionSectionProps {
  region: RegionData;
  index?: number;
}

/** Stroke externo real (sem “comer” o preenchimento) via duas camadas */
const OutlineOutside = ({
  children,
  className,
  fill = "#0F172A",
  stroke = "#FFFFFF",
  strokeWidth = 2,
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
    {/* Camada stroke (embaixo) */}
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
    {/* Camada fill (em cima) */}
    <span className="absolute inset-0 block pointer-events-none" style={{ color: fill }}>
      {children}
    </span>
  </span>
);

const RegionSection = ({ region, index = 0 }: RegionSectionProps) => {
  const letterSrc = region.letterImage ?? region.bgImage;

  // Galeria (scroll + setas + autoplay leve)
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
        {/* Grid principal: texto à esquerda, galeria à direita */}
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* ESQUERDA — header visual + textos */}
          <div>
            {/* Header: Letra 200x200 + nome colado + BRASIL */}
            <div className="flex items-end">
              <div className="relative w-[200px] h-[200px] shrink-0">
                <Image
                  src={letterSrc}
                  alt={`Letra ${region.letter}`}
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              <div className="-ml-3 -translate-x-1">
                <OutlineOutside
                  className={msMadi.className}
                  stroke="#FFFFFF"
                  strokeWidth={2} // ajuste fino: 1.5 ~ 2.5
                  fill="#0F172A"
                  style={{ fontSize: "clamp(56px, 9vw, 96px)" }}
                >
                  {region.regionName}
                </OutlineOutside>

                <div
                  className={`${montserratBlk.className} italic tracking-wider mt-1`}
                  style={{
                    fontSize: "clamp(28px, 5vw, 48px)",
                    WebkitTextStroke: "0.5px #221F46",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BRASIL
                </div>
              </div>
            </div>

            {/* Título */}
            <h3 className="mt-6 text-2xl md:text-3xl font-bold leading-tight text-gray-900">
              “{region.title}”
            </h3>

            {/* Descrição */}
            <p className="mt-4 text-lg leading-relaxed text-gray-800">{region.description}</p>

            {/* Destaques */}
            <div className="mt-6 space-y-3">
              {region.highlights.map((h, i) => {
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

            {/* CTA */}
            <Button
              className="mt-8 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:brightness-95"
              style={{ backgroundColor: "#4F8671" }}
            >
              Adquirir material
            </Button>
          </div>

          {/* DIREITA — galeria com setas */}
          <div>
            <div className="relative">
              <div
                ref={trackRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 md:gap-6 pr-6"
                style={{ scrollbarWidth: "none" }} // Firefox
              >
                {region.productImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative snap-center shrink-0 w-[82%] md:w-[520px] aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Imagem ${i + 1} da região ${region.id}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* setas */}
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

        {/* INSIGHT CULTURAL centralizado */}
        <div className="mt-16">
          <div
            className="mx-auto max-w-3xl text-center rounded-xl px-6 py-6 shadow-sm"
            style={{ backgroundColor: "#F5FFFC" }}
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-800 italic">
              <span className="not-italic font-bold">Insight Cultural:</span> {region.insight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionSection;
