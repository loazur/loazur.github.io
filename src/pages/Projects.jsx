import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import MediaPreview from '../components/MediaPreview';
import '../styles/Projects.css';

export default function Projects() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setFiltersOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    { key: "all", label: t("projects.filters.all") },
    { key: "videogame", label: t("projects.datas.categories.videogame") },
    { key: "web", label: t("projects.datas.categories.web") },
    { key: "bot", label: t("projects.datas.categories.bot") },
    { key: "seriousgame", label: t("projects.datas.categories.seriousgame") },
    { key: "other", label: t("projects.datas.categories.other") }
  ];

  const activeCategory = categories.find(c => c.key === filter);

  const getStatusBadge = (status) => {
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

  const getCategoryBadge = (categoryKey) => {
    const categoryClasses = {
      'videogame': 'category-videogame',
      'web': 'category-web',
      'bot': 'category-bot',
      'seriousgame': 'category-seriousgame',
      'other': 'category-other'
    };
    return {
      class: categoryClasses[categoryKey] || 'category-other',
      label: t(`projects.datas.categories.${categoryKey}`)
    };
  };

  const filteredProjects = (filter === "all"
    ? projects 
    : projects.filter(project => project.categoryKey === filter))
    .filter(project => {
      if (!searchTerm) return true;
      const search = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.engine.toLowerCase().includes(search) ||
        project.features.some(feature => feature.toLowerCase().includes(search))
      );
    })
    .sort((a, b) => {
      const inProgressStatus = t('projects.datas.status.inprogress');
      if (a.status === inProgressStatus && b.status !== inProgressStatus) return -1;
      if (a.status !== inProgressStatus && b.status === inProgressStatus) return 1;
      return 0;
    });

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>{t("projects.title")}</h1>
        <p>{t("projects.subtitle")}</p>
      </div>

      <div className="projects-grid-container">
        <div className="projects-grid-topbar">
          <span className="projects-count">
            {filteredProjects.length} {filteredProjects.length > 1 ? t("projects.projectsPlural") || "projets" : t("projects.projectsSingular") || "projet"}
          </span>

          <div className="projects-filters-dropdown" ref={filtersRef}>
            <button
              className="filters-toggle-btn"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <svg className="filters-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
              <span className="filters-toggle-label">
                {activeCategory?.label}
              </span>
              <span className={`filters-toggle-icon ${filtersOpen ? 'open' : ''}`}>▾</span>
            </button>

            {filtersOpen && (
              <div className="filters-dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-dropdown-item ${filter === category.key ? 'active' : ''}`}
                    onClick={() => {
                      setFilter(category.key);
                      setFiltersOpen(false);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const statusInfo = getStatusBadge(project.status);
            const categoryInfo = getCategoryBadge(project.categoryKey);
            
            return (
              <div key={project.id} className="project-card">
                <div className={`project-card-image ${!project.image && !project.video ? 'no-image' : ''}`}>
                  <MediaPreview 
                    image={project.image} 
                    video={project.video}
                    videoType={project.videoType}
                    alt={project.title}
                  />
                  <span className={`project-category-badge ${categoryInfo.class}`}>
                    {categoryInfo.label}
                  </span>
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
      </div>
    </section>
  );
}