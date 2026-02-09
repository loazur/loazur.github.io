import ProjectLayout from '../../layout/ProjectLayout';

export default function ProjetVapeur() {
  const projectData = {
    title: "Projet Vapeur",
    tags: ["JavaScript", "Page en cours d'écriture"],
    date: "Décembre 2025",
    mainImage: {
      src: null,
      alt: "Projet Vapeur"
    },
    galleryImages: [
      
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>Page en cours d'écriture.</p>
      </section>

      

      <section className="project-section">
        <h2>Équipe de Développement</h2>
        <p>...</p>
        
      </section>

      <section className="project-section">
        <h2>Compétences développées</h2>
        <ul>
          <li>...</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">Handlebars</span>
        </div>
      </section>
    </ProjectLayout>
  );
}