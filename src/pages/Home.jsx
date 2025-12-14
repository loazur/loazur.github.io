import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProjects } from '../data/projectsData';
import '../styles/Home.css';

export default function Home() {
  const { language } = useLanguage();
  const featuredProjects = getFeaturedProjects(language);

  const translations = {
    fr: {
      title: 'Clément',
      highlight: 'Bounaix',
      subtitle: 'Gameplay Programmer en formation - 19 ans',
      description: 'Etudiant français passionné par le développement de jeux vidéo.',
      devNote: 'Site en cours de développement.',
      viewProjects: 'Voir mes projets',
      contact: 'Me contacter',
      scrollDiscover: 'Scroll pour découvrir',
      about: 'À propos',
      aboutText1: 'Actuellement en 2ème année de',
      aboutDegree: 'BUT Informatique Graphique',
      aboutText2: "à l'IUT du Puy-en-Velay, je me spécialise dans le développement de jeux vidéo plus précisément en programmation gameplay.",
      aboutText3: "Mon objectif est de contribuer à des projets innovants et de continuer à développer mes compétences dans l'industrie du jeu vidéo.",
      featuredSingle: 'Projet Principal',
      featuredMultiple: 'Projets principaux',
      openSource: 'Open Source'
    },
    en: {
      title: 'Clément',
      highlight: 'Bounaix',
      subtitle: 'Gameplay Programmer in training - 19 years old',
      description: 'French student passionate about video game development.',
      devNote: 'Website under development.',
      viewProjects: 'View my projects',
      contact: 'Contact me',
      scrollDiscover: 'Scroll to discover',
      about: 'About',
      aboutText1: 'Currently in 2nd year of',
      aboutDegree: 'Computer Graphics Bachelor',
      aboutText2: "at IUT du Puy-en-Velay, I specialize in video game development, more specifically in gameplay programming.",
      aboutText3: "My goal is to contribute to innovative projects and continue to develop my skills in the video game industry.",
      featuredSingle: 'Main Project',
      featuredMultiple: 'Featured Projects',
      openSource: 'Open Source'
    }
  };

  const t = translations[language];

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <h1 className="home-title">
            {t.title} <span className="highlight">{t.highlight}</span>
          </h1>
          <p className="home-subtitle">
            {t.subtitle}
          </p>
          <p className="home-description">
            {t.description}<br/>
            <strong>{t.devNote}</strong>
          </p>
        </div>
        
        <div className="home-cta">
          <Link to="/projects" className="btn btn-primary">
            {t.viewProjects}
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            {t.contact}
          </Link>
        </div>

        <div className="home-scroll">
          <span>{t.scrollDiscover}</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      <div className="home-about">
        <h2>{t.about}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {t.aboutText1} <strong>{t.aboutDegree}</strong> {t.aboutText2}
            </p>
            <p>
              {t.aboutText3}
            </p>
          </div>
          <GitHubCalendar username="loazur" />
        </div>
      </div>

      <div className="home-featured">
        <h2>{featuredProjects.length === 1 ? t.featuredSingle : t.featuredMultiple}</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => (
            <Link to={project.link} key={project.id} className="featured-card">
              <div className="card-tags-row">
                <div className="card-tag">{project.engine}</div>
                {project.openSource && (
                  <div className="card-tag open-source">{t.openSource}</div>
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
