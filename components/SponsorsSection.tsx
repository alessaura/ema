// components/SponsorsSection.tsx
'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

interface LogoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface SponsorsSectionProps {
  selectedVolume: 'volume1' | 'volume2';
}

const SponsorsSection = ({ selectedVolume }: SponsorsSectionProps) => {
  const { t } = useLanguage();
  // Patrocinadores por volume
  const volume1Sponsors: LogoItem[] = [
    { src: "/o-i.png", width: 140, height: 70, alt: "O1 logo" },
    { src: "/ball.png", width: 140, height: 70, alt: "Ball logo" },
    { src: "/valgroup.png", width: 170, height: 70, alt: "Valgroup logo" }
  ];

  const volume2Sponsors: LogoItem[] = [
    { src: "/o-i.png", width: 140, height: 70, alt: "O1 logo" },
    { src: "/ball.png", width: 140, height: 70, alt: "Ball logo" },
    { src: "/valgroup.png", width: 170, height: 70, alt: "Valgroup logo" },
    // Adicione patrocinadores específicos do Volume 2 aqui se necessário
  ];

  // Realização (igual para ambos volumes)
  const realization: LogoItem[] = [
    { src: "/futurepack.png", width: 170, height: 90, alt: "FuturePack logo" },
    { src: "/ie-logo.png", width: 170, height: 90, alt: "Instituto de Embalagens logo" },
    { src: "/ministerio-da-cultura.png", width: 200, height: 90, alt: "Ministério da Cultura Governo Federal Brasil logo" }
  ];

  const currentSponsors = selectedVolume === 'volume1' ? volume1Sponsors : volume2Sponsors;

  return (
    <>
      {/* Partners Section */}
      <section className="container mx-auto px-6 py-16 text-center md:px-12 lg:px-20">
        <h3 className="mb-4 inline-block rounded-full bg-accent px-8 py-3 text-base font-semibold uppercase tracking-wide text-gray-700 transition-all duration-300 hover:bg-primary hover:text-white">
          {t('sponsors.title')}
        </h3>
        
        {/* Volume indicator */}
        <p className="text-sm text-gray-500 mb-8">
          {t('volume')} {selectedVolume === 'volume1' ? '1' : '2'}
        </p>
        
        <div 
          key={selectedVolume}
          className="flex flex-wrap items-center justify-center gap-12 animate-fadeIn"
        >
          {currentSponsors.map((sponsor, index) => (
            <div 
              key={sponsor.alt}
              className="group p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/20"
            >
              <Image 
                src={sponsor.src} 
                width={sponsor.width} 
                height={sponsor.height} 
                alt={sponsor.alt} 
                className="object-contain transition-all duration-300 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Realization Section */}
      <section className="container mx-auto px-6 py-16 text-center md:px-12 lg:px-20">
        <h3 className="mb-10 inline-block rounded-full bg-accent px-8 py-3 text-base font-semibold uppercase tracking-wide text-gray-700 transition-all duration-300 hover:bg-primary hover:text-white">
          {t('sponsors.realization')}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {realization.map((org, index) => (
            <div 
              key={org.alt}
              className="group p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/20"
            >
              <Image 
                src={org.src} 
                width={org.width} 
                height={org.height} 
                alt={org.alt} 
                className="object-contain transition-all duration-300 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>

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
};

export default SponsorsSection;
