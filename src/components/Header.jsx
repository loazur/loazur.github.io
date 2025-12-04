import { Link } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};