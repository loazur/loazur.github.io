import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <h1 className="home-title">
            Clément <span className="highlight">Bounaix</span>
          </h1>
          <p className="home-subtitle">
            Gameplay Programmer en formation - 19 ans
          </p>
          <p className="home-description">
            Site en plein développement en React.
          </p>
        </div>
        
        <div className="home-cta">
          <Link to="/projects" className="btn btn-primary">
            Voir mes projets
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Me contacter
          </Link>
        </div>

        <div className="home-scroll">
          <span>Scroll pour découvrir</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      <div className="home-featured">
        <h2>Projets</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="card-tag">...</div>
            <h3>Projet 1</h3>
            <p>Description projet</p>
            <a href="#" className="card-link">En savoir plus →</a>
          </div>
          <div className="featured-card">
            <div className="card-tag">...</div>
            <h3>Projet 2</h3>
            <p>Description projet</p>
            <a href="#" className="card-link">En savoir plus →</a>
          </div>
          <div className="featured-card">
            <div className="card-tag">...</div>
            <h3>Projet 3</h3>
            <p>Description projet</p>
            <a href="#" className="card-link">En savoir plus →</a>
          </div>
        </div>
      </div>

      <div className="home-skills">
        <h2>Compétences principales</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon">💻</div>
            <h3>Compétence 1</h3>
            <p>Détails compétence</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">⚙️</div>
            <h3>Compétence 2</h3>
            <p>Détails compétence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
