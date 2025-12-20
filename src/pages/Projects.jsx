import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/projectsData';
import '../styles/Projects.css';

export default function Projects() {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const [filter, setFilter] = useState('Tous');

  const translations = {
    fr: {
      title: 'Mes Projets',
      subtitle: 'Découvrez mes différents projets de développement',
      all: 'Tous',
      videoGame: 'Jeux vidéo',
      web: 'Web',
      bot: 'Bot',
      viewDetails: 'En savoir plus →'
    },
    en: {
      title: 'My Projects',
      subtitle: 'Discover my various development projects',
      all: 'All',
      videoGame: 'Video Games',
      web: 'Web',
      bot: 'Bot',
      viewDetails: 'Learn more →'
    }
  };

  const t = translations[language];
  const categories = [t.all, t.videoGame, t.web, t.bot];

  const getStatusBadge = (status) => {
    const statusMap = {
      'En cours': { class: 'ongoing', label: status },
      'In Progress': { class: 'ongoing', label: status },
      'Terminé': { class: 'completed', label: status },
      'Completed': { class: 'completed', label: status },
      'Prototype': { class: 'prototype', label: status }
    };
    return statusMap[status] || { class: 'completed', label: status };
  };

  const filteredProjects = filter === t.all 
    ? projects 
    : projects.filter(project => {
        if (filter === t.videoGame) return project.category === (language === 'fr' ? 'Jeu vidéo' : 'Video Game');
        if (filter === t.web) return project.category === 'Web';
        if (filter === t.bot) return project.category === 'Bot';
        return true;
      });

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className="projects-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const statusInfo = getStatusBadge(project.status);
          
          return (
            <div key={project.id} className="project-card">
              {/* Image ou placeholder */}
              <div className={`project-card-image ${!project.image ? 'no-image' : ''}`}>
                {project.image && <img src={project.image} alt={project.title} />}
                <span className={`project-status-badge ${statusInfo.class}`}>
                  {statusInfo.label}
                </span>
              </div>

              {/* Contenu */}
              <div className="project-card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                {/* Tags de technos */}
                <div className="project-tech-tags">
                  <span className="tech-tag">{project.engine}</span>
                  {project.features.map((feature, index) => (
                    <span key={index} className="tech-tag">{feature}</span>
                  ))}
                </div>

                {/* Bouton unique */}
                <div className="project-card-actions">
                  <Link to={project.link} className="project-action-btn primary">
                    {t.viewDetails}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}