import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { getFeaturedProjects } from '../data/projectsData';
import '../styles/Home.css';

const featuredProjects = getFeaturedProjects();

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
        <h2>{featuredProjects.length === 1 ? 'Projet Principal' : 'Projets principaux'}</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => (
            <Link to={project.link} key={project.id} className="featured-card">
              <div className="card-tags-row">
                <div className="card-tag">{project.engine}</div>
                {project.openSource && (
                  <div className="card-tag open-source">Open Source</div>
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
