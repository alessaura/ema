'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import AboutSection from "@/components/AboutCollectionSection";
import InteractiveCollectionSection from "@/components/InteractiveCollectionSection";
import SponsorsSection from "@/components/SponsorsSection";
import CountriesSection from "@/components/CountriesSection";
import RegionsContainer from '@/components/RegionsContainer';
import CountriesContainer from '@/components/CountriesContainer';

interface AppState {
  selectedVolume: 'volume1' | 'volume2';
  selectedCountry: string | null;
  showRegions: boolean;
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>({
    selectedVolume: 'volume2',
    selectedCountry: null,
    showRegions: false
  });

  const handleVolumeChange = (volume: 'volume1' | 'volume2') => {
    setAppState({
      selectedVolume: volume,
      selectedCountry: null,
      showRegions: false
    });
  };

  const handleCountrySelect = (countryCode: string) => {
    setAppState(prev => ({
      ...prev,
      selectedCountry: countryCode,
      showRegions: countryCode === 'br'
    }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      {/* Header */}
      <Header />
      
      <main className="flex-1">
        <AboutSection />

        {/* Embalagens Mundo Afora Section */}
        <InteractiveCollectionSection
          selectedVolume={appState.selectedVolume}
          onVolumeChange={handleVolumeChange}
        />

        <SponsorsSection />

        {/* Country Flags Section */}
        <CountriesSection
          selectedVolume={appState.selectedVolume}
          selectedCountry={appState.selectedCountry}
          onCountrySelect={handleCountrySelect}
        />

        {/* Content based on selection */}
      {appState.showRegions ? (
        <RegionsContainer />
      ) : appState.selectedCountry && appState.selectedCountry !== 'br' ? (
        <>
          {console.log('DEBUG - Volume:', appState.selectedVolume, 'Country:', appState.selectedCountry)}
          <CountriesContainer 
            volume={appState.selectedVolume}
            selectedCountry={appState.selectedCountry}
          />
        </>
      ) : null}
      </main>

      {/* Footer */}
      <footer className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                Cada região brasileira tem sua história única de embalagens. Baixe o ebook completo e descubra como
                transformar identidade regional em vantagem competitiva global.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-6 py-3 text-lg rounded-lg transition-colors"
                >
                  ePUB Gratuito
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-6 py-3 text-lg rounded-lg transition-colors"
                >
                  Livro Físico Premium
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="epub-free"
                  checked
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                />
                <label htmlFor="epub-free" className="text-base font-medium">
                  ePUB 100% Gratuito
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="accessibility"
                  checked
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                />
                <label htmlFor="accessibility" className="text-base font-medium">
                  Acessibilidade Total (audiodescrição inclusa)
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="full-content"
                  checked
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                />
                <label htmlFor="full-content" className="text-base font-medium">
                  Conteúdo Completo (todos os países e regiões)
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="physical-book"
                  checked
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                />
                <label htmlFor="physical-book" className="text-base font-medium">
                  Livro Físico Disponível (para quem prefere o formato tradicional)
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-10 md:col-span-2 lg:col-span-1 mt-8 lg:mt-0">
              <Image
                src="/images/footer-phone.png"
                width={180}
                height={300}
                alt="Smartphone displaying an audio player"
                className="object-contain"
              />
              <Image
                src="/images/footer-book.png"
                width={220}
                height={300}
                alt="Green book titled Embalagens Mundo Afora"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}