// components/InteractiveCollectionSection.tsx (versão atualizada)
'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/app/context/LanguageContext';

interface VolumeData {
  id: 'volume1' | 'volume2';
  title: string;
  mainText: string;
  cardText: string;
  mockupImage: string;
}

interface InteractiveCollectionSectionProps {
  selectedVolume: 'volume1' | 'volume2';
  onVolumeChange: (volume: 'volume1' | 'volume2') => void;
}

const InteractiveCollectionSection = ({ 
  selectedVolume, 
  onVolumeChange 
}: InteractiveCollectionSectionProps) => {
  const { t, language } = useLanguage();

  const volumesData: Record<string, VolumeData> = {
    volume1: {
      id: 'volume1',
      title: t('collection.volume1'),
      mainText: language === 'pt' 
        ? 'Já viajei o mundo afora. Visitei e revisitei mais de oitenta países. A cada viagem uma descoberta sobre a história e a cultura de um povo por meio das embalagens. Essa narrativa é desvendada em detalhes através de fotografias, tipografias, ilustrações, personagens, materiais, cores e formatos. A riqueza de um povo está embalada nas gôndolas ao alcance dos consumidores.'
        : 'I have traveled the world over. I have visited and revisited more than eighty countries. Each trip a discovery about the history and culture of a people through packaging. This narrative is unveiled in detail through photographs, typography, illustrations, characters, materials, colors and formats. The richness of a people is packaged on the shelves within the reach of consumers.',
      cardText: language === 'pt'
        ? 'A ideia do livro é proporcionar essa viagem pela cultura do mundo, transportando os leitores para a história de vários países sob a perspectiva das embalagens. O primeiro livro desta coleção traz embalagens do Brasil, divididas em suas cinco regiões: Sudeste, Sul, Nordeste, Centro-Oeste e Norte. Também apresenta embalagens de sete países da Europa Ocidental: Alemanha, Dinamarca, Espanha, França, Holanda, Noruega e Suécia.'
        : 'The idea of the book is to provide this journey through world culture, transporting readers to the history of various countries from the perspective of packaging. The first book in this collection features packaging from Brazil, divided into its five regions: Southeast, South, Northeast, Midwest and North. It also features packaging from seven Western European countries: Germany, Denmark, Spain, France, Holland, Norway and Sweden.',
      mockupImage: '/ema-1-mockup.png'
    },
    volume2: {
      id: 'volume2',
      title: t('collection.volume2'),
      mainText: language === 'pt'
        ? 'A história da embalagem no mundo e do design na criação e desenvolvimento deste item traduz a evolução da humanidade e o crescimento dos países. De mero invólucro, a embalagem evoluiu em design e conceito e assumiu a expressão de várias culturas. Designers de todos os continentes – África, Europa, Ásia, América e Oceania – agregam seus costumes, hábitos de consumo e tradições às características primordiais de proteção das embalagens, fazendo delas objetos únicos em aplicação e design.'
        : 'The history of packaging in the world and design in the creation and development of this item translates the evolution of humanity and the growth of countries. From mere wrapping, packaging has evolved in design and concept and has taken on the expression of various cultures. Designers from all continents – Africa, Europe, Asia, America and Oceania – add their customs, consumption habits and traditions to the primary protection characteristics of packaging, making them unique objects in application and design.',
      cardText: language === 'pt'
        ? 'Os diferentes pontos de vendas, como supermercados, lojas de conveniência, drugstores, lojas de moda e outros, são importantes territórios para descoberta da cultura de um povo e suas tendências sob a perspectiva da embalagem. Além de permitirem explorar os hábitos de alimentação e preferência de sabores.'
        : 'Different points of sale, such as supermarkets, convenience stores, drugstores, fashion stores and others, are important territories for discovering a people\'s culture and trends from the packaging perspective. In addition to allowing you to explore eating habits and flavor preferences.',
      mockupImage: '/ema-2-mockup.png'
    }
  };

  const handleVolumeChange = (volumeId: 'volume1' | 'volume2') => {
    onVolumeChange(volumeId);
  };

  const currentVolume = volumesData[selectedVolume];

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Dynamic Title */}
        <div className="mb-12 text-center overflow-hidden">
          <h2 
            key={currentVolume.title}
            className="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 animate-fadeIn"
          >
            {currentVolume.title}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-24 items-start">
          <div className="space-y-8">
            {/* Main Text */}
            <div className="min-h-[200px] flex items-start">
              <p 
                key={currentVolume.mainText}
                className="text-xl leading-relaxed text-gray-700 animate-fadeIn"
              >
                {currentVolume.mainText}
              </p>
            </div>

            {/* Volume Selection Tabs and Logo */}
            <div className="flex items-start justify-between gap-8">
              <div className="flex flex-col space-y-6 flex-1">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => handleVolumeChange('volume1')}
                    className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 ${
                      selectedVolume === 'volume1'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                    }`}
                  >
                    {t('collection.volume1')}
                    {selectedVolume === 'volume1' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-pulse"></div>
                    )}
                  </button>
                  <button
                    onClick={() => handleVolumeChange('volume2')}
                    className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 ${
                      selectedVolume === 'volume2'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                    }`}
                  >
                    {t('collection.volume2')}
                    {selectedVolume === 'volume2' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-pulse"></div>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Image
                  src="/lei-cultura.png"
                  width={140}
                  height={140}
                  alt="Lei de Incentivo à Cultura logo"
                  className="object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Card */}
          <Card className="p-8 shadow-xl rounded-lg border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl">
            <div className="mb-6 flex justify-center">
              <div className="relative group">
                <Image
                  key={currentVolume.mockupImage}
                  src={currentVolume.mockupImage}
                  width={200}
                  height={250}
                  alt={`Mockup do ${currentVolume.title}`}
                  className="object-contain transition-all duration-500 group-hover:scale-105 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>

            <div className="mb-6">
              <p 
                key={currentVolume.cardText}
                className="text-lg text-gray-700 leading-relaxed animate-fadeIn"
              >
                {currentVolume.cardText}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div>
                <p className="font-serif text-2xl italic text-gray-800 mb-1">
                  {t('author')}
                </p>
                <p className="text-base text-gray-600">
                  {t('company')}
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/assunta.png"
                  width={90}
                  height={90}
                  alt="Assunta Napolitano Camilo"
                  className="rounded-full object-cover border-2 border-primary transition-all duration-300 hover:border-primary/70 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 opacity-0 hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>

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
    </section>
  );
};

export default InteractiveCollectionSection;
