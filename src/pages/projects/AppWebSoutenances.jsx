import ProjectLayout from '../../layout/ProjectLayout';
import gestionsoutenances1 from '../../assets/AppWebSoutenances/gestion-soutenances-picture1.webp';
import gestionsoutenances2 from '../../assets/AppWebSoutenances/gestion-soutenances-picture2.webp';
import gestionsoutenances3 from '../../assets/AppWebSoutenances/gestion-soutenances-picture3.webp';
import gestionsoutenances4 from '../../assets/AppWebSoutenances/gestion-soutenances-picture4.webp';
import gestionsoutenances5 from '../../assets/AppWebSoutenances/gestion-soutenances-picture5.webp';
import gestionsoutenances6 from '../../assets/AppWebSoutenances/gestion-soutenances-picture6.webp';

export default function AppWebSoutenances() {
  const projectData = {
    title: "Application web de gestion de soutenances",
    tags: ["PHP", "Page en cours d'écriture"],
    date: "Oct. 2025",
    mainImage: {
      src: gestionsoutenances1,
      alt: "App Soutenances - Gestion des étudiants"
    },
    galleryImages: [
      { src: gestionsoutenances2, alt: "Gestion des grilles d'évaluation" },
      { src: gestionsoutenances3, alt: "Diffusion des résultats" },
      { src: gestionsoutenances4, alt: "Gestion des évaluations IUT" },
      { src: gestionsoutenances5, alt: "Résumé des grilles enseignants" },
      { src: gestionsoutenances6, alt: "Page de connexion UCA" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Projet d'application web permettant de gérer les soutenances d'étudiants des 2ème et 3ème année
          du BUT Informatique de l'IUT du Puy-en-Velay.
        </p>
        <p>
          L'objectif est de remplacer l'actuel système utilisé par le secrétariat et les professeurs
          en proposant une solution moderne et ergonomique pour la gestion complète des soutenances,
          des évaluations et de la diffusion des résultats.
        </p>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li><strong>Gestion des étudiants :</strong> Organisation des soutenances par année (BUT2/BUT3) avec attribution des tuteurs et enseignants secondaires</li>
          <li><strong>Gestion des grilles d'évaluation :</strong> Création et modification de grilles personnalisées selon le type de soutenance (Portfolio, Stage, Rapport)</li>
          <li><strong>Planification :</strong> Attribution des salles, dates et horaires pour chaque soutenance</li>
          <li><strong>Système de notation :</strong> Interface enseignant pour remplir les grilles et évaluer les étudiants</li>
          <li><strong>Diffusion des résultats :</strong> Système de publication automatique avec gestion des statuts et envoi d'emails de notification</li>
          <li><strong>Gestion des ressources :</strong> Administration des salles, enseignants et modules de cours</li>
          <li><strong>Authentification UCA :</strong> Connexion sécurisée via les identifiants universitaires</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Rôles et permissions</h2>
        <p>L'application propose différents niveaux d'accès :</p>
        <ul>
          <li><strong>Étudiants :</strong> Consultation de leurs soutenances et résultats</li>
          <li><strong>Enseignants :</strong> Remplissage des grilles d'évaluation et notation</li>
          <li><strong>Secrétariat :</strong> Gestion complète des soutenances, plannings et diffusion des résultats</li>
          <li><strong>Administration :</strong> Gestion des ressources (salles, grilles, modules)</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Contexte du projet</h2>
        <p>
          Ce projet a été développé dans le cadre de ma formation en BUT Informatique à l'IUT du Puy-en-Velay.
          Il répond à un besoin réel du département pour moderniser la gestion des soutenances de stage et de portfolio.
        </p>
        <p>
          L'application a été conçue en collaboration avec le secrétariat et les enseignants pour s'adapter
          parfaitement aux processus existants tout en apportant des améliorations ergonomiques significatives.
        </p>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">PHP</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">HTML/CSS</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}