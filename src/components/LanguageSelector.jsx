import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}