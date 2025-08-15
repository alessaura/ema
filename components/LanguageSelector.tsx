'use client';

import { useLanguage, type Language } from '@/app/context/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as Language, label: 'PT', flag: '🇧🇷' },
    { code: 'en' as Language, label: 'EN', flag: '🇺🇸' },
  ];

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            language === lang.code
              ? 'bg-emerald-100 text-emerald-700 shadow-sm'
              : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
          }`}
        >
          <span className="text-xs">{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
