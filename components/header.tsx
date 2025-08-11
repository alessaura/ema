'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Início', href: '#' },
    { label: 'Sobre a coleção', href: '#' },
    { label: 'A coleção', href: '#' },
    { label: 'Patrocinadores da Coleção', href: '#' },
    { label: 'Como adquirir', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 via-green-50/70 to-emerald-100/80 backdrop-blur-md border-b border-emerald-200/30"></div>
        
        {/* Header content */}
        <div className="relative flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-base font-medium text-gray-700">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="hover:text-emerald-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-10 p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>

          {/* Logos */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <Image
                src="/ema-logo.svg"
                alt="Embalagens Mundo Afora"
                width={200}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
              <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
              <Image
                src="/packaging-logo.svg"
                alt="Packaging Around The World"
                width={200}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
            
            {/* Mobile: Show only one logo */}
            <div className="sm:hidden">
              <Image
                src="/ema-logo.png"
                alt="Embalagens Mundo Afora"
                width={150}
                height={30}
                className="h-6 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-50/95 via-green-50/90 to-emerald-100/95 backdrop-blur-lg border-b border-emerald-200/30 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="pt-20 pb-8 px-6">
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-300 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile: Show both logos in menu */}
            <div className="mt-8 pt-6 border-t border-emerald-200/30 space-y-4">
              <Image
                src="/ema-logo.png"
                alt="Embalagens Mundo Afora"
                width={180}
                height={36}
                className="h-7 w-auto object-contain"
              />
              <Image
                src="/packaging-logo.png"
                alt="Packaging Around The World"
                width={180}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;