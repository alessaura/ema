// components/DynamicRegionsSection.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useVolume } from '@/contexts/VolumeContext';
import { volumePageData } from '@/data/volumeData';

export default function DynamicRegionsSection() {
  const { selectedVolume } = useVolume();
  const regions = volumePageData[selectedVolume].regions;

  return (
    <>
      {regions.map((region, index) => (
        <section
          key={`${selectedVolume}-${region.id}`}
          className={`relative py-20 md:py-28 transition-all duration-500 ${
            index % 2 === 0 ? "bg-white" : "bg-secondary"
          }`}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
              
              {/* Região/País Visual */}
              <div
                className={`relative flex flex-col items-center justify-center transition-all duration-500 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px] group">
                  <Image
                    src={region.bgImage}
                    fill
                    alt={`Background for ${region.regionName}`}
                    className="object-contain opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-extrabold text-gray-200 md:text-[300px] z-10 transition-all duration-500 group-hover:text-gray-300 group-hover:scale-110">
                    {region.letter}
                  </span>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-green-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="mt-6 text-center text-4xl font-bold text-gray-900 md:text-5xl transition-all duration-300 hover:text-primary">
                  <span className="sr-only">{region.letter}</span>
                  <span className="inline-block transition-transform duration-300 hover:scale-105">
                    {region.regionName}
                  </span>{" "}
                  <span className="text-gray-500 font-medium">
                    {selectedVolume === 'volume1' ? 'BRASIL' : 'MUNDO'}
                  </span>
                </h3>
              </div>
              
              {/* Conteúdo da Região/País */}
              <div className={`space-y-8 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                
                {/* Título Principal */}
                <h4 className="text-3xl font-bold leading-snug text-gray-900 transition-all duration-300 hover:text-primary">
                  {region.title}
                </h4>
                
                {/* Descrição em destaque */}
                <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-gray-700 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:from-gray-100 hover:to-gray-50 group">
                  <p className="leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {region.description}
                  </p>
                </div>
                
                {/* Lista de detalhes */}
                <ul className="space-y-4 text-lg text-gray-700">
                  {region.details.map((detail, i) => (
                    <li 
                      key={i} 
                      className="flex items-start space-x-3 transition-all duration-300 hover:text-gray-900 group"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2 transition-all duration-300 group-hover:bg-emerald-600 group-hover:scale-125"></div>
                      <span className="flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Insight Cultural */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-emerald-600 hover:to-green-600 group">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <p className="relative z-10 text-base font-medium leading-relaxed">
                    {region.insight}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl transition-all duration-300 group-hover:scale-150"></div>
                </div>
                
                {/* Botão CTA */}
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden">
                    <span className="relative z-10">Adquirir material</span>
                    
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Galeria de Produtos */}
            <div className="mt-20 flex justify-center">
              <div className="relative group">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main image */}
                <div className="relative">
                  <Image
                    key={`${selectedVolume}-${region.productImage}`}
                    src={region.productImage}
                    width={900}
                    height={450}
                    alt={`Collage de produtos da região ${region.regionName}`}
                    className="object-contain rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-300 rounded-full opacity-40 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}