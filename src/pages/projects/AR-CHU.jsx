import ProjectLayout from '../../layout/ProjectLayout';

export default function AR_CHU() {
  const projectData = {
    title: "Realité Augmentée - Thérapie Miroir",
    tags: ["Unity", "Page en cours d'écriture"],
    date: "Février. 2026 - Mars. 2026",
    mainImage: {
      src: null,
      alt: "AR-CHU"
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
          <span className="tech-tag">Unity</span>
          <span className="tech-tag">C#</span>
          <span className="tech-tag">Meta Quest</span>
        </div>
      </section>
    </ProjectLayout>
  );
}