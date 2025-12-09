import ProjectLayout from '../../layout/ProjectLayout';

export default function AppWebSoutenances() {
  const projectData = {
    title: "Application web de gestion de soutenances",
    tags: ["PHP"],
    date: "Oct. 2025",
    mainImage: {
      src: "/path/to/app-main.jpg",
      alt: "App Soutenances - Capture d'écran principale"
    },
    galleryImages: [
      { src: "/path/to/app-1.jpg", alt: "App Soutenances - Screenshot 1" },
      { src: "/path/to/app-2.jpg", alt: "App Soutenances - Screenshot 2" },
      { src: "/path/to/app-3.jpg", alt: "App Soutenances - Screenshot 3" },
      { src: "/path/to/app-4.jpg", alt: "App Soutenances - Screenshot 4" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Projet d'application web permettant de gérer les soutenances d'étudiants des 2ème et 3ème année
          du BUT Informatique de l'IUT du Puy. <br></br>
          Ayant pour object de remplacer l'actuel système utilisé par le secrétariat et les professeurs.
        </p>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Gestion des plannings de soutenances</li>
          <li>Système de notation</li>
          <li>Interface étudiant et enseignant</li>
          <li>Génération de documents PDF</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}