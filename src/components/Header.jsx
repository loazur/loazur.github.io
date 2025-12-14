import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      home: 'Accueil',
      projects: 'Projets',
      cv: 'CV',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      cv: 'Resume',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="nav-link">{t.home}</NavLink>
          <NavLink to="/projects" className="nav-link">{t.projects}</NavLink>
          <NavLink to="/cv" className="nav-link">{t.cv}</NavLink>
          <NavLink to="/contact" className="nav-link">{t.contact}</NavLink>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}