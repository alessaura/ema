// components/CountriesSection.tsx (versão atualizada)
'use client';

import Image from 'next/image';

interface Country {
  code: string;
  name: string;
  alt: string;
}

interface CountriesSectionProps {
  selectedVolume: 'volume1' | 'volume2';
  selectedCountry: string | null;
  onCountrySelect: (countryCode: string) => void;
  onVolumeChange: (volume: 'volume1' | 'volume2') => void;
}

const CountriesSection = ({
  selectedVolume,
  selectedCountry,
  onCountrySelect,
  onVolumeChange
}: CountriesSectionProps) => {
  
  const volume1Countries: Country[] = [
    { code: "br", name: "Brasil", alt: "Brazil flag" },
    { code: "de", name: "Alemanha", alt: "Germany flag" },
    { code: "dk", name: "Dinamarca", alt: "Denmark flag" },
    { code: "es", name: "Espanha", alt: "Spain flag" },
    { code: "fr", name: "França", alt: "France flag" },
    { code: "nl", name: "Holanda", alt: "Netherlands flag" },
    { code: "no", name: "Noruega", alt: "Norway flag" },
    { code: "se", name: "Suécia", alt: "Sweden flag" }
  ];

  const volume2Countries: Country[] = [
    { code: "br", name: "Brasil", alt: "Brazil flag" },
    { code: "be", name: "Bélgica", alt: "Belgium flag" },
    { code: "gb-sct", name: "Escócia", alt: "Scotland flag" },
    { code: "fi", name: "Finlândia", alt: "Finland flag" },
    { code: "gr", name: "Grécia", alt: "Greece flag" },
    { code: "ie", name: "Irlanda", alt: "Ireland flag" },
    { code: "pt", name: "Portugal", alt: "Portugal flag" },
    { code: "it", name: "Itália", alt: "Italy flag" }
  ];

  const countries = selectedVolume === 'volume1' ? volume1Countries : volume2Countries;

  return (
    <section className="container mx-auto px-6 py-16 md:px-12 lg:px-20">
      {/* Title with volume tabs */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Países por Volume</h3>

        {/* Volume Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => onVolumeChange('volume1')}
              className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 ${
                selectedVolume === 'volume1'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              Volume 1
              {selectedVolume === 'volume1' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => onVolumeChange('volume2')}
              className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 ${
                selectedVolume === 'volume2'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              Volume 2
              {selectedVolume === 'volume2' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-pulse"></div>
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-600">
          Clique em um país para explorar suas embalagens e tradições
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {countries.map((country) => (
          <div
            key={country.name}
            onClick={() => onCountrySelect(country.code)}
            className={`flex items-center space-x-3 px-5 py-2 border shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md group cursor-pointer ${
              selectedCountry === country.code
                ? 'bg-primary text-white border-primary'
                : 'bg-white border-[#ECECEC] hover:bg-gray-50'
            }`}
            style={{ borderRadius: '4px' }}
          >
            <Image 
              src={`https://flagcdn.com/w40/${country.code}.png`}
              width={28} 
              height={18} 
              alt={country.alt}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className={`text-base font-medium transition-colors duration-300 ${
              selectedCountry === country.code
                ? 'text-white'
                : 'text-gray-700 group-hover:text-gray-900'
            }`}>
              {country.name}
            </span>
            
            {/* Indicator for selected country */}
            {selectedCountry === country.code && (
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Clear selection button */}
      {selectedCountry && (
        <div className="text-center mt-6">
          <button
            onClick={() => onCountrySelect('')}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm underline"
          >
            Limpar seleção
          </button>
        </div>
      )}
    </section>
  );
};

export default CountriesSection;
