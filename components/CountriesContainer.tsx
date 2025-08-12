// components/CountriesContainer.tsx
import CountrySection, { type CountryData } from './CountrySection';

interface CountriesContainerProps {
  volume: 'volume1' | 'volume2';
  selectedCountry: string;
}

const CountriesContainer = ({ volume, selectedCountry }: CountriesContainerProps) => {
  // Debug
  console.log('🔍 CountriesContainer DEBUG:');
  console.log('   Volume:', volume);
  console.log('   Selected Country:', selectedCountry);
  
  // Volume 1 Countries
  const volume1Countries: CountryData[] = [
    {
      id: "alemanha",
      code: "de",
      letter: "A",
      countryName: "lemanha",
      fullCountryName: "EUROPA",
      bgImage: "/countries/alemanha-bg.png",
      letterImage: "/countries/alemanha-letter.png",
      title: "Precisão alemã em cada embalagem que conta história",
      description: "A Alemanha combina tradição milenar com inovação tecnológica em suas embalagens. Aqui, a engenharia de precisão encontra o design funcional, criando produtos que são referência mundial em qualidade e durabilidade.",
      highlights: [
        "Qualidade Premium: Haribo desde 1920, criando gomas que encantam gerações",
        "Tradição Cervejeira: Löwenbräu (1383) e Augustiner (1328) preservam receitas ancestrais",
        "Design Funcional: Forma sempre segue função - minimalismo eficiente que inspira",
        "Sustentabilidade: Pioneiros em embalagens recicláveis e biodegradáveis"
      ],
      insight: "Na Alemanha, embalagens não são apenas recipientes - são manifestos de precisão que elevam produtos simples ao status de excelência mundial.",
      productImages: [
        "/countries/alemanha-haribo.png",
        "/countries/alemanha-ritter.png",
        "/countries/alemanha-cerveja.png",
        "/countries/alemanha-mostarda.png"
      ]
    },
    {
      id: "dinamarca",
      code: "dk",
      letter: "D",
      countryName: "inamarca",
      fullCountryName: "EUROPA",
      bgImage: "/countries/dinamarca-bg.png",
      title: "Design hygge que aquece corações ao redor do mundo",
      description: "A Dinamarca é sinônimo de hygge - conceito de aconchego que se reflete em suas embalagens minimalistas e funcionais.",
      highlights: [
        "Hygge Philosophy: Conceito de aconchego traduzido em design minimalista",
        "LEGO Legacy: Embalagens icônicas que despertam criatividade infantil há décadas",
        "Design Escandinavo: Funcionalidade com estética limpa e atemporal",
        "Sustentabilidade Nórdica: Pioneiros em embalagens eco-conscientes"
      ],
      insight: "Dinamarca: onde hygge vira linguagem visual - simplicidade que toca a alma e desperta o melhor das emoções humanas.",
      productImages: [
        "/countries/dinamarca-lego.png",
        "/countries/dinamarca-cerveja.png",
        "/countries/dinamarca-design.png",
        "/countries/dinamarca-food.png"
      ]
    },
    {
      id: "espanha",
      code: "es",
      letter: "E",
      countryName: "spanha",
      fullCountryName: "EUROPA",
      bgImage: "/countries/espanha-bg.png",
      title: "Paixão mediterrânea que desperta todos os sentidos",
      description: "Embalagens espanholas refletem a rica cultura mediterrânea com cores vibrantes e design emotivo.",
      highlights: [
        "Cores Vibrantes: Paleta mediterrânea que desperta emoções e conta histórias",
        "Azeites Premium: Denominação de origem com design que honra tradições milenares",
        "Tradição Familiar: Marcas centenárias passadas entre gerações com orgulho",
        "Design Emotivo: Cada embalagem conecta profundamente com tradições locais"
      ],
      insight: "Espanha: onde tradição familiar vira linguagem visual apaixonada - cada embalagem é uma declaração de amor à cultura mediterrânea.",
      productImages: [
        "/countries/espanha-azeite.png",
        "/countries/espanha-vinho.png",
        "/countries/espanha-jamon.png",
        "/countries/espanha-doces.png"
      ]
    },
    {
      id: "franca",
      code: "fr",
      letter: "F",
      countryName: "rança",
      fullCountryName: "EUROPA",
      bgImage: "e.png",
      title: "Art de vivre francês em cada detalhe refinado",
      description: "A França eleva embalagens ao status de arte. Aqui, cada produto é uma experiência sensorial.",
      highlights: [
        "Gastronomia Elevada: Tradição culinária refletida em design refinado e sofisticado",
        "Patrimônio Cultural: Marcas que são ícones nacionais e símbolos de excelência",
        "Luxo Acessível: Sofisticação francesa em produtos do dia a dia",
        "Art de Vivre: Embalagens como expressão autêntica do estilo de vida francês"
      ],
      insight: "França: onde embalagem vira arte e tradição gastronômica se torna identidade visual que conquista corações mundialmente.",
      productImages: [
        "/countries/franca-queijo.png",
        "/countries/franca-vinho.png",
        "/countries/franca-perfume.png",
        "/countries/franca-doces.png"
      ]
    },
    {
      id: "holanda",
      code: "nl",
      letter: "h",
      countryName: "olanda",
      fullCountryName: "EUROPA",
      bgImage: ".png",
      title: "Art de vivre francês em cada detalhe refinado",
      description: "A França eleva embalagens ao status de arte. Aqui, cada produto é uma experiência sensorial.",
      highlights: [
        "Gastronomia Elevada: Tradição culinária refletida em design refinado e sofisticado",
        "Patrimônio Cultural: Marcas que são ícones nacionais e símbolos de excelência",
        "Luxo Acessível: Sofisticação francesa em produtos do dia a dia",
        "Art de Vivre: Embalagens como expressão autêntica do estilo de vida francês"
      ],
      insight: "França: onde embalagem vira arte e tradição gastronômica se torna identidade visual que conquista corações mundialmente.",
      productImages: [
        "/countries/franca-queijo.png",
        "/countries/franca-vinho.png",
        "/countries/franca-perfume.png",
        "/countries/franca-doces.png"
      ]
    },
    {
      id: "noruega",
      code: "no",
      letter: "n",
      countryName: "oruega",
      fullCountryName: "EUROPA",
      bgImage: "e.png",
      title: "Art de vivre francês em cada detalhe refinado",
      description: "A França eleva embalagens ao status de arte. Aqui, cada produto é uma experiência sensorial.",
      highlights: [
        "Gastronomia Elevada: Tradição culinária refletida em design refinado e sofisticado",
        "Patrimônio Cultural: Marcas que são ícones nacionais e símbolos de excelência",
        "Luxo Acessível: Sofisticação francesa em produtos do dia a dia",
        "Art de Vivre: Embalagens como expressão autêntica do estilo de vida francês"
      ],
      insight: "França: onde embalagem vira arte e tradição gastronômica se torna identidade visual que conquista corações mundialmente.",
      productImages: [
        "/countries/franca-queijo.png",
        "/countries/franca-vinho.png",
        "/countries/franca-perfume.png",
        "/countries/franca-doces.png"
      ]
    },
    {
      id: "suecia",
      code: "se",
      letter: "s",
      countryName: "uécia",
      fullCountryName: "EUROPA",
      bgImage: "e.png",
      title: "Art de vivre francês em cada detalhe refinado",
      description: "A França eleva embalagens ao status de arte. Aqui, cada produto é uma experiência sensorial.",
      highlights: [
        "Gastronomia Elevada: Tradição culinária refletida em design refinado e sofisticado",
        "Patrimônio Cultural: Marcas que são ícones nacionais e símbolos de excelência",
        "Luxo Acessível: Sofisticação francesa em produtos do dia a dia",
        "Art de Vivre: Embalagens como expressão autêntica do estilo de vida francês"
      ],
      insight: "França: onde embalagem vira arte e tradição gastronômica se torna identidade visual que conquista corações mundialmente.",
      productImages: [
        "/countries/franca-queijo.png",
        "/countries/franca-vinho.png",
        "/countries/franca-perfume.png",
        "/countries/franca-doces.png"
      ]
    }
  ];

  // Volume 2 Countries  
  const volume2Countries: CountryData[] = [
    {
      id: "belgica",
      code: "be",
      letter: "B",
      countryName: "élgica",
      fullCountryName: "EUROPA",
      bgImage: "/b.png",
      title: "Chocolates que são obras de arte e cervejas patrimônio da humanidade",
      description: "Godiva (1926) e Leonidas (1913, 110 anos, 1.200 lojas) criam latas decorativas que viram recordações. Tradição cervejeira é patrimônio UNESCO desde 2016. Lotus Biscoff (1932) mantém receita intacta por décadas.",
      highlights: [
        "Chocolates Legendários: Godiva, Leonidas, Côte d'Or (140 anos)",
        "Cervejas Únicas: Triplas filtradas, sabor cereja exclusivo",
        "Design Icônico: Latas que remetem à Grand Place de Bruxelas",
        "Tradição Preservada: Biscoff com sabor inconfundível"
      ],
      insight: "Bélgica: onde artesania familiar vira linguagem de luxo acessível - cada bite é uma viagem pelos sabores da tradição europeia.",
      productImages: [
        "/bg-1.png",
        "/bg-2.png",
        "/bg-3.png",
        "/bg-4.png"
      ]
    },
    {
      id: "escocia",
      code: "gb-sct",
      letter: "E",
      countryName: "scócia",
      fullCountryName: "EUROPA",
      bgImage: "e.png",
      title: "Distintivo da Rainha e tartã que conta histórias de clãs",
      description: "Walkers recebeu distintivo da Majestade (1898) e estampa como troféu. Johnnie Walker Blue Label inovou com garrafa azulada mais estreita. Tartã (xadrez escocês) representa diferentes clãs em embalagens autênticas.",
      highlights: [
        "Reconhecimento Real: Distintivo da Rainha nas embalagens",
        "Tradições Centenárias: Tunnock's (1890), Mrs Tilly's",
        "Uísques Lendários: Chivas, Glenfiddich, Johnnie Walker",
        "Storytelling Visual: Fish and Chips com fotos históricas"
      ],
      insight: "França: onde embalagem vira arte e tradição gastronômica se torna identidade visual que conquista corações mundialmente.",
      productImages: [
        "/es-1.png",
        "/es-2.png",
        "/es-3.png",
        "/es-4.png"
      ]
    },
    {
      id: "portugal",
      code: "pt",
      letter: "P",
      countryName: "ortugal",
      fullCountryName: "EUROPA",
      bgImage: "p.png",
      title: "Gallo desde 1919 e azulejos que contam histórias de séculos",
      description: "Azeite Gallo nasceu em 1919 com Victor Guedes e estampa PORTUGAL com orgulho. Azulejos portugueses decoram embalagens como barrado tradicional. Açores garantem pescados certificados pela natureza.",
      highlights: [
        "Tradição Secular: Gallo com edições comemorativas centenárias",
        "Arte Portuguesa: Azulejos em embalagens turísticas",
        "Qualidade Garantida: Açores com lema de certificação natural",
        "Histórias Visuais: Ouro da Terra conta trajetória desde medieval"
      ],
      insight: "Portugal: onde navegações históricas viram jornadas de sabor - tradição marítima que se renova em cada embalagem.",
      productImages: [
        "/pt-1.png",
        "/pt-2.png",
        "/pt-3.png",
        "/pt-4.png",
      ]
    },
    {
      id: "finlandia",
      code: "fi",
      letter: "f",
      countryName: "inlândia",
      fullCountryName: "EUROPA",
      bgImage: "f.png",
      title: "Fazer Blue desde 1922 e família Moomin que encanta gerações",
      description: "Karl Fazer Blue é símbolo da herança finlandesa desde 1922. Família Moomin (criação sueco-finlandesa) aparece em iogurtes, chocolates e biscoitos. Design minimalista reflete filosofia de vida que busca simplicidade",
      highlights: [
        "Chocolate Icônico: Fazer Blue com 18 variações",
        "Personagens Queridos: Moomin em embalagens que viram afeto",
        "Sustentabilidade: Selo do Cisne Finlandês em produtos",
        "Inovação Prática: Stand-up pouch de papel + polietileno"
      ],
      insight: "Portugal: onde navegações históricas viram jornadas de sabor - tradição marítima que se renova em cada embalagem.",
      productImages: [
        "/fl-1.png",
        "/fl-2.png",
        "/fl-3.png",
        "/fl-4.png"
      ]
    },
      {
      id: "grecia",
      code: "gr",
      letter: "g",
      countryName: "récia",
      fullCountryName: "EUROPA",
      bgImage: "g.png",
      title: "Azeite é símbolo de paz e riqueza desde tempos antigos",
      description: "Azeite carrega significados profundos - símbolo de riqueza e paz desde antiguidade. Aheleon da Ahaean Land criou garrafa de porcelana que vira objeto de decoração. EPSA centenária mantém garrafa texturizada desde 1940.",
      highlights: [
        "Design Histórico: Cores azul (mar Egeu) e branco (Santorini)",
        "Tradição Preservada: EPSA com garrafa inalterada + versão BIO",
        "Arte em Embalagem: Aheleon como obra de arte decorativa",
        "Símbolos Ancestrais: Olho grego, oliveiras, pomba da paz"
      ],
      insight: "Portugal: onde navegações históricas viram jornadas de sabor - tradição marítima que se renova em cada embalagem.",
      productImages: [
        "/gr-1.png",
        "/gr-2.png",
        "/gr-3.png",
        "/gr-4.png",
      ]
    },
      {
      id: "rlanda",
      code: "ie",
      letter: "i",
      countryName: "rlanda",
      fullCountryName: "EUROPA",
      bgImage: "i.png",
      title: "Kerrygold exporta pedaço da Irlanda desde 1961",
      description: "Kerrygold começou exportação em 1961 - nome escolhido em concurso público da comunidade. Baileys é licor mais vendido do mundo. Sheridan's com duas garrafas separadas cria experiência teatral.",
      highlights: [
        "Tradição Familiar: Kerry do sudoeste irlandês",
        "Design Pensado: Eco-design com rótulo facilmente separável",
        "Símbolos Célticos: Harpa da Guinness, nós e espirais eternas",
        "Storytelling: Cada embalagem carrega história e mitologia"
      ],
      insight: "Portugal: onde navegações históricas viram jornadas de sabor - tradição marítima que se renova em cada embalagem.",
      productImages: [
        "/ir-1.png",
        "/ir-2.png",
        "/ir-3.png",
        "/ir-4.png",
      ]
    },
    {
      id: "italia",
      code: "it", 
      letter: "I",
      countryName: "tália",
      fullCountryName: "EUROPA",
      bgImage: "i-2.png",
      title: "Bella vita italiana que conquista corações globais",
      description: "A Itália é berço do design e da gastronomia mundial.",
      highlights: [
        "Design Icônico: Estética italiana reconhecida e admirada mundialmente",
        "Tradição Nonna: Receitas passadas através de gerações com amor infinito",
        "Pasta Culture: Embalagens que celebram a cultura italiana da massa artesanal",
        "Qualidade Premium: Ingredientes selecionados e processos tradicionais"
      ],
      insight: "Itália: onde design vira paixão e tradição familiar conquista o mundo - bellezza em cada produto que toca a alma.",
      productImages: [
        "/it-1.png",
        "/it-2.png",
        "/it-3.png",
        "/it-4.png",
      ]
    }
  ];

  const countries = volume === 'volume1' ? volume1Countries : volume2Countries;
  
  console.log('   Countries available:', countries.map(c => `${c.code} (${c.fullCountryName})`));
  
  // Find selected country
  const selectedCountryData = countries.find(country => country.code === selectedCountry);
  
  console.log('   Selected country data:', selectedCountryData ? `Found: ${selectedCountryData.fullCountryName}` : 'NOT FOUND');
  
  if (!selectedCountryData) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            🚧 País em desenvolvimento
          </h2>
          <p className="text-yellow-700 mb-4">
            O país <strong>"{selectedCountry}"</strong> ainda não foi implementado no {volume}.
          </p>
          <div className="text-sm text-yellow-600">
            <p><strong>Volume atual:</strong> {volume}</p>
            <p><strong>Países disponíveis:</strong> {countries.map(c => c.code).join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <CountrySection 
      country={selectedCountryData} 
      index={0}
    />
  );
};

export default CountriesContainer;