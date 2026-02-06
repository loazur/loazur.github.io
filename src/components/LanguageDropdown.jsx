import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageDropdown.css';
import IconTranslation from "../assets/icons/icon-translation.webp";

export default function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button 
        className="language-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={IconTranslation} alt="" className="language-icon" />
        <span className="language-flag">{currentLanguage.flag}</span>
        <span className="language-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown-menu">
          <div className="language-dropdown-header">{t("languageDropdown.chooseLanguage")}</div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-dropdown-item ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {i18n.language === lang.code && <span className="language-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}