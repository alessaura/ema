'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Persistir idioma no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Função de tradução simples
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Traduções centralizadas
const translations = {
  pt: {
    // Header
    'header.home': 'Início',
    'header.about': 'Sobre a coleção',
    'header.collection': 'A coleção',
    'header.sponsors': 'Patrocinadores da Coleção',
    'header.acquire': 'Como adquirir',
    'header.contact': 'Contato',

    // About Section
    'about.subtitle': 'Coleção Editorial',
    'about.title': 'Sobre a Coleção',
    'about.description1': 'é uma coleção editorial criada por Assunta Napolitano Camilo que explora como diferentes culturas expressam sua identidade através do design de embalagens.',
    'about.description2': 'Resultado de viagens por mais de 80 países, o projeto revela que embalagens são verdadeiros espelhos culturais, contando histórias únicas sobre tradições, hábitos e a evolução dos povos.',
    'about.description3': 'Uma jornada antropológica visual que mostra como a riqueza cultural está embalada nas gôndolas ao alcance de todos.',
    'about.stats.countries': 'Países visitados',
    'about.stats.volumes': 'Volumes publicados',
    'about.stats.continents': 'Continentes',
    'about.feature1.title': 'Diversidade Cultural',
    'about.feature1.description': 'Explore como diferentes culturas expressam sua identidade através do design.',
    'about.feature2.title': 'Jornada Global',
    'about.feature2.description': 'Resultado de viagens por mais de 80 países em todos os continentes.',
    'about.feature3.title': 'Antropologia Visual',
    'about.feature3.description': 'Uma narrativa visual que revela a riqueza cultural através das embalagens.',
    'about.badge': 'Coleção Completa',

    // Interactive Collection
    'collection.volume1': 'Embalagens Mundo Afora 1',
    'collection.volume2': 'Embalagens Mundo Afora 2',

    // Countries Section
    'countries.title': 'Países por Volume',
    'countries.volume1': 'Volume 1',
    'countries.volume2': 'Volume 2',
    'countries.subtitle': 'Clique em um país para explorar suas embalagens e tradi��ões',
    'countries.clear': 'Limpar seleção',

    // Country/Region Details
    'details.cultural.highlights': 'Destaques Culturais',
    'details.regional.highlights': 'Destaques Regionais',
    'details.products': 'Produtos & Tradições',
    'details.products.regional': 'Produtos & Tradições Regionais',
    'details.cultural.insight': 'Insight Cultural',
    'details.regional.insight': 'Insight Regional',
    'details.acquire': 'Adquirir Material',

    // Sponsors
    'sponsors.title': 'Patrocinadores',
    'sponsors.realization': 'Realização | Realization',

    // Scroll Indicator
    'scroll.text': 'Role para baixo',

    // General
    'volume': 'Volume',
    'author': 'Assunta Napolitano Camilo',
    'company': 'Diretora da FUTUREPACK',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.about': 'About the collection',
    'header.collection': 'The collection',
    'header.sponsors': 'Collection Sponsors',
    'header.acquire': 'How to acquire',
    'header.contact': 'Contact',

    // About Section
    'about.subtitle': 'Editorial Collection',
    'about.title': 'About the Collection',
    'about.description1': 'is an editorial collection created by Assunta Napolitano Camilo that explores how different cultures express their identity through packaging design.',
    'about.description2': 'Result of travels through more than 80 countries, the project reveals that packaging are true cultural mirrors, telling unique stories about traditions, habits and the evolution of peoples.',
    'about.description3': 'A visual anthropological journey that shows how cultural richness is packaged on the shelves within everyone\'s reach.',
    'about.stats.countries': 'Countries visited',
    'about.stats.volumes': 'Published volumes',
    'about.stats.continents': 'Continents',
    'about.feature1.title': 'Cultural Diversity',
    'about.feature1.description': 'Explore how different cultures express their identity through design.',
    'about.feature2.title': 'Global Journey',
    'about.feature2.description': 'Result of travels through more than 80 countries across all continents.',
    'about.feature3.title': 'Visual Anthropology',
    'about.feature3.description': 'A visual narrative that reveals cultural richness through packaging.',
    'about.badge': 'Complete Collection',

    // Interactive Collection
    'collection.volume1': 'Packaging Around the World 1',
    'collection.volume2': 'Packaging Around the World 2',

    // Countries Section
    'countries.title': 'Countries by Volume',
    'countries.volume1': 'Volume 1',
    'countries.volume2': 'Volume 2',
    'countries.subtitle': 'Click on a country to explore its packaging and traditions',
    'countries.clear': 'Clear selection',

    // Country/Region Details
    'details.cultural.highlights': 'Cultural Highlights',
    'details.regional.highlights': 'Regional Highlights',
    'details.products': 'Products & Traditions',
    'details.products.regional': 'Products & Regional Traditions',
    'details.cultural.insight': 'Cultural Insight',
    'details.regional.insight': 'Regional Insight',
    'details.acquire': 'Acquire Material',

    // Sponsors
    'sponsors.title': 'Sponsors',
    'sponsors.realization': 'Realization | Realização',

    // Scroll Indicator
    'scroll.text': 'Scroll down',

    // General
    'volume': 'Volume',
    'author': 'Assunta Napolitano Camilo',
    'company': 'Director of FUTUREPACK',
  },
};
