// components/CountriesSection.tsx
import Image from 'next/image';

interface Country {
  code: string;
  name: string;
  alt: string;
}

const CountriesSection = () => {
  const countries: Country[] = [
    { code: "br", name: "Brasil", alt: "Brazil flag" },
    { code: "be", name: "Bélgica", alt: "Belgium flag" },
    { code: "gb-sct", name: "Escócia", alt: "Scotland flag" },
    { code: "fi", name: "Finlândia", alt: "Finland flag" },
    { code: "gr", name: "Grécia", alt: "Greece flag" },
    { code: "ie", name: "Irlanda", alt: "Ireland flag" },
    { code: "pt", name: "Portugal", alt: "Portugal flag" },
    { code: "it", name: "Itália", alt: "Italy flag" }
  ];

  return (
    <section className="container mx-auto px-6 py-16 md:px-12 lg:px-20">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {countries.map((country) => (
          <div
            key={country.name}
            className="flex items-center space-x-3 bg-white px-5 py-2 border border-[#ECECEC] shadow-sm transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-md group"
            style={{ borderRadius: '4px' }}
          >
            <Image 
              src={`https://flagcdn.com/w40/${country.code}.png`}
              width={28} 
              height={18} 
              alt={country.alt}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-base font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
              {country.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountriesSection;