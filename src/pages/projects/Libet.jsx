import '../../styles/ProjectDetail.css';
import { useLanguage } from '../../context/LanguageContext';
import ProjectLayout from '../../layout/ProjectLayout';
import LibetMainPicture from '../../assets/Libet/libet-dev-picture1.webp';
import LibetPicture2 from '../../assets/Libet/libet-dev-picture2.webp';
import LibetPicture3 from '../../assets/Libet/libet-dev-picture3.webp';
import LibetPicture4 from '../../assets/Libet/libet-dev-picture4.webp';
import LibetPicture5 from '../../assets/Libet/libet-dev-picture5.webp';
import LibetPicture6 from '../../assets/Libet/libet-dev-picture6.webp';

export default function Libet() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "LIBET - Jeu narratif en développement",
      tags: ["Unity 6", "Jeu Narratif", "Open Source"],
      date: "Oct. 2025 - Juin 2026",
      github: "GitHub",
      mainImageAlt: "LIBET - Salle à manger",
      
      context: "Contexte",
      contextText1: "LIBET est un jeu 3D à la première personne développé dans le cadre de ma formation en BUT Informatique Graphique.",
      contextText2: "Le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.",
      contextText3: "Le jeu explore les thèmes de la mémoire, de l'identité et de la perception à travers une expérience narrative immersive.",
      problem: "Problématique :",
      problemText: "Comment représenter de manière sensible et réaliste les effets de la maladie d'Alzheimer dans un jeu vidéo ?",
      
      objectives: "Objectifs",
      obj1: "Créer une expérience narrative émotionnelle et immersive",
      obj2: "Représenter avec justesse les effets de la maladie d'Alzheimer",
      obj3: "Développer des mécaniques de jeu innovantes liées à la perte de mémoire",
      obj4: "Maîtriser Unity 6 et l'intégration audio avec FMOD",
      obj5: "Travailler en équipe sur un projet de grande envergure",
      
      missions: "Missions Principales",
      mission1: "Conception du gameplay et des mécaniques narratives",
      mission2: "Programmation des systèmes de jeu en C#",
      mission3: "Intégration et gestion du son avec FMOD",
      mission4: "Création et optimisation des environnements 3D",
      mission5: "Gestion de version et collaboration avec Git/GitHub",
      mission6: "Tests et ajustements du gameplay",
      
      skills: "Compétences Mobilisées",
      technicalSkills: "Compétences Techniques",
      tech1: "Programmation C# avancée dans Unity",
      tech2: "Intégration audio avec FMOD",
      tech3: "Modélisation et optimisation 3D avec Blender",
      tech4: "Level design et narration environnementale",
      tech5: "Gestion de version avec Git",
      tech6: "Optimisation des performances",
      
      transversalSkills: "Compétences Transversales",
      trans1: "Gestion de projet agile avec Jira",
      trans2: "Travail en équipe multidisciplinaire",
      trans3: "Recherche documentaire sur Alzheimer",
      trans4: "Communication et présentation de projet",
      trans5: "Résolution de problèmes complexes",
      
      humanSkills: "Compétences Humaines",
      human1: "Empathie et sensibilité",
      human2: "Travail d'équipe",
      human3: "Créativité narrative",
      human4: "Gestion du stress",
      
      academic: "Apports Académiques",
      academicText: "Ce projet s'inscrit dans le cadre du BUT Informatique Graphique et mobilise de nombreuses compétences acquises durant la formation :",
      acad1Title: "Développement de jeux vidéo :",
      acad1Text: "Application des compétences en programmation gameplay et moteur Unity",
      acad2Title: "Gestion de projet :",
      acad2Text: "Organisation du travail en équipe et respect du planning",
      acad3Title: "Design sonore :",
      acad3Text: "Utilisation professionnelle de FMOD pour une ambiance immersive",
      acad4Title: "Modélisation 3D :",
      acad4Text: "Création d'environnements réalistes et optimisés",
      
      progress: "État d'Avancement",
      progressText: "Le projet est actuellement en développement actif. Voici la progression des fonctionnalités :",
      progressComplete: "Fonctionnalités terminées :",
      progressInProgress: "Fonctionnalités en cours :",
      progressPlanned: "Fonctionnalités planifiées :",
      
      technologies: "Technologies et Outils Utilisés"
    },
    en: {
      title: "LIBET - Narrative Game in development",
      tags: ["Unity 6", "Narrative Game", "Open Source"],
      date: "Oct. 2025 - June 2026",
      github: "GitHub",
      mainImageAlt: "LIBET - Dining room",
      
      context: "Context",
      contextText1: "LIBET is a first-person 3D game developed as part of my Computer Graphics Bachelor program.",
      contextText2: "The player embodies 'Libet', an old man with Alzheimer's, living his life while gradually losing his mind.",
      contextText3: "The game explores themes of memory, identity and perception through an immersive narrative experience.",
      problem: "Problem Statement:",
      problemText: "How to represent the effects of Alzheimer's disease in a sensitive and realistic way in a video game?",
      
      objectives: "Objectives",
      obj1: "Create an emotional and immersive narrative experience",
      obj2: "Accurately represent the effects of Alzheimer's disease",
      obj3: "Develop innovative game mechanics related to memory loss",
      obj4: "Master Unity 6 and audio integration with FMOD",
      obj5: "Work as a team on a large-scale project",
      
      missions: "Main Missions",
      mission1: "Gameplay and narrative mechanics design",
      mission2: "Game systems programming in C#",
      mission3: "Sound integration and management with FMOD",
      mission4: "3D environment creation and optimization",
      mission5: "Version control and collaboration with Git/GitHub",
      mission6: "Gameplay testing and adjustments",
      
      skills: "Skills Utilized",
      technicalSkills: "Technical Skills",
      tech1: "Advanced C# programming in Unity",
      tech2: "Audio integration with FMOD",
      tech3: "3D modeling and optimization with Blender",
      tech4: "Level design and environmental storytelling",
      tech5: "Version control with Git",
      tech6: "Performance optimization",
      
      transversalSkills: "Transversal Skills",
      trans1: "Agile project management with Jira",
      trans2: "Multidisciplinary teamwork",
      trans3: "Documentary research on Alzheimer's",
      trans4: "Project communication and presentation",
      trans5: "Complex problem solving",
      
      humanSkills: "Soft Skills",
      human1: "Empathy and sensitivity",
      human2: "Teamwork",
      human3: "Narrative creativity",
      human4: "Stress management",
      
      academic: "Academic Contributions",
      academicText: "This project is part of the Computer Graphics Bachelor program and mobilizes many skills acquired during the training:",
      acad1Title: "Video game development:",
      acad1Text: "Application of gameplay programming and Unity engine skills",
      acad2Title: "Project management:",
      acad2Text: "Team work organization and schedule compliance",
      acad3Title: "Sound design:",
      acad3Text: "Professional use of FMOD for an immersive atmosphere",
      acad4Title: "3D modeling:",
      acad4Text: "Creation of realistic and optimized environments",
      
      progress: "Current Progress",
      progressText: "The project is currently in active development. Here is the feature progress:",
      progressComplete: "Completed features:",
      progressInProgress: "Features in progress:",
      progressPlanned: "Planned features:",
      
      technologies: "Technologies and Tools Used"
    }
  };

  const t = translations[language];

  // Liste des fonctionnalités
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

  const projectData = {
    title: t.title,
    tags: t.tags,
    date: t.date,
    links: [
      { url: "https://github.com/loazur/LIBET", label: t.github, primary: true }
    ],
    mainImage: {
      src: LibetMainPicture,
      alt: t.mainImageAlt
    },
    galleryImages: [
      { src: LibetPicture2, alt: 'LIBET - Autre vue de la salle à manger' },
      { src: LibetPicture3, alt: 'LIBET - Menu principal du jeu' },
      { src: LibetPicture4, alt: 'LIBET - Configuration des touches' },
      { src: LibetPicture5, alt: 'LIBET - Interaction avec un fauteuil' },
      { src: LibetPicture6, alt: 'LIBET - Scène de test Unity' },
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>{t.context}</h2>
        <p>
          {t.contextText1} <br/>
          {t.contextText2} <br/>
          {t.contextText3}
        </p>
        <p>
          <br/>
          <strong>{t.problem}</strong> {t.problemText}
        </p>
      </section>

      <section className="project-section">
        <h2>{t.objectives}</h2>
        <ul>
          <li>{t.obj1}</li>
          <li>{t.obj2}</li>
          <li>{t.obj3}</li>
          <li>{t.obj4}</li>
          <li>{t.obj5}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Équipe de Développement</h2>
        <p><strong>LIBET Team</strong> - Équipe de 5 développeurs :</p>
        <ul>
          <li><strong>Clément BOUNAIX</strong> - Responsable programmation - Programmeur</li>
          <li><strong>Nathanaël MORIT</strong> - Responsable modélisation - Modélisateur, Game designer</li>
          <li><strong>Morphée SEVESTRE</strong> - Modélisatrice, Game designer</li>
          <li><strong>Lucas CHAPON</strong> - Modélisateur</li>
          <li><strong>Lucas CONTRERAS-HODAPP</strong> - Programmeur</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t.progress}</h2>
        <p>{t.progressText}</p>
        
        {features.complete.length > 0 && (
          <>
            <h3 style={{ color: '#4ade80', marginTop: '1.5rem' }}>✓ {t.progressComplete}</h3>
            <ul>
              {features.complete.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {features.inProgress.length > 0 && (
          <>
            <h3 style={{ color: '#fbbf24', marginTop: '1.5rem' }}>⟳ {t.progressInProgress}</h3>
            <ul>
              {features.inProgress.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {features.planned.length > 0 && (
          <>
            <h3 style={{ color: '#94a3b8', marginTop: '1.5rem' }}>○ {t.progressPlanned}</h3>
            <ul>
              {features.planned.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="project-section">
        <h2>{t.missions}</h2>
        <ul>
          <li>{t.mission1}</li>
          <li>{t.mission2}</li>
          <li>{t.mission3}</li>
          <li>{t.mission4}</li>
          <li>{t.mission5}</li>
          <li>{t.mission6}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t.skills}</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{t.technicalSkills}</h3>
            <ul>
              <li>{t.tech1}</li>
              <li>{t.tech2}</li>
              <li>{t.tech3}</li>
              <li>{t.tech4}</li>
              <li>{t.tech5}</li>
              <li>{t.tech6}</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>{t.transversalSkills}</h3>
            <ul>
              <li>{t.trans1}</li>
              <li>{t.trans2}</li>
              <li>{t.trans3}</li>
              <li>{t.trans4}</li>
              <li>{t.trans5}</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>{t.humanSkills}</h3>
            <ul>
              <li>{t.human1}</li>
              <li>{t.human2}</li>
              <li>{t.human3}</li>
              <li>{t.human4}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>{t.academic}</h2>
        <p>{t.academicText}</p>
        <ul>
          <li><strong>{t.acad1Title}</strong> {t.acad1Text}</li>
          <li><strong>{t.acad2Title}</strong> {t.acad2Text}</li>
          <li><strong>{t.acad3Title}</strong> {t.acad3Text}</li>
          <li><strong>{t.acad4Title}</strong> {t.acad4Text}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t.technologies}</h2>
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