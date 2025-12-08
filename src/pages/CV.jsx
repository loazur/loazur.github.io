import '../styles/CV.css';

export default function CV() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Clément BOUNAIX.pdf';
    link.download = 'CV-Clement-Bounaix.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="cv">
      <div className="cv-header">
        <h1>Mon CV</h1>
        <button onClick={downloadCV} className="download-btn">
          ⬇ Télécharger mon CV
        </button>
      </div>

      <div className="cv-content">
        <section className="cv-section">
          <h2>Formation</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>BUT Informatique Graphique</h3>
              <span className="date">2024 - 2027</span>
            </div>
            <p className="institution">Université Clermont Auvergne - IUT Le Puy-en-Velay</p>
            <p>Programmation en C++, Bases de données, Gestion de projets, Moteurs Unreal Engine et Unity</p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>Baccalauréat général - Spécialités NSI, Anglais, Arts</h3>
              <span className="date">2021 - 2024</span>
            </div>
            <p className="institution">Lycée Simone Weil</p>
            <p>Mention Assez Bien</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Projets</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Programmation d'un jeu Unity - « LIBET »</h3>
              <span className="date">Oct. 2025 - Juin 2026</span>
            </div>
            <p className="institution">IUT Le Puy-en-Velay</p>
            <p>Jeu à la première personne, incarnez 'Libet' un vieil homme atteint d'Alzheimer, succombant peu à peu à sa maladie</p>
            <p><em>Utilisation d'Unity/C#, Gestion du projet avec Trello et Github, Répartition des tâches</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>Programmation d'un jeu Unreal Engine - « Project Mycoria »</h3>
              <span className="date">Janv. - Juin 2025</span>
            </div>
            <p className="institution">IUT Le Puy-en-Velay</p>
            <p>Conception d'un jeu narratif se déroulant dans le parc naturel du Livradois-Forez en Haute-Loire, commandé par l'Université elle même</p>
            <p><em>Gestion de version sur Github, Programmation en Blueprint, Optimisation d'objets 3D, Création de niveaux</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>Programmation et maintien d'un serveur Minecraft</h3>
              <span className="date">Juill. - Août 2021</span>
            </div>
            <p className="institution">Projet en équipe hors du cadre académique</p>
            <p>Développement et gestion d'un serveur multijoueur axé « Minijeux ». Et organisation d'un événement en jeu avec argent à gagner.</p>
            <p><em>Travail d'équipe, Gestion d'événements en jeu, Programmation en Java</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>Conception d'un jeu 2D - « IPlat »</h3>
              <span className="date">Oct. 2021</span>
            </div>
            <p className="institution">Projet en autodidacte</p>
            <p>Création d'un court jeu de plateforme en 1 semaine</p>
            <p><em>Utilisation du framework Löve2D et du Lua, Gestion d'assets, Création de maps avec Tiled</em></p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Compétences Techniques</h2>
          <div className="skill-bars">
            <div className="skill-bar">
              <span>Unity / C#</span>
              <div className="bar"><div style={{width: '85%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Unreal Engine / C++ / Blueprints</span>
              <div className="bar"><div style={{width: '80%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Java</span>
              <div className="bar"><div style={{width: '75%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Lua / Löve2D</span>
              <div className="bar"><div style={{width: '70%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Git / GitHub</span>
              <div className="bar"><div style={{width: '85%'}}></div></div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Langues</h2>
          <div className="cv-item">
            <p><strong>Français :</strong> Langue maternelle</p>
            <p><strong>Anglais :</strong> Niveau B2</p>
          </div>
        </section>
      </div>
    </section>
  );
}