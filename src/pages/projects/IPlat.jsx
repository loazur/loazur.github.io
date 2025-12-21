import '../../styles/ProjectDetail.css';
import { useLanguage } from '../../context/LanguageContext';
import ProjectLayout from '../../layout/ProjectLayout';

import IPlatMainPicture from '../../assets/IPlat/iplat-picture1.webp';
import IPlatPicture1 from '../../assets/IPlat/iplat-picture2.webp';
import IPlatPicture2 from '../../assets/IPlat/iplat-picture3.webp';
import IPlatPicture3 from '../../assets/IPlat/iplat-picture4.webp';
import IPlatPicture4 from '../../assets/IPlat/iplat-picture5.webp';

export default function IPlat() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "IPlat - Mon premier jeu vidéo",
      tags: ["Löve2D", "Plateforme 2D"],
      date: "Oct. 2021",
      github: "GitHub",
      itch: "Itch.io",
      mainImageAlt: "IPlat - Capture d'écran principale",
      
      context: "Contexte",
      contextText1: "IPlat est le premier jeu que j'ai créé en 3ème. Il s'agit d'un jeu de plateforme en 2D assez simple.",
      contextText2: "Le joueur a pour objectif d'avancer dans chaque écran jusqu'à la fin du jeu.",
      contextText3: "Récupérer des pièces apporte un point de vie en plus.",
      contextText4: "Lorsque le joueur n'a plus de point de vie il est téléporté au début de l'écran actuel.",
      problem: "Problématique :",
      problemText: "Comment créer un court jeu de plateforme sans connaissance en moins d'une semaine ?",
      
      objectives: "Objectifs",
      obj1: "Découvrir et maîtriser les bases du framework Löve2D",
      obj2: "Apprendre le langage de programmation Lua",
      obj3: "Comprendre les mécaniques fondamentales d'un jeu de plateforme (physique, collisions, inputs)",
      obj4: "Livrer un jeu jouable et fonctionnel dans un délai court",
      obj5: "Publier mon premier jeu sur une plateforme de distribution (Itch.io)",
      
      missions: "Missions Principales",
      mission1: "Conception et design du gameplay",
      mission2: "Développement du moteur de physique et des collisions",
      mission3: "Programmation des contrôles et de la gestion des inputs",
      mission4: "Création des niveaux et du level design",
      mission5: "Tests et débogage",
      mission6: "Publication sur Itch.io",
      
      skills: "Compétences Mobilisées",
      technicalSkills: "Compétences Techniques",
      tech1: "Programmation en Lua",
      tech2: "Développement de jeux avec Löve2D",
      tech3: "Gestion de la physique 2D",
      tech4: "Système de collisions",
      tech5: "Gestion des inputs utilisateur",
      tech6: "Level design basique",
      
      transversalSkills: "Compétences Transversales",
      trans1: "Gestion de projet en autonomie",
      trans2: "Respect des délais courts",
      trans3: "Résolution de problèmes",
      trans4: "Auto-formation",
      trans5: "Documentation technique",
      
      humanSkills: "Compétences Humaines",
      human1: "Autonomie",
      human2: "Persévérance",
      human3: "Créativité",
      
      academic: "Apports Académiques",
      academicText: "Bien que réalisé en dehors du cadre académique, ce projet m'a permis d'acquérir des compétences essentielles qui m'ont été utiles dans ma formation en BUT Informatique Graphique :",
      acad1Title: "Programmation orientée objet :",
      acad1Text: "Application des principes POO en Lua",
      acad2Title: "Algorithmique :",
      acad2Text: "Résolution de problèmes de physique et de collisions",
      acad3Title: "Gestion de projet :",
      acad3Text: "Organisation du travail et respect des délais",
      acad4Title: "Développement de jeux vidéo :",
      acad4Text: "Première expérience concrète dans le domaine",
      
      conclusion: "Conclusion et Apprentissages",
      conclusionText1: "IPlat fut une réussite pour ce que j'ai pu apprendre lors de la création, mais d'un autre point de vue, le jeu est assez court, et utilise que des assets trouvés sur Internet, donc j'aurais pu faire mieux.",
      conclusionText2: "Ce projet m'a conforté dans ma passion pour le développement de jeux vidéo et m'a donné l'envie de continuer à créer et à apprendre.",
      
      technologies: "Technologies et Outils Utilisés"
    },
    en: {
      title: "IPlat - My First Video Game",
      tags: ["Löve2D", "2D Platformer"],
      date: "Oct. 2021",
      github: "GitHub",
      itch: "Itch.io",
      mainImageAlt: "IPlat - Main screenshot",
      
      context: "Context",
      contextText1: "IPlat is the first game I created in 9th grade. It's a fairly simple 2D platformer game.",
      contextText2: "The player's objective is to progress through each screen until the end of the game.",
      contextText3: "Collecting coins grants an extra life point.",
      contextText4: "When the player has no more life points, they are teleported to the beginning of the current screen.",
      problem: "Problem Statement:",
      problemText: "How to create a short platformer game with no prior knowledge in less than a week?",
      
      objectives: "Objectives",
      obj1: "Discover and master the basics of the Löve2D framework",
      obj2: "Learn the Lua programming language",
      obj3: "Understand the fundamental mechanics of a platformer game (physics, collisions, inputs)",
      obj4: "Deliver a playable and functional game within a short timeframe",
      obj5: "Publish my first game on a distribution platform (Itch.io)",
      
      missions: "Main Missions",
      mission1: "Gameplay conception and design",
      mission2: "Physics engine and collision development",
      mission3: "Control programming and input management",
      mission4: "Level creation and level design",
      mission5: "Testing and debugging",
      mission6: "Publication on Itch.io",
      
      skills: "Skills Utilized",
      technicalSkills: "Technical Skills",
      tech1: "Lua programming",
      tech2: "Game development with Löve2D",
      tech3: "2D physics management",
      tech4: "Collision system",
      tech5: "User input management",
      tech6: "Basic level design",
      
      transversalSkills: "Transversal Skills",
      trans1: "Autonomous project management",
      trans2: "Meeting tight deadlines",
      trans3: "Problem solving",
      trans4: "Self-learning",
      trans5: "Technical documentation",
      
      humanSkills: "Soft Skills",
      human1: "Autonomy",
      human2: "Perseverance",
      human3: "Creativity",
      
      academic: "Academic Contributions",
      academicText: "Although created outside the academic framework, this project allowed me to acquire essential skills that were useful in my Computer Graphics Bachelor program:",
      acad1Title: "Object-oriented programming:",
      acad1Text: "Application of OOP principles in Lua",
      acad2Title: "Algorithms:",
      acad2Text: "Solving physics and collision problems",
      acad3Title: "Project management:",
      acad3Text: "Work organization and deadline compliance",
      acad4Title: "Video game development:",
      acad4Text: "First concrete experience in the field",
      
      conclusion: "Conclusion and Learnings",
      conclusionText1: "IPlat was a success in terms of what I learned during its creation, but from another point of view, the game is quite short, and only uses assets found on the Internet, so I could have done better.",
      conclusionText2: "This project reinforced my passion for video game development and gave me the desire to continue creating and learning.",
      
      technologies: "Technologies and Tools Used"
    }
  };

  const t = translations[language];

  const projectData = {
    title: t.title,
    tags: t.tags,
    date: t.date,
    links: [
      { url: "https://github.com/loazur/IPlat", label: t.github, primary: false },
      { url: "https://loazur.itch.io/iplat", label: t.itch, primary: true }
    ],
    mainImage: {
      src: IPlatMainPicture,
      alt: t.mainImageAlt
    },
    galleryImages: [
      { src: IPlatPicture1, alt: 'IPlat - Picture 1' },
      { src: IPlatPicture2, alt: 'IPlat - Picture 2' },
      { src: IPlatPicture3, alt: 'IPlat - Picture 3' },
      { src: IPlatPicture4, alt: 'IPlat - Picture 4' }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>{t.context}</h2>
        <p>
          {t.contextText1} <br/>
          {t.contextText2} <br/>
          {t.contextText3} <br/>
          {t.contextText4}
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
        <h2>{t.conclusion}</h2>
        <p>
          {t.conclusionText1} <br/>
          <br/>
          {t.conclusionText2}
        </p>
      </section>

      <section className="project-section">
        <h2>{t.technologies}</h2>
        <div className="tech-tags">
          <span className="tech-tag">Lua</span>
          <span className="tech-tag">Löve2D</span>
          <span className="tech-tag">Tiled</span>
          <span className="tech-tag">GitHub</span>
          <span className="tech-tag">Itch.io</span>
        </div>
      </section>
    </ProjectLayout>
  );
}