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
            Etudiant français passionné par le développement de jeux vidéo.
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
        <h2>Projets en vedette</h2>
        <div className="featured-grid">
          <Link to="/projects/libet" className="featured-card">
            <div className="card-tag">Unity 6</div>
            <h3>LIBET</h3>
            <p>Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
          <Link to="/projects/project-mycoria" className="featured-card">
            <div className="card-tag">Unreal Engine 5</div>
            <h3>Project Mycoria</h3>
            <p>Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
          <Link to="/projects/iplat" className="featured-card">
            <div className="card-tag">Löve2D</div>
            <h3>iPlat</h3>
            <p>Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
        </div>
      </div>

      <div className="home-skills">
        <h2>Compétences principales</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Moteurs de Jeu</h3>
            <p>Unity, Unreal Engine</p>
          </div>
          <div className="skill-item">
            <h3>Programmation</h3>
            <p>C#, C++, JavaScript</p>
          </div>
          <div className="skill-item">
            <h3>Gameplay</h3>
            <p>Mécanique, IA, Physique</p>
          </div>
          <div className="skill-item">
            <h3>Outils</h3>
            <p>Git, SCRUM, Jira</p>
          </div>
        </div>
      </div>
    </section>
  );
}
