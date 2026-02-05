import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';

export default function Projects() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Jeux vidéo', 'Web', 'Bot'];

  const getStatusBadge = (status) => {
    const statusMap = {
      'En cours': { class: 'ongoing', label: status },
      'Terminé': { class: 'completed', label: status },
      'Prototype': { class: 'prototype', label: status }
    };
    return statusMap[status] || { class: 'completed', label: status };
  };

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => {
        if (filter === 'Jeux vidéo') return project.category === 'Jeu vidéo';
        if (filter === 'Web') return project.category === 'Web';
        if (filter === 'Bot') return project.category === 'Bot';
        return true;
      });

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>{t("projects.title")}</h1>
        <p>{t("projects.subtitle")}</p>
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
              <div className={`project-card-image ${!project.image ? 'no-image' : ''}`}>
                {project.image && <img src={project.image} alt={project.title} />}
                <span className={`project-status-badge ${statusInfo.class}`}>
                  {statusInfo.label}
                </span>
              </div>

              <div className="project-card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tech-tags">
                  <span className="tech-tag">{project.engine}</span>
                  {project.features.map((feature, index) => (
                    <span key={index} className="tech-tag">{feature}</span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <Link to={project.link} className="project-action-btn primary">
                    {t("projects.readMore")}
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