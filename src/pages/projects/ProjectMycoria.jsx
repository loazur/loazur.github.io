import ProjectLayout from '../../layout/ProjectLayout';
import mycoria1 from '../../assets/ProjectMycoria/project-mycoria-picture4.webp';
import mycoria2 from '../../assets/ProjectMycoria/project-mycoria-picture2.webp';
import mycoria3 from '../../assets/ProjectMycoria/project-mycoria-picture3.webp';
import mycoria4 from '../../assets/ProjectMycoria/project-mycoria-picture1.webp';
import mycoria5 from '../../assets/ProjectMycoria/project-mycoria-picture5.webp';
import mycoria6 from '../../assets/ProjectMycoria/project-mycoria-picture6.webp';

export default function ProjectMycoria() {
  const projectData = {
    title: "Project Mycoria",
    tags: ["Unreal Engine 5", "Page en cours d'écriture"],
    date: "Janv. 2025 - Juin. 2025",
    mainImage: {
      src: mycoria1,
      alt: "Project Mycoria - Menu principal"
    },
    galleryImages: [
      { src: mycoria2, alt: "Project Mycoria - Synopsis et crédits" },
      { src: mycoria3, alt: "Environnement hivernal du Livradois-Forez" },
      { src: mycoria4, alt: "Personnage et système d'inventaire" },
      { src: mycoria5, alt: "Système de vie et combat" },
      { src: mycoria6, alt: "Vue aérienne de la map" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          <strong>Project Mycoria</strong> est un jeu 3D d'exploration et narratif se déroulant dans la vallée du 
          <strong> Livradois-Forez</strong>, durant l'hiver.
        </p>
        <p>
          Incarnez <strong>Vincent Morel</strong>, agent de la DGSI, venu enquêter sur une 
          <strong> étrange maladie</strong> trouvant son origine dans la mystérieuse entreprise pharmaceutique 
          <strong> Mycoria</strong>.
        </p>
        <p>
          Le jeu permet de traverser le parc naturel du Livradois-Forez tout en suivant une histoire originale 
          inspirée par l'affaire du <strong>"pain maudit"</strong>, mystérieux événement ayant frappé le village 
          de Pont-Saint-Esprit, dans le Gard durant l'été 1951.
        </p>
      </section>

      <section className="project-section">
        <h2>Environnement et Ambiance</h2>
        <p>
          Le jeu se déroule dans un environnement hivernal fidèle au parc naturel du Livradois-Forez :
        </p>
        <ul>
          <li>Forêts enneigées et paysages montagneux</li>
          <li>Routes et infrastructures réalistes</li>
          <li>Bâtiments industriels mystérieux (usine Mycoria)</li>
          <li>Villages et hameaux isolés</li>
          <li>Ambiance sonore immersive (son et musique recommandés via casque)</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Équipe de Développement</h2>
        <p><strong>Rubysoft</strong> - Équipe de 6 développeurs :</p>
        <ul>
          <li><strong>Lucas CONTRERAS-HODAPP</strong> - Chef de projet / Développeur</li>
          <li><strong>Clément BOUNAIX</strong> - Gameplay Programmer</li>
          <li><strong>Lucas CHAPON</strong> - Scénariste et Builder</li>
          <li><strong>Clément ROUVEURE</strong> - Builder</li>
          <li><strong>Maël MACE</strong> - Scénariste et Programmer</li>
          <li><strong>Mathias BONNEFOUX</strong> - Sound Designer</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">Unreal Engine 5</span>
          <span className="tech-tag">C++</span>
          <span className="tech-tag">Blueprints</span>
          <span className="tech-tag">Blender</span>
          <span className="tech-tag">GitLab</span>
          <span className="tech-tag">Photoshop</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Compétences développées</h2>
        <ul>
          <li>Développement de systèmes de gameplay en C++ et Blueprints</li>
          <li>Programmation de mécaniques de combat (tir, visée, rechargement)</li>
          <li>Gestion de l'inventaire et des objets ramassables</li>
          <li>Implémentation d'un système de santé et de dégâts</li>
          <li>Création de niveaux et level design</li>
          <li>Travail d'équipe et collaboration sur GitLab</li>
          <li>Optimisation des performances sur grand monde ouvert</li>
        </ul>
      </section>
    </ProjectLayout>
  );
}