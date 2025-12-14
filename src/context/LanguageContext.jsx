import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Fonction pour détecter la langue du navigateur
  const getBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    // Si la langue du navigateur commence par 'fr', on retourne 'fr', sinon 'en'
    return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  };

  // Initialiser avec la langue du navigateur ou celle stockée dans localStorage
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || getBrowserLanguage();
  });

  // Sauvegarder la langue choisie dans localStorage
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};