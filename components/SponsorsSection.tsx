// components/SponsorsSection.tsx
import Image from 'next/image';

interface LogoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const SponsorsSection = () => {
  const sponsors: LogoItem[] = [
    { src: "/o-i.png", width: 140, height: 70, alt: "O1 logo" },
    { src: "/ball.png", width: 140, height: 70, alt: "Ball logo" },
    { src: "/valgroup.png", width: 170, height: 70, alt: "Valgroup logo" }
  ];

  const realization: LogoItem[] = [
    { src: "/futurepack.png", width: 170, height: 90, alt: "FuturePack logo" },
    { src: "/ie-logo.png", width: 170, height: 90, alt: "Instituto de Embalagens logo" },
    { src: "/ministerio-da-cultura.png", width: 200, height: 90, alt: "Ministério da Cultura Governo Federal Brasil logo" }
  ];

  return (
    <>
      {/* Partners Section */}
      <section className="container mx-auto px-6 py-16 text-center md:px-12 lg:px-20">
        <h3 className="mb-10 inline-block rounded-full bg-accent px-8 py-3 text-base font-semibold uppercase tracking-wide text-gray-700 transition-all duration-300 hover:bg-primary hover:text-white">
          Patrocinadores
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {sponsors.map((sponsor, index) => (
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
          Realização | Realization
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
    </>
  );
};

export default SponsorsSection;