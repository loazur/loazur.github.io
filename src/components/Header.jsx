import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
            <li><Link to="/cv" onClick={closeMenu}>CV</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};