import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
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
            Etudiant français passionné par le développement de jeux vidéo.<br></br>
            <strong>Site en cours de développement.</strong>
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

      <div className="home-about">
        <h2>À propos</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Actuellement en 2ème année de <strong>BUT Informatique Graphique</strong> à l'IUT du Puy-en-Velay, 
              je me spécialise dans le développement de jeux vidéo plus précisément
              en programmation gameplay.
            </p>
            <p>
              Mon objectif est de contribuer à des projets innovants et de continuer à développer 
              mes compétences dans l'industrie du jeu vidéo.
            </p>
          </div>
          <GitHubCalendar username="loazur" />
        </div>
      </div>

      <div className="home-featured">
        <h2>Projets principaux</h2>
        <div className="featured-grid">
          <Link to="/projects/libet" className="featured-card">
            <div className="card-tag">Unity</div>
            <h3>LIBET</h3>
            <p>Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
          <Link to="/projects/project-mycoria" className="featured-card">
            <div className="card-tag">Unreal Engine</div>
            <h3>Project Mycoria</h3>
            <p>Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
          <Link to="/projects/iplat" className="featured-card">
            <div className="card-tag">Löve2D</div>
            <h3>IPlat</h3>
            <p>Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.</p>
            <span className="card-link">En savoir plus →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
