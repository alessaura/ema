// components/InteractiveCollectionSection.tsx (versão atualizada)
'use client';

import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';

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

  const volumesData: Record<string, VolumeData> = {
    volume1: {
      id: 'volume1',
      title: 'Embalagens Mundo Afora 1',
      mainText: 'Já viajei o mundo afora. Visitei e revisitei mais de oitenta países. A cada viagem uma descoberta sobre a história e a cultura de um povo por meio das embalagens. Essa narrativa é desvendada em detalhes através de fotografias, tipografias, ilustrações, personagens, materiais, cores e formatos. A riqueza de um povo está embalada nas gôndolas ao alcance dos consumidores.',
      cardText: 'A ideia do livro é proporcionar essa viagem pela cultura do mundo, transportando os leitores para a história de vários países sob a perspectiva das embalagens. O primeiro livro desta coleção traz embalagens do Brasil, divididas em suas cinco regiões: Sudeste, Sul, Nordeste, Centro-Oeste e Norte. Também apresenta embalagens de sete países da Europa Ocidental: Alemanha, Dinamarca, Espanha, França, Holanda, Noruega e Suécia.',
      mockupImage: '/ema-1-mockup.png'
    },
    volume2: {
      id: 'volume2',
      title: 'Embalagens Mundo Afora 2',
      mainText: 'A história da embalagem no mundo e do design na criação e desenvolvimento deste item traduz a evolução da humanidade e o crescimento dos países. De mero invólucro, a embalagem evoluiu em design e conceito e assumiu a expressão de várias culturas. Designers de todos os continentes – África, Europa, Ásia, América e Oceania – agregam seus costumes, hábitos de consumo e tradições às características primordiais de proteção das embalagens, fazendo delas objetos únicos em aplicação e design.',
      cardText: 'Os diferentes pontos de vendas, como supermercados, lojas de conveniência, drugstores, lojas de moda e outros, são importantes territórios para descoberta da cultura de um povo e suas tendências sob a perspectiva da embalagem. Além de permitirem explorar os hábitos de alimentação e preferência de sabores.',
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

            {/* Volume Selection and Logo */}
            <div className="flex items-start justify-between gap-8">
              <div className="flex flex-col space-y-4 flex-1">
                <div className="flex items-center space-x-3 group">
                  <Checkbox
                    id="book1"
                    checked={selectedVolume === 'volume1'}
                    onCheckedChange={() => handleVolumeChange('volume1')}
                    className="border-primary text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white transition-all duration-300 group-hover:scale-110"
                  />
                  <label
                    htmlFor="book1"
                    className="text-lg font-medium leading-none text-gray-700 cursor-pointer transition-all duration-300 group-hover:text-primary"
                  >
                    Embalagens Mundo Afora 1
                  </label>
                </div>

                <div className="flex items-center space-x-3 group">
                  <Checkbox
                    id="book2"
                    checked={selectedVolume === 'volume2'}
                    onCheckedChange={() => handleVolumeChange('volume2')}
                    className="border-primary text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white transition-all duration-300 group-hover:scale-110"
                  />
                  <label
                    htmlFor="book2"
                    className="text-lg font-medium leading-none text-gray-700 cursor-pointer transition-all duration-300 group-hover:text-primary"
                  >
                    Embalagens Mundo Afora 2
                  </label>
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
                  Assunta Napolitano Camilo
                </p>
                <p className="text-base text-gray-600">
                  Diretora da FUTUREPACK
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