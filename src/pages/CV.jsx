import '../styles/CV.css';

export default function CV() {
  return (
    <section className="cv">
      <div className="cv-header">
        <h1>CV - Clément Bounaix</h1>
        <a href="#" className="download-btn">⬇️ Télécharger le CV</a>
      </div>

      <div className="cv-content">
        <div className="cv-section">
          <h2>Formation</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Formation 1</h3>
              <span className="date">Date</span>
            </div>
            <p className="institution">Institution</p>
            <p>Description de votre formation.</p>
          </div>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Formation 2</h3>
              <span className="date">Date</span>
            </div>
            <p className="institution">Institution</p>
            <p>Description de votre formation.</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Expérience</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Expérience 1</h3>
              <span className="date">Date</span>
            </div>
            <p className="institution">Entreprise / Projet</p>
            <ul>
              <li>Détail de l'expérience</li>
              <li>Détail de l'expérience</li>
              <li>Détail de l'expérience</li>
            </ul>
          </div>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Expérience 2</h3>
              <span className="date">Date</span>
            </div>
            <p className="institution">Entreprise / Projet</p>
            <ul>
              <li>Détail de l'expérience</li>
              <li>Détail de l'expérience</li>
              <li>Détail de l'expérience</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Certifications & Formations Supplémentaires</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>Certification 1</h3>
              <span className="date">Date</span>
            </div>
            <ul>
              <li>Détail de la certification</li>
              <li>Détail de la certification</li>
              <li>Détail de la certification</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}