import '../../styles/ProjectDetail.css';
import ProjectLayout from '../../layout/ProjectLayout';

import IPlatMainPicture from '../../assets/IPlat/iplat-picture1.webp';
import IPlatPicture1 from '../../assets/IPlat/iplat-picture2.webp';
import IPlatPicture2 from '../../assets/IPlat/iplat-picture3.webp';
import IPlatPicture3 from '../../assets/IPlat/iplat-picture4.webp';
import IPlatPicture4 from '../../assets/IPlat/iplat-picture5.webp';

export default function IPlat() {
  const projectData = {
    title: "IPlat - Mon premier jeu vidéo",
    tags: ["Löve2D", "Plateforme 2D"],
    date: "Oct. 2021",
    links: [
      { url: "https://github.com/loazur/IPlat", label: "GitHub", primary: false },
      { url: "https://loazur.itch.io/iplat", label: "Itch.io", primary: true }
    ],
    mainImage: {
      src: IPlatMainPicture,
      alt: "IPlat - Capture d'écran principale"
    },
    galleryImages: [
      { src: IPlatPicture1, alt: 'IPlat - Gameplay niveau 1' },
      { src: IPlatPicture2, alt: 'IPlat - Gameplay niveau 2' },
      { src: IPlatPicture3, alt: 'IPlat - Gameplay niveau 3' },
      { src: IPlatPicture4, alt: 'IPlat - Gameplay niveau 4' }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          IPlat est le premier jeu que j'ai créé en 3ème. Il s'agit d'un jeu de plateforme en 2D assez simple. <br/>
          Le joueur a pour objectif d'avancer dans chaque écran jusqu'à la fin du jeu. <br/>
          Récupérer des pièces apporte un point de vie en plus. <br/>
          Lorsque le joueur n'a plus de point de vie il est téléporté au début de l'écran actuel.
        </p>
        <p>
          <br/>
          <strong>Problématique :</strong> Comment créer un court jeu de plateforme sans connaissance en moins d'une semaine ?
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Découvrir et maîtriser les bases du framework Löve2D</li>
          <li>Apprendre le langage de programmation Lua</li>
          <li>Comprendre les mécaniques fondamentales d'un jeu de plateforme (physique, collisions, inputs)</li>
          <li>Livrer un jeu jouable et fonctionnel dans un délai court</li>
          <li>Publier mon premier jeu sur une plateforme de distribution (Itch.io)</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Missions Principales</h2>
        <ul>
          <li>Conception et design du gameplay</li>
          <li>Développement du moteur de physique et des collisions</li>
          <li>Programmation des contrôles et de la gestion des inputs</li>
          <li>Création des niveaux et du level design</li>
          <li>Tests et débogage</li>
          <li>Publication sur Itch.io</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Compétences Mobilisées</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Compétences Techniques</h3>
            <ul>
              <li>Programmation en Lua</li>
              <li>Développement de jeux avec Löve2D</li>
              <li>Gestion de la physique 2D</li>
              <li>Système de collisions</li>
              <li>Gestion des inputs utilisateur</li>
              <li>Level design basique</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Compétences Transversales</h3>
            <ul>
              <li>Gestion de projet en autonomie</li>
              <li>Respect des délais courts</li>
              <li>Résolution de problèmes</li>
              <li>Auto-formation</li>
              <li>Documentation technique</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Compétences Humaines</h3>
            <ul>
              <li>Autonomie</li>
              <li>Persévérance</li>
              <li>Créativité</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Apports Académiques</h2>
        <p>Bien que réalisé en dehors du cadre académique, ce projet m'a permis d'acquérir des compétences essentielles qui m'ont été utiles dans ma formation en BUT Informatique Graphique :</p>
        <ul>
          <li><strong>Programmation orientée objet :</strong> Application des principes POO en Lua</li>
          <li><strong>Algorithmique :</strong> Résolution de problèmes de physique et de collisions</li>
          <li><strong>Gestion de projet :</strong> Organisation du travail et respect des délais</li>
          <li><strong>Développement de jeux vidéo :</strong> Première expérience concrète dans le domaine</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Conclusion et Apprentissages</h2>
        <p>
          IPlat fut une réussite pour ce que j'ai pu apprendre lors de la création, mais d'un autre point de vue, le jeu est assez court, et utilise que des assets trouvés sur Internet, donc j'aurais pu faire mieux.
        </p>
        <p>
          Ce projet m'a conforté dans ma passion pour le développement de jeux vidéo et m'a donné l'envie de continuer à créer et à apprendre.
        </p>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">Löve2D</span>
          <span className="tech-tag">Lua</span>
          <span className="tech-tag">Tiled</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}