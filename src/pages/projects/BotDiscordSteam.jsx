import ProjectLayout from '../../layout/ProjectLayout';

export default function BotDiscordSteam() {
  const projectData = {
    title: "Bot Discord lié à l'API de Steam",
    tags: ["JavaScript", "Open Source"],
    date: "Déc. 2024 - Mai. 2025",
    links: [
      { url: "https://github.com/loazur/bot-discord-steam-api", label: "GitHub", primary: true }
    ],
    mainImage: {
      src: "/path/to/bot-main.jpg",
      alt: "Bot Discord Steam - Capture d'écran principale"
    },
    galleryImages: [
      { src: "/path/to/bot-1.jpg", alt: "Bot Discord - Screenshot 1" },
      { src: "/path/to/bot-2.jpg", alt: "Bot Discord - Screenshot 2" },
      { src: "/path/to/bot-3.jpg", alt: "Bot Discord - Screenshot 3" },
      { src: "/path/to/bot-4.jpg", alt: "Bot Discord - Screenshot 4" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Bot Discord codé en JavaScript, intégrant l'API Steam pour permettre la liaison de comptes Steam
          à Discord et l'affichage des informations associées.
        </p>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Affichage des profils Steam</li>
          <li>Statistiques de jeu en temps réel</li>
          <li>Commandes personnalisées</li>
          <li>Intégration avec l'API Steam</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">Discord.js</span>
          <span className="tech-tag">Steam API</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}