import ProjectLayout from '../../layout/ProjectLayout';

export default function ProjectMycoria() {
  const projectData = {
    title: "Project Mycoria",
    tags: ["Unreal Engine 5"],
    date: "Janv. 2025 - Juin. 2025",
    mainImage: {
      src: "/path/to/mycoria-main.jpg",
      alt: "Project Mycoria - Capture d'écran principale"
    },
    galleryImages: [
      { src: "/path/to/mycoria-1.jpg", alt: "Project Mycoria - Screenshot 1" },
      { src: "/path/to/mycoria-2.jpg", alt: "Project Mycoria - Screenshot 2" },
      { src: "/path/to/mycoria-3.jpg", alt: "Project Mycoria - Screenshot 3" },
      { src: "/path/to/mycoria-4.jpg", alt: "Project Mycoria - Screenshot 4" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel,
          agent de la DGSI, chargé d'enquêter sur une épidémie mystérieuse.
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Créer un monde ouvert explorable</li>
          <li>Développer une enquête narrative</li>
          <li>Intégrer des mécaniques d'exploration</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">C++</span>
          <span className="tech-tag">Blueprints</span>
          <span className="tech-tag">Blender</span>
          <span className="tech-tag">GitLab</span>
        </div>
      </section>
    </ProjectLayout>
  );
}