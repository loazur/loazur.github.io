import ProjectLayout from '../../layout/ProjectLayout';

export default function Libet() {
  const projectData = {
    title: "LIBET",
    tags: ["Unity 6", "Open Source"],
    date: "Oct. 2025 - Juin. 2026",
    links: [
      { url: "https://github.com/loazur/LIBET", label: "GitHub", primary: true }
    ],
    mainImage: {
      src: "/path/to/libet-main.jpg",
      alt: "LIBET - Capture d'écran principale"
    },
    galleryImages: [
      { src: "/path/to/libet-1.jpg", alt: "LIBET - Screenshot 1" },
      { src: "/path/to/libet-2.jpg", alt: "LIBET - Screenshot 2" },
      { src: "/path/to/libet-3.jpg", alt: "LIBET - Screenshot 3" },
      { src: "/path/to/libet-4.jpg", alt: "LIBET - Screenshot 4" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer,
          vivant sa vie tandis qu'il perd progressivement la raison.
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Créer une expérience narrative immersive</li>
          <li>Représenter les effets de la maladie d'Alzheimer</li>
          <li>Développer des mécaniques de jeu innovantes</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">C#</span>
          <span className="tech-tag">FMOD</span>
          <span className="tech-tag">Blender</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}