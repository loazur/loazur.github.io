import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      engine: "Moteur 1",
      description: "Description de votre projet 1",
      features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
      image: "🎮",
      link: "#"
    },
    {
      id: 2,
      title: "Projet 2",
      engine: "Moteur 2",
      description: "Description de votre projet 2",
      features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
      image: "🎯",
      link: "#"
    },
    {
      id: 3,
      title: "Projet 3",
      engine: "Moteur 3",
      description: "Description de votre projet 3",
      features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
      image: "⚙️",
      link: "#"
    },
  ];

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez mes projets</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-icon">{project.image}</div>
            <div className="project-content">
              <div className="project-tag">{project.engine}</div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-badge">{feature}</span>
                ))}
              </div>

              <a href={project.link} className="project-link">
                Voir le projet →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}