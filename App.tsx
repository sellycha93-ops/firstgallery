
import React, { useState, createContext, useContext, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Brand } from './components/pages/Brand';
import { Shop } from './components/pages/Shop';
import { Events } from './components/pages/Events';
import { TRANSLATIONS } from './constants';
import { Language, TranslationContextType, View } from './types';

// Context for Language & Routing
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setView] = useState<View>('home');

  // Set document title based on language
  useEffect(() => {
    document.title = lang === 'en' ? 'Sante Cosmetics' : '산테 코스메틱';
    document.documentElement.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
    currentView,
    setView
  };

  const renderView = () => {
    switch(currentView) {
      case 'home': return <Home />;
      case 'brand': return <Brand />;
      case 'shop': return <Shop />;
      case 'skincare': return <Shop category="skincare" />;
      case 'makeup': return <Shop category="makeup" />;
      case 'bestsellers': return <Shop />; // reusing shop for bestsellers for now
      case 'events': return <Events />;
      default: return <Home />;
    }
  };

  return (
    <TranslationContext.Provider value={value}>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased text-gray-900 dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900">
        <Header />
        <main>
          {renderView()}
        </main>
        <Footer />
      </div>
    </TranslationContext.Provider>
  );
};

export default App;
