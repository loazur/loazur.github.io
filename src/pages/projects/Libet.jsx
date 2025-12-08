import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function Libet() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>LIBET</h1>
        <div className="project-meta">
          <span className="tag">Unity 6</span>
          <span className="tag">C#</span>
          <span className="tag">Open Source</span>
          <span className="date">2025-2026 • Student Project</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>À propos du projet</h2>
          <p>
            Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, 
            vivant sa vie tandis qu'il perd progressivement la raison.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-tags">
            <span className="tech-tag">Unity 6</span>
            <span className="tech-tag">C#</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Liens</h2>
          <div className="project-links-section">
            <a href="https://github.com/loazur/LIBET" target="_blank" rel="noopener noreferrer" className="external-link">
              GitHub →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}