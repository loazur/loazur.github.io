import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LanguageSelector from './LanguageSelector';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/projects" className="nav-link">Projets</NavLink>
          <NavLink to="/cv" className="nav-link">CV</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}