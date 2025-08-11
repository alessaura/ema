'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type VolumeType = 'volume1' | 'volume2';

interface VolumeContextType {
  selectedVolume: VolumeType;
  setSelectedVolume: (volume: VolumeType) => void;
}

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export function VolumeProvider({ children }: { children: ReactNode }) {
  const [selectedVolume, setSelectedVolume] = useState<VolumeType>('volume2');

  return (
    <VolumeContext.Provider value={{ selectedVolume, setSelectedVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}

export function useVolume() {
  const context = useContext(VolumeContext);
  if (context === undefined) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }
  return context;
}