import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function AppWebSoutenances() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>Application web de gestion de soutenances</h1>
        <div className="project-meta">
          <span className="tag">PHP</span>
          <span className="tag">SQL</span>
          <span className="date">2025 • Student Project</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>À propos du projet</h2>
          <p>
            Projet d'application web permettant de gérer les soutenances d'étudiants des 2ème et 3ème année 
            du BUT Informatique de l'IUT du Puy.
          </p>
          <p>
            Ayant pour objectif de remplacer l'actuel système utilisé par le secrétariat et les professeurs.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-tags">
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">SQL</span>
          </div>
        </section>
      </div>
    </section>
  );
}