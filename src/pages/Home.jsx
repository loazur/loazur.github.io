import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { getFeaturedProjects } from '../data/projectsData';
import '../styles/Home.css';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects(t);

  const getStatusBadge = (status) => {
    const statusMap = {
      [t('projects.datas.status.inprogress')]: { class: 'ongoing', label: status },
      [t('projects.datas.status.finished')]: { class: 'completed', label: status },
      [t('projects.datas.status.prototype')]: { class: 'prototype', label: status }
    };
    return statusMap[status] || { class: 'completed', label: status };
  };

  const getCategoryBadge = (categoryKey) => {
    const categoryClasses = {
      'videogame': 'category-videogame',
      'web': 'category-web',
      'bot': 'category-bot',
      'other': 'category-other'
    };

    return {
      class: categoryClasses[categoryKey] || 'category-other',
      label: t(`projects.datas.categories.${categoryKey}`)
    };
  };

  // Texte qui défile
  const scrollingTextTop = t("home.scrollingtext");

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          {/* Ligne défilante au-dessus du nom */}
          <div className="scrolling-text-container top">
            <div className="scrolling-text">
              <span>{scrollingTextTop}</span>
              <span>{scrollingTextTop}</span>
              <span>{scrollingTextTop}</span>
            </div>
          </div>

          <h1 className="home-title">
            Clément <span className="highlight">Bounaix</span>
          </h1>
          <p className="home-subtitle">
            {t("home.subtitle")}
          </p>

          
        </div>

        <p className="home-description">
          {t("home.description")}<br/>
          <strong>{t("home.inDevelopment")}</strong>
        </p>
        
        <div className="home-cta">
          <Link to="/projects" className="btn btn-primary">
            {t("home.seeMyProjects")}
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            {t("home.contactMe")}
          </Link>
        </div>

        <div className="home-scroll">
          <span>{t("home.scrollToDiscover")}</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      <div className="home-about">
        <h2>{t("home.about")}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {t("home.aboutText1")}
            </p>
            <p>
              {t("home.aboutText2")}
            </p>
          </div>
          <GitHubCalendar username="loazur" />
        </div>
      </div>

      <div className="home-featured">
        <h2>{featuredProjects.length === 1 ? t("home.featuredProject") : t("home.featuredProjects")}</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => {
            const statusInfo = getStatusBadge(project.status);
            const categoryInfo = getCategoryBadge(project.categoryKey);
            
            return (
              <div key={project.id} className="featured-card">
                <div className={`featured-card-image ${!project.image ? 'no-image' : ''}`}>
                  {project.image && <img src={project.image} alt={project.title} />}
                  <span className={`featured-category-badge ${categoryInfo.class}`}>
                    {categoryInfo.label}
                  </span>
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
                      {t("home.readMore")}
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
