import '../../styles/ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function IPlat() {
  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>IPlat - Mon premier jeu vidéo</h1>
        <div className="project-meta">
          <span className="tag">Löve2D</span>
          <span className="tag">Tiled</span>
          <span className="tag">Lua</span>
          <span className="tag">Open Source</span>
          <span className="tag">Plateforme 2D</span>
          <span className="date">2021</span>
        </div>
      </div>

      {/* Image principale du projet */}
      <div className="project-image">
        {/* TODO: Ajouter l'image principale du jeu */}
        <img src="/path/to/iplat-main.jpg" alt="IPlat - Capture d'écran principale" />
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Contexte</h2>
          <p>
            IPlat est le premier jeu que j'ai crée en 3ème. Il s'agit d'un jeu de platforme en 2D assez simple. <br></br>
            Le joueur a pour objectif d'avancer dans chaque niveaux jusqu'a la fin du jeu, sans mourir. <br></br>
            Il peut aussi récupérer des pièces pour ce avoir un point de vie en plus. <br></br>
          </p>
          <p>
            <br></br>
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
          <h2>Étapes de Réalisation</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Jour 1-2 : ...</h3>
              <p>...</p>
            </div>
            <div className="timeline-item">
              <h3>Jour 3-4 : ...</h3>
              <p>...</p>
            </div>
            <div className="timeline-item">
              <h3>Jour 5-6 : ...</h3>
              <p>...</p>
            </div>
            <div className="timeline-item">
              <h3>Jour 7 : ...</h3>
              <p>...</p>
            </div>
          </div>
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
                <li>Level design</li>
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
                <li>Capacité d'apprentissage rapide</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Technologies et Outils Utilisés</h2>
          <div className="tech-tags">
            <span className="tech-tag">Lua</span>
            <span className="tech-tag">Löve2D</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">GitHub</span>
            <span className="tech-tag">Itch.io</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Apports Académiques</h2>
          <p>
            Bien que réalisé en dehors du cadre académique, ce projet m'a permis d'acquérir des compétences 
            essentielles qui m'ont été utiles dans ma formation en BUT Informatique Graphique :
          </p>
          <ul>
            <li><strong>Programmation orientée objet :</strong> Application des principes POO en Lua</li>
            <li><strong>Algorithmique :</strong> Résolution de problèmes de physique et de collisions</li>
            <li><strong>Gestion de projet :</strong> Organisation du travail et respect des délais</li>
            <li><strong>Développement de jeux vidéo :</strong> Première expérience concrète dans le domaine</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Galerie</h2>
          <div className="project-gallery">
            {/* TODO: Ajouter minimum 4 images */}
            <img src="/path/to/iplat-screenshot-1.jpg" alt="IPlat - Gameplay" />
            <img src="/path/to/iplat-screenshot-2.jpg" alt="IPlat - Niveau 1" />
            <img src="/path/to/iplat-screenshot-3.jpg" alt="IPlat - Mécaniques de jeu" />
            <img src="/path/to/iplat-screenshot-4.jpg" alt="IPlat - Level design" />
          </div>
        </section>

        <section className="project-section">
          <h2>Conclusion et Apprentissages</h2>
          <p>
            IPlat fut une reussite pour ce que j'ai pu apprendre lors du la création, 
            mais d'un autre point de vu, le jeu est assez court, et utilise que des assets trouvé sur Internet.
          </p>
          <p>
            <strong>Principaux apprentissages :</strong>
          </p>
          <ul>
            <li>...</li>
          </ul>
          <p>
            Ce projet m'a conforté dans ma passion pour le développement de jeux vidéo et m'a donné 
            l'envie de continuer à créer et à apprendre.
          </p>
        </section>

        <section className="project-section">
          <h2>Liens du Projet</h2>
          <div className="project-links-section">
            <a 
              href="https://github.com/loazur/IPlat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="external-link"
            >
              GitHub →
            </a>
            <a 
              href="https://loazur.itch.io/iplat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="external-link"
            >
              Itch.io →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}