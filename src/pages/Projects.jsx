import { Link } from 'react-router-dom';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "LIBET",
      engine: "Unity 6",
      description: "Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.",
      features: ["Unity 6", "C#", "Open Source"],
      link: "/projects/libet"
    },
    {
      id: 2,
      title: "Project Mycoria",
      engine: "Unreal Engine 5",
      description: "Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.",
      features: ["Unreal Engine 5", "C++", "Blueprints"],
      link: "/projects/project-mycoria"
    },
    {
      id: 3,
      title: "iPlat",
      engine: "Löve2D",
      description: "Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.",
      features: ["Lua", "Löve2D", "Open Source"],
      link: "/projects/iplat"
    },
    {
      id: 4,
      title: "Bot Discord Steam API",
      engine: "Node.js",
      description: "Bot Discord codé en JavaScript, intégrant l'API Steam pour permettre la liaison des comptes Steam à Discord et l'affichage des informations associées.",
      features: ["JavaScript", "Discord.js", "Steam API"],
      link: "/projects/bot-discord-steam"
    },
    {
      id: 5,
      title: "Application Web Soutenances",
      engine: "Web",
      description: "Application web permettant de gérer les soutenances d'étudiants des 2ème et 3ème année du BUT Informatique de l'IUT du Puy.",
      features: ["PHP", "SQL", "Gestion"],
      link: "/projects/app-web-soutenances"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez mes projets et réalisations</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-tag">{project.engine}</div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-badge">{feature}</span>
                ))}
              </div>

              <Link to={project.link} className="project-link">
                Voir le projet →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}