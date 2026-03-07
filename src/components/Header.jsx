import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <img src="/previewIcon.png" alt="Logo" className="header-logo" />
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="nav-link">{t("header.home")}</NavLink>
          <NavLink to="/projects" className="nav-link">{t("header.projects")}</NavLink>
          <NavLink to="/cv" className="nav-link">{t("header.cv")}</NavLink>
        </nav>
        <LanguageDropdown />
      </div>
    </header>
  );
}
