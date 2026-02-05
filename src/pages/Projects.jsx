import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';

export default function Projects() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [filter, setFilter] = useState(t('projects.filters.all'));

  const categories = [
    t('projects.filters.all'),
    t('projects.datas.categories.videogame'),
    t('projects.datas.categories.web'),
    t('projects.datas.categories.bot')
  ];

  const getStatusBadge = (status) => {
    // Mappings basés sur les clés de traduction
    const statusClasses = {
      [t('projects.datas.status.inprogress')]: 'ongoing',
      [t('projects.datas.status.finished')]: 'completed',
      [t('projects.datas.status.prototype')]: 'prototype'
    };

    return {
      class: statusClasses[status] || 'completed',
      label: status
    };
  };

  const filteredProjects = filter === t('projects.filters.all')
    ? projects 
    : projects.filter(project => project.category === filter);

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