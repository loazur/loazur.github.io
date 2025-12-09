import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Récupérer toutes les catégories uniques
  const categories = ['Tous', ...new Set(projectsData.map(project => project.category))];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'Tous' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez l'ensemble de mes réalisations</p>
      </div>

      {/* Filtres de catégorie */}
      <div className="projects-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <Link to={project.link} key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-tags-column">
                <div className="project-tags-row">
                  <div className="project-tag engine">{project.engine}</div>
                  {project.openSource && (
                    <div className="project-tag open-source">Open Source</div>
                  )}
                </div>
                <div className={`project-tag status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
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
              <span className="project-link">En savoir plus →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}