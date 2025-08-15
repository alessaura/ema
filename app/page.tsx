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
import Footer  from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';

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



        {/* Country Flags Section */}
        <CountriesSection
          selectedVolume={appState.selectedVolume}
          selectedCountry={appState.selectedCountry}
          onCountrySelect={handleCountrySelect}
          onVolumeChange={handleVolumeChange}
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

      <SponsorsSection selectedVolume={appState.selectedVolume} />
      </main>

      {/* Footer */}
      <Footer> </Footer>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
