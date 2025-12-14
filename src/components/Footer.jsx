import '../styles/Footer.css';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const translations = {
    fr: {
      rights: 'Tous droits réservés.'
    },
    en: {
      rights: 'All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Clément Bounaix. {t.rights}</p>
    </footer>
  );
};