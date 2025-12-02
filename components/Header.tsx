
import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { useTranslation } from '../App';
import { View } from '../types';

export const Header: React.FC = () => {
  const { lang, setLang, t, setView, currentView } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ko' : 'en');
  };

  const navItems: { label: string; view: View }[] = [
    { label: t.nav_brand, view: 'brand' },
    { label: t.nav_shop, view: 'shop' },
    { label: t.nav_bestsellers, view: 'bestsellers' },
    { label: t.nav_skincare, view: 'skincare' },
    { label: t.nav_makeup, view: 'makeup' },
    { label: t.nav_events, view: 'events' }
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity"
        >
          SANTE
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              onClick={() => handleNavClick(item.view)}
              className={`text-xs font-semibold tracking-wide transition-colors ${
                currentView === item.view 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Icons & Lang */}
        <div className="hidden md:flex items-center space-x-5 text-gray-800 dark:text-gray-200">
          <button 
            onClick={toggleLang}
            className="text-xs font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {lang === 'en' ? 'EN' : 'KO'}
          </button>
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={toggleLang}
            className="text-xs font-bold text-gray-800 dark:text-gray-200"
          >
            {lang === 'en' ? 'EN' : 'KO'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-medium text-left ${
                  currentView === item.view 
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex gap-4 border-t border-gray-100 dark:border-gray-800">
               <button className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <User size={18} /> Profile
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Search size={18} /> Search
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
