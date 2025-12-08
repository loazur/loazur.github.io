import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function IPlat() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>IPlat</h1>
        <div className="project-meta">
          <span className="tag">Löve2D</span>
          <span className="tag">Lua</span>
          <span className="tag">Open Source</span>
          <span className="date">2021</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>À propos du projet</h2>
          <p>
            Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-tags">
            <span className="tech-tag">Lua</span>
            <span className="tech-tag">Löve2D</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Liens</h2>
          <div className="project-links-section">
            <a href="https://github.com/loazur/IPlat" target="_blank" rel="noopener noreferrer" className="external-link">
              GitHub →
            </a>
            <a href="https://loazur.itch.io/iplat" target="_blank" rel="noopener noreferrer" className="external-link">
              Itch.io →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}