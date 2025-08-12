// components/CountryContent.tsx
'use client';

import Image from 'next/image';

interface CountryInfo {
  code: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  insight: string;
  productImages: string[];
  bgImage?: string;
}

interface CountryContentProps {
  countryCode: string;
  volume: 'volume1' | 'volume2';
}

const CountryContent = ({ countryCode, volume }: CountryContentProps) => {
  // Estrutura de dados para os países - você pode popular com dados reais
  const countriesData: Record<string, CountryInfo> = {
    // === VOLUME 1 COUNTRIES ===
    de: {
      code: 'de',
      name: 'Alemanha',
      title: 'Precisão alemã em cada embalagem',
      description: 'A Alemanha combina tradição milenar com inovação tecnológica em suas embalagens. Aqui, a engenharia de precisão encontra o design funcional, criando produtos que são referência mundial em qualidade e durabilidade.',
      highlights: [
        'Qualidade Premium: Haribo desde 1920, Ritter Sport desde 1912',
        'Sustentabilidade: Pioneiros em embalagens recicláveis e biodegradáveis',
        'Design Funcional: Forma sempre segue função - minimalismo eficiente',
        'Tradição Cervejeira: Löwenbräu (1383), Augustiner (1328)'
      ],
      insight: 'Alemanha: onde engenharia de precisão encontra design minimalista - tradição que não se quebra.',
      productImages: [
        '/countries/de-haribo.png',
        '/countries/de-ritter.png',
        '/countries/de-beer.png',
        '/countries/de-food.png'
      ],
      bgImage: '/countries/de-bg.png'
    },

    es: {
      code: 'es',
      name: 'Espanha',
      title: 'Paixão mediterrânea em cores vibrantes',
      description: 'Embalagens espanholas refletem a rica cultura mediterrânea com cores vibrantes e design emotivo. Tradições familiares centenárias se misturam com inovação moderna, criando identidades visuais apaixonantes.',
      highlights: [
        'Cores Vibrantes: Paleta mediterrânea que desperta emoções',
        'Tradição Familiar: Marcas centenárias passadas entre gerações',
        'Azeites Premium: Denominação de origem com design diferenciado',
        'Design Emotivo: Conecta profundamente com tradições locais'
      ],
      insight: 'Espanha: onde tradição familiar vira linguagem visual apaixonada - emoção em cada embalagem.',
      productImages: [
        '/countries/es-olive.png',
        '/countries/es-wine.png',
        '/countries/es-food.png',
        '/countries/es-sweets.png'
      ],
      bgImage: '/countries/es-bg.png'
    },

    fr: {
      code: 'fr',
      name: 'França',
      title: 'Elegância francesa em cada detalhe',
      description: 'A França eleva embalagens ao status de arte. Aqui, cada produto é uma experiência sensorial, onde design sofisticado encontra tradição gastronômica milenar.',
      highlights: [
        'Art de Vivre: Embalagens como expressão do estilo de vida francês',
        'Gastronomia: Tradição culinária refletida em design refinado',
        'Luxo Acessível: Sofisticação em produtos do dia a dia',
        'Patrimônio Cultural: Marcas que são ícones nacionais'
      ],
      insight: 'França: onde embalagem vira arte e tradição gastronômica se torna identidade visual.',
      productImages: [
        '/countries/fr-cheese.png',
        '/countries/fr-wine.png',
        '/countries/fr-perfume.png',
        '/countries/fr-pastry.png'
      ],
      bgImage: '/countries/fr-bg.png'
    },

    // === VOLUME 2 COUNTRIES ===
    be: {
      code: 'be',
      name: 'Bélgica',
      title: 'Chocolate belga e tradição artesanal',
      description: 'A Bélgica é sinônimo de excelência em chocolates e cervejas artesanais. Suas embalagens refletem o cuidado artesanal e a tradição familiar que caracterizam os produtos belgas.',
      highlights: [
        'Chocolates Premium: Godiva, Leonidas - tradição desde o século XIX',
        'Cervejas Trapistas: Embalagens que preservam tradições monásticas',
        'Artesania: Cada produto conta uma história familiar',
        'Design Refinado: Simplicidade que destaca a qualidade do conteúdo'
      ],
      insight: 'Bélgica: onde artesania familiar vira linguagem de luxo acessível - tradição em cada bite.',
      productImages: [
        '/countries/be-chocolate.png',
        '/countries/be-beer.png',
        '/countries/be-waffles.png',
        '/countries/be-pralines.png'
      ],
      bgImage: '/countries/be-bg.png'
    },

    pt: {
      code: 'pt',
      name: 'Portugal',
      title: 'Tradições lusitanas em design contemporâneo',
      description: 'Portugal combina tradições seculares com design contemporâneo. Suas embalagens refletem a rica história marítima e gastronômica portuguesa, com um toque moderno e sofisticado.',
      highlights: [
        'Conservas Gourmet: Tradição das conservas portuguesas reinventada',
        'Vinhos do Porto: Embalagens que honram séculos de tradição',
        'Azulejos: Padrões tradicionais adaptados para embalagens modernas',
        'Mar e Terra: Design que celebra a riqueza natural portuguesa'
      ],
      insight: 'Portugal: onde navegações históricas viram jornadas de sabor - tradição que se renova.',
      productImages: [
        '/countries/pt-wine.png',
        '/countries/pt-conservas.png',
        '/countries/pt-olive.png',
        '/countries/pt-pastry.png'
      ],
      bgImage: '/countries/pt-bg.png'
    },

    it: {
      code: 'it',
      name: 'Itália',
      title: 'Design italiano e tradição gastronômica',
      description: 'A Itália é berço do design e da gastronomia mundial. Suas embalagens combinam estética refinada com tradições familiares centenárias, criando produtos que são ícones globais.',
      highlights: [
        'Design Icônico: Estética italiana reconhecida mundialmente',
        'Tradição Familiar: Receitas passadas através de gerações',
        'Qualidade Premium: Ingredientes selecionados e processos artesanais',
        'Pasta Culture: Embalagens que celebram a cultura da massa'
      ],
      insight: 'Itália: onde design vira paixão e tradição familiar conquista o mundo - bellezza em cada produto.',
      productImages: [
        '/countries/it-pasta.png',
        '/countries/it-wine.png',
        '/countries/it-cheese.png',
        '/countries/it-coffee.png'
      ],
      bgImage: '/countries/it-bg.png'
    }

    // Adicione outros países conforme necessário
  };

  const country = countriesData[countryCode];

  if (!country) {
    return (
      <section className="container mx-auto px-6 py-16 md:px-12 lg:px-20">
        <div className="text-center bg-gray-50 py-20 rounded-lg">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏗️</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Em breve: {countryCode}
            </h2>
            <p className="text-gray-600 text-lg">
              Estamos preparando o conteúdo sobre este país. <br />
              Em breve você poderá explorar suas tradições e embalagens únicas.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Volume {volume === 'volume1' ? '1' : '2'} • Conteúdo em desenvolvimento
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      {country.bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={country.bgImage}
            alt={`Background ${country.name}`}
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-16 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Image 
              src={`https://flagcdn.com/w40/${country.code}.png`}
              width={32} 
              height={24} 
              alt={`${country.name} flag`}
              className="rounded-sm shadow-sm"
            />
            <span className="text-xl font-medium text-gray-600">
              Volume {volume === 'volume1' ? '1' : '2'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {country.title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {country.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Highlights */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Destaques Culturais
            </h2>
            <div className="space-y-4">
              {country.highlights.map((highlight, index) => {
                const [title, description] = highlight.split(': ');
                return (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Images */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Produtos Tradicionais
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {country.productImages.map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
                  <Image
                    src={image}
                    alt={`Produto ${index + 1} da ${country.name}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight */}
        <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Insight Cultural</h2>
            <p className="text-xl leading-relaxed italic">
              "{country.insight}"
            </p>
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Explore outros países do Volume {volume === 'volume1' ? '1' : '2'} ou mude para o {volume === 'volume1' ? 'Volume 2' : 'Volume 1'} na seção acima
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryContent;