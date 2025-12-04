import '../styles/CV.css';

export default function CV() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Clément BOUNAIX.pdf';  // ← Change avec le nom exact de ton fichier
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
        <div className="cv-section">
          <h2>Formation</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>BUT Informatique Graphique</h3>
              <span className="date">2024 - 2027</span>
            </div>
            <p className="institution">Université Clermont Auvergne • IUT du Puy-en-Velay</p>
            <p>Formation complète en développement de jeux vidéo, programmation et graphique 3D.</p>
          </div>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Baccalauréat Général - Spécialités NSI, Anglais, Arts</h3>
              <span className="date">2021 - 2024</span>
            </div>
            <p className="institution">Lycée Simone Weil</p>
            <p>Mention Assez Bien</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Compétences Techniques</h2>
          <div className="cv-item">
            <h3>Programmation de Jeux Vidéo</h3>
            <ul>
              <li>Moteurs : Unreal Engine, Unity</li>
              <li>Langages : C#, C++</li>
              <li>Optimisations, Correction de bugs, Intégration d'assets</li>
              <li>Gestion des tâches avec méthode SCRUM, Jira et Trello</li>
              <li>Création et organisation d'événements en équipe</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Qualités Humaines</h2>
          <div className="cv-item">
            <ul>
              <li>Écoute, compréhension et traduction d'une intention de design en code</li>
              <li>Esprit d'équipe et collaboration efficace</li>
              <li>Adaptabilité aux changements techniques, ouverture aux propositions</li>
              <li>Respect des délais et priorités des tâches</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Langues</h2>
          <div className="cv-item">
            <div className="skill-bars">
              <div className="skill-bar">
                <span>Français</span>
                <div className="bar"><div style={{width: '100%'}}></div></div>
              </div>
              <div className="skill-bar">
                <span>Anglais</span>
                <div className="bar"><div style={{width: '85%'}}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h2>Centres d'Intérêt</h2>
          <div className="cv-item">
            <p><strong>Exploration urbaine & randonnée :</strong> Curieux de découvrir des endroits abandonnés entre amis.</p>
            <p><strong>Adepte de jeux vidéo :</strong> Compétiteur assidu passionné par les jeux solo et multijoueur.</p>
            <p><strong>Littérature japonaise :</strong> Aim surtout les univers bien construits traitant de concepts originaux, comme exemple le voyage dans le temps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}