// components/RegionsContainer.tsx
import RegionSection, { type RegionData } from './RegionSection';

const RegionsContainer = () => {
  const regionsData: RegionData[] = [
    {
      id: "sudeste",
      letter: "S",
      regionName: "udeste", 
      bgImage: "/sudeste.png",
      title: "Onde goiabada cascão vira patrimônio e cachaça conta história",
      description: "O Sudeste não é apenas motor econômico - é guardião das tradições que definem o Brasil. Aqui, a goiabada cascão Dona Zélia (fundada em 1950) é patrimônio cultural e imaterial de Ponte Nova, enquanto cachaças icônicas como Salinas e Boazinha levam o sabor mineiro para o mundo.",
      highlights: [
        "Romeu e Julieta: Goiabada + queijo = combinação que encanta paladares",
        "Cachaças Premiadas: Salinas, Boazinha e 51 Reserva Especial", 
        "Tradição que Viaja: Do pão de açúcar carioca aos doces mineiros",
        "Natureza em Embalagens: Granado, Phebo e Giovanna Baby"
      ],
      insight: "No Sudeste, embalagens não apenas protegem - elas preservam patrimônios culturais reconhecidos oficialmente.",
      productImages: [
        "/sudeste-queijo.jpg",
        "/sudeste-granado.jpg", 
        "/sudeste-cachaca.jpg",
        "/sudeste-phebo.jpg",
        "/sudeste-goiaba.jpg"
      ]
    },
    {
      id: "sul",
      letter: "S",
      regionName: "ul",
      bgImage: "/sul.png", 
      title: "Tradições alemãs e italianas que viraram brasilidade",
      description: "Terra onde erva-mate é ritual e polenta Fritz carrega nome alemão com personagens tradicionais. Aqui o chimarrão brasileiro nasce, e a serra gaúcha produz vinhos que competem mundialmente.",
      highlights: [
        "Erva-mate: Jacutinga, Yacuy - 70% da produção nacional do Paraná",
        "Expressão Regional: 'BAHH' adotada pelo DIA para linha de biscoitos",
        "Influência Europeia: Polenta Fritz, mostardas Oderich, banha de porco",
        "Inovação em Tradição: Limonada Suíça, vinhos da serra gaúcha"
      ],
      insight: "No Sul, cada embalagem carrega DNA do tempero brasileiro - tradição que não envelhece, apenas amadurece.",
      productImages: [
        "/sul-mate.jpg",
        "/sul-polenta.jpg",
        "/sul-vinho.jpg", 
        "/sul-mostarda.jpg",
        "/sul-biscoito.jpg"
      ]
    },
    {
      id: "nordeste", 
      letter: "N",
      regionName: "ordeste",
      bgImage: "/nordeste.png",
      title: "Patrimônios UNESCO e cheiros que conquistam o mundo",
      description: "Bolo de rolo é patrimônio cultural de Pernambuco. Cuscuz foi declarado Patrimônio Imaterial da Humanidade pela UNESCO em 2020. Nordeste tem apreço por cheiros e cores fortes.",
      highlights: [
        "Patrimônio Oficial: Bolo de rolo (1970) e cuscuz UNESCO",
        "Tradições Centenárias: Casa dos Frios, flocão Vitamilho", 
        "Identidade Aromática: Avatim, Tia Sônia 'Colheita das Alegrias'",
        "Cores Vibrantes: Guaraná Jesus rosa/azul, São Geraldo caju"
      ],
      insight: "Região com maior potencial inexplorado para cajuína e temperos únicos que o mundo cobiça.",
      productImages: [
        "/nordeste-bolo.jpg",
        "/nordeste-cuscuz.jpg",
        "/nordeste-guarana.jpg",
        "/nordeste-cajuina.jpg", 
        "/nordeste-tempero.jpg"
      ]
    },
    {
      id: "centro-oeste",
      letter: "C", 
      regionName: "entro-oeste",
      bgImage: "/centro.png",
      title: "Do cerrado para sua mesa: segunda maior região, identidade única",
      description: "Cerrado é o segundo maior bioma brasileiro. Economia agropecuária fornece base alimentar nacional. Erva Baleeira tem propriedades terapêuticas únicas.",
      highlights: [
        "Base Alimentar: Extensas plantações de feijão, milho e soja",
        "Medicina Natural: Produtos à base de ervas com grande popularidade",
        "Tradições Locais: Farofa típica de Goiás, rosquinhas de coco", 
        "Agronegócio Potente: Região que alimenta o Brasil e o mundo"
      ],
      insight: "Centro-Oeste: única região que pode criar identidade do zero - território livre para inovar sem amarras do passado.",
      productImages: [
        "/centro-oeste-soja.jpg",
        "/centro-oeste-erva.jpg",
        "/centro-oeste-farofa.jpg",
        "/centro-oeste-coco.jpg",
        "/centro-oeste-milho.jpg"
      ]
    },
    {
      id: "norte",
      letter: "N",
      regionName: "orte", 
      bgImage: "/norte.png",
      title: "Café de açaí e chocolates que levam a Amazônia para o mundo",
      description: "Raízes de Açaí inova com café feito do caroço da fruta. Chocolates Warabu usam cacau amazônico com identidade regional. Maior biodiversidade do planeta.",
      highlights: [
        "Café de Açaí: Startup inovadora na bioeconomia",
        "Chocolates Regionais: Warabu com sabores da Amazônia",
        "Ingredientes Exclusivos: Cumaru, puxuri, guaraná",
        "Tradições Preservadas: Tucupi Manioca desde 1972"
      ],
      insight: "Norte é mistério inexplorado: maior biodiversidade com cultura amazônica pouquíssimo aproveitada em design.",
      productImages: [
        "/norte-acai.jpg",
        "/norte-chocolate.jpg", 
        "/norte-guarana.jpg",
        "/norte-tucupi.jpg",
        "/norte-cumaru.jpg"
      ]
    }
  ];

  return (
    <>
      {regionsData.map((region, index) => (
        <RegionSection 
          key={region.id} 
          region={region} 
          index={index}
        />
      ))}
    </>
  );
};

export default RegionsContainer;