import '../../styles/ProjectDetail.css';
import ProjectLayout from '../../layout/ProjectLayout';
import LibetMainPicture from '../../assets/Libet/libet-dev-picture1.webp';
import LibetPicture2 from '../../assets/Libet/libet-dev-picture2.webp';
import LibetPicture3 from '../../assets/Libet/libet-dev-picture3.webp';
import LibetPicture4 from '../../assets/Libet/libet-dev-picture4.webp';
import LibetPicture5 from '../../assets/Libet/libet-dev-picture5.webp';
import LibetPicture6 from '../../assets/Libet/libet-dev-picture6.webp';

export default function Libet() {
  const projectData = {
    title: "LIBET - Jeu narratif en développement",
    tags: ["Unity 6", "Jeu Narratif", "Open Source"],
    date: "Oct. 2025 - Mars 2026",
    links: [
      { url: "https://github.com/loazur/LIBET", label: "GitHub", primary: true }
    ],
    mainImage: {
      src: LibetMainPicture,
      alt: "LIBET - Salle à manger"
    },
    galleryImages: [
      { src: LibetPicture2, alt: 'LIBET - Autre vue de la salle à manger' },
      { src: LibetPicture3, alt: 'LIBET - Menu principal du jeu' },
      { src: LibetPicture4, alt: 'LIBET - Configuration des touches' },
      { src: LibetPicture5, alt: 'LIBET - Interaction avec un fauteuil' },
      { src: LibetPicture6, alt: 'LIBET - Scène de test Unity' }
    ]
  };

  const features = {
    complete: [
      "Player Controller (courir, s'accroupir...)",
      "Système d'interactions flexible",
      "Interactions : chaises, portes, objets, interrupteurs, PNJs",
      "Système de dialogues",
      "Support manettes",
      "Menu paramètres complet sauvegardé (avec PlayerPrefs)",
      "Système de quêtes",
      "Système cycle jour/nuit",
      "Audio adaptatif avec FMOD",
      "Sauvegarde des données en JSON (cryptée)",
      "Plusieurs slots de sauvegardes",
      "Événements aléatoires liés à Alzheimer"
    ],
    inProgress: [
      "Modélisation de chaque pièce de la maison",
      "Jauge de lucidité (liée aux événements d'Alzheimer)",
    ],
    planned: [
      "Système de progression",
      "Optimisations : occlusion culling...",
      "Ajout de plus d'événements aléatoires",
      "Système de piano",
      "..."
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          LIBET est un jeu 3D à la première personne développé dans le cadre de ma formation en BUT Informatique Graphique. <br/>
          Le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison. <br/>
          Le jeu explore les thèmes de la mémoire, de l'identité et de la perception à travers une expérience narrative immersive.
        </p>
        <p>
          <br/>
          <strong>Problématique :</strong> Comment représenter de manière sensible et réaliste les effets de la maladie d'Alzheimer dans un jeu vidéo ?
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Créer une expérience narrative émotionnelle et immersive</li>
          <li>Représenter avec justesse les effets de la maladie d'Alzheimer</li>
          <li>Développer des mécaniques de jeu innovantes liées à la perte de mémoire</li>
          <li>Maîtriser Unity 6 et l'intégration audio avec FMOD</li>
          <li>Travailler en équipe sur un projet de grande envergure</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Équipe de Développement</h2>
        <p><strong>LIBET Team</strong> - Équipe de 5 développeurs :</p>
        <ul>
          <li><strong>Clément BOUNAIX</strong> - Responsable programmation - Programmeur</li>
          <li><strong>Nathanaël MORIT</strong> - Responsable modélisation - Modélisateur</li>
          <li><strong>Lucas CONTRERAS-HODAPP</strong> - Programmeur</li>
          <li><strong>Lucas CHAPON</strong> - Modélisateur</li>
          <li><strong>Morphée SEVESTRE</strong> - Modélisatrice</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>État d'Avancement</h2>
        <p>Le projet est actuellement en développement actif. Voici la progression des fonctionnalités :</p>
        
        {features.complete.length > 0 && (
          <>
            <h3 style={{ color: '#4ade80', marginTop: '1.5rem' }}>✓ Fonctionnalités terminées :</h3>
            <ul>
              {features.complete.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {features.inProgress.length > 0 && (
          <>
            <h3 style={{ color: '#fbbf24', marginTop: '1.5rem' }}>⟳ Fonctionnalités en cours :</h3>
            <ul>
              {features.inProgress.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {features.planned.length > 0 && (
          <>
            <h3 style={{ color: '#94a3b8', marginTop: '1.5rem' }}>○ Fonctionnalités planifiées :</h3>
            <ul>
              {features.planned.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="project-section">
        <h2>Missions Principales</h2>
        <ul>
          <li>Conception du gameplay et des mécaniques narratives</li>
          <li>Programmation des systèmes de jeu en C#</li>
          <li>Intégration et gestion du son avec FMOD</li>
          <li>Création et optimisation des environnements 3D</li>
          <li>Gestion de version et collaboration avec Git/GitHub</li>
          <li>Tests et ajustements du gameplay</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Compétences Mobilisées</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Compétences Techniques</h3>
            <ul>
              <li>Programmation C# avancée dans Unity</li>
              <li>Intégration audio avec FMOD</li>
              <li>Modélisation et optimisation 3D avec Blender</li>
              <li>Level design et narration environnementale</li>
              <li>Gestion de version avec Git</li>
              <li>Optimisation des performances</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Compétences Transversales</h3>
            <ul>
              <li>Gestion de projet agile avec Jira</li>
              <li>Travail en équipe multidisciplinaire</li>
              <li>Recherche documentaire sur Alzheimer</li>
              <li>Communication et présentation de projet</li>
              <li>Résolution de problèmes complexes</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Compétences Humaines</h3>
            <ul>
              <li>Empathie et sensibilité</li>
              <li>Travail d'équipe</li>
              <li>Créativité narrative</li>
              <li>Gestion du stress</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Apports Académiques</h2>
        <p>Ce projet s'inscrit dans le cadre du BUT Informatique Graphique et mobilise de nombreuses compétences acquises durant la formation :</p>
        <ul>
          <li><strong>Développement de jeux vidéo :</strong> Application des compétences en programmation gameplay et moteur Unity</li>
          <li><strong>Gestion de projet :</strong> Organisation du travail en équipe et respect du planning</li>
          <li><strong>Design sonore :</strong> Utilisation professionnelle de FMOD pour une ambiance immersive</li>
          <li><strong>Modélisation 3D :</strong> Création d'environnements réalistes et optimisés</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">Unity 6</span>
          <span className="tech-tag">C#</span>
          <span className="tech-tag">FMOD</span>
          <span className="tech-tag">Blender</span>
          <span className="tech-tag">GitHub</span>
          <span className="tech-tag">Jira</span>
        </div>
      </section>
    </ProjectLayout>
  );
}