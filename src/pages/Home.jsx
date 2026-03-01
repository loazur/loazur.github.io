import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { getFeaturedProjects } from '../data/projectsData';
import TechPieChart from '../components/TechPieChart';
import MediaPreview from '../components/MediaPreview';
import '../styles/Home.css';

import { useTranslation } from 'react-i18next';

import emailIcon from '../assets/icons/icon-mail.webp';
import linkedinIcon from '../assets/icons/icon-linkedin.webp';
import githubIcon from '../assets/icons/icon-github.webp';
import itchIcon from '../assets/icons/icon-itchio.webp';

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
      'seriousgame': 'category-seriousgame',
      'other': 'category-other'
    };

    return {
      class: categoryClasses[categoryKey] || 'category-other',
      label: t(`projects.datas.categories.${categoryKey}`)
    };
  };

  return (
    <section className="home">
      {/* Hero — infos essentielles */}
      <div className="home-hero">
        <div className="hero-intro">
          <span className="hero-greeting">{t("home.greeting")}</span>
          <h1 className="hero-name">
            Clément <span className="highlight">Bounaix</span>
          </h1>
          <p className="hero-tagline">{t("home.tagline")}</p>
          <p className="hero-location">{t("home.location")}</p>
          <p className="hero-bio">
            {t("home.bio")}
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-secondary">
              {t("home.seeMyProjects")}
            </Link>
          </div>
          <div className="hero-socials">
            <a href="mailto:clement.bounaix@gmail.com" className="social-link" aria-label="Email">
              <img src={emailIcon} alt="Email" width="24" height="24" />
            </a>
            <a href="https://www.linkedin.com/in/clement-bounaix" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/loazur" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://loazur.itch.io/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Itch.io">
              <img src={itchIcon} alt="Itch.io" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>

      {/* About + GitHub Calendar */}
      <div className="home-about">
        <h2>{t("home.about")}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t("home.aboutText1")}</p>
            <p>{t("home.aboutText2")}</p>
          </div>
          <GitHubCalendar username="loazur" />
        </div>
      </div>

      <TechPieChart />

      {/* Featured Projects */}
      <div className="home-featured">
        <h2>{featuredProjects.length === 1 ? t("home.featuredProject") : t("home.featuredProjects")}</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => {
            const statusInfo = getStatusBadge(project.status);
            const categoryInfo = getCategoryBadge(project.categoryKey);

            return (
              <div key={project.id} className="featured-card">
                <div className={`featured-card-image ${!project.image && !project.video ? 'no-image' : ''}`}>
                  <MediaPreview
                    image={project.image}
                    video={project.video}
                    videoType={project.videoType}
                    alt={project.title}
                  />
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
