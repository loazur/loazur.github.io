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
      learnMore: 'En savoir plus'
    },
    en: {
      title: 'My Projects',
      subtitle: 'Discover my various development projects',
      all: 'All',
      videoGame: 'Video Games',
      web: 'Web',
      bot: 'Bot',
      learnMore: 'Learn more'
    }
  };

  const t = translations[language];

  const categories = [t.all, t.videoGame, t.web, t.bot];

  // Fonction pour convertir le statut en classe CSS
  const getStatusClass = (status) => {
    const statusMap = {
      'En cours': 'en-cours',
      'In Progress': 'en-cours',
      'Terminé': 'terminé',
      'Completed': 'terminé',
      'En pause': 'en-pause',
      'Paused': 'en-pause'
    };
    return statusMap[status] || 'terminé';
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
        {filteredProjects.map((project) => (
          <Link to={project.link} key={project.id} className="project-card">
            {project.image && (
              <div className="project-card-image-wrapper">
                <img src={project.image} alt={project.title} className="project-card-bg" />
              </div>
            )}
            <div className="project-content">
              <div className="project-tags-column">
                <div className="project-tags-row">
                  <span className="project-tag engine">{project.engine}</span>
                  {project.openSource && (
                    <span className="project-tag open-source">OPEN SOURCE</span>
                  )}
                </div>
                <div className="project-tags-row">
                  <span className={`project-tag status status-${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-meta-row">
                <span className="project-meta-tag">{project.type}</span>
                <span className="project-meta-separator">•</span>
                <span className="project-meta-tag">{project.category}</span>
                <span className="project-meta-separator">•</span>
                <span className="project-meta-tag">{project.year}</span>
              </div>

              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-badge">{feature}</span>
                ))}
              </div>

              <span className="project-link">{t.learnMore} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}