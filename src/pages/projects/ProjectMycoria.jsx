import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function ProjectMycoria() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>Project Mycoria</h1>
        <div className="project-meta">
          <span className="tag">Unreal Engine 5</span>
          <span className="tag">C++</span>
          <span className="tag">Blueprints</span>
          <span className="date">2025 • Student Project</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>À propos du projet</h2>
          <p>
            Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. 
            Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses 
            liées à un laboratoire pharmaceutique suspect.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-tags">
            <span className="tech-tag">Unreal Engine 5</span>
            <span className="tech-tag">C++</span>
            <span className="tech-tag">Blueprints</span>
          </div>
        </section>
      </div>
    </section>
  );
}