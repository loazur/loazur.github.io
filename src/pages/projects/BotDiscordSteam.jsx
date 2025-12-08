import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function BotDiscordSteam() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>Bot Discord lié à l'API Steam</h1>
        <div className="project-meta">
          <span className="tag">Discord.js</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Open Source</span>
          <span className="date">2024</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>À propos du projet</h2>
          <p>
            Bot Discord codé en JavaScript, intégrant l'API Steam pour permettre la liaison des comptes Steam 
            à Discord et l'affichage des informations associées.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-tags">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Discord.js</span>
            <span className="tech-tag">Steam API</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Liens</h2>
          <div className="project-links-section">
            <a href="https://github.com/loazur/bot-discord-steam-api" target="_blank" rel="noopener noreferrer" className="external-link">
              GitHub →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}