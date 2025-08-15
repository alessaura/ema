'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Esconde o indicador após o usuário começar a rolar
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="flex flex-col items-center text-gray-600">
        {/* Mouse */}
        <div className="relative w-6 h-10 border-2 border-gray-400 rounded-full mb-2">
          {/* Scroll wheel */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Texto */}
        <span className="text-sm font-medium text-gray-500">Role para baixo</span>
        
        {/* Seta para baixo */}
        <svg 
          className="w-4 h-4 mt-1 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
}
