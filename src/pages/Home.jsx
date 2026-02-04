import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { getFeaturedProjects } from '../data/projectsData';
import '../styles/Home.css';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects();

  const getStatusBadge = (status) => {
    const statusMap = {
      'En cours': { class: 'ongoing', label: status },
      'Terminé': { class: 'completed', label: status },
      'Prototype': { class: 'prototype', label: status }
    };
    return statusMap[status] || { class: 'completed', label: status };
  };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <h1 className="home-title">
            Clément <span className="highlight">Bounaix</span>
          </h1>
          <p className="home-subtitle">
            {t("home.subtitle")}
          </p>
          <p className="home-description">
            Etudiant français passionné par le développement de jeux vidéo.<br/>
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
              Actuellement en 2ème année de <strong>BUT Informatique Graphique</strong> à l'IUT du Puy-en-Velay, je me spécialise dans le développement de jeux vidéo plus précisément en programmation gameplay.
            </p>
            <p>
              Mon objectif est de contribuer à des projets innovants et de continuer à développer mes compétences dans l'industrie du jeu vidéo.
            </p>
          </div>
          <GitHubCalendar username="loazur" />
        </div>
      </div>

      <div className="home-featured">
        <h2>{featuredProjects.length === 1 ? 'Projet Principal' : 'Projets principaux'}</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => {
            const statusInfo = getStatusBadge(project.status);
            
            return (
              <div key={project.id} className="featured-card">
                <div className={`featured-card-image ${!project.image ? 'no-image' : ''}`}>
                  {project.image && <img src={project.image} alt={project.title} />}
                  <span className={`featured-status-badge ${statusInfo.class}`}>
                    {statusInfo.label}
                  </span>
                </div>

                <div className="featured-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="featured-tech-tags">
                    <span className="featured-tech-tag">{project.engine}</span>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="featured-tech-tag">{feature}</span>
                    ))}
                  </div>

                  <div className="featured-card-actions">
                    <Link to={project.link} className="featured-action-btn">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
