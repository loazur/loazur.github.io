import '../styles/About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>À propos de moi</h1>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Qui suis-je ?</h2>
          <p>
            Etudiant en BUT Informatique à l'IUT du Puy-en-Velay.
          </p>
        </div>

        <div className="about-section">
          <h2>Mon parcours</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Expérience 1</h3>
                <p className="date">Date • Lieu</p>
                <p>Description de cette expérience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Expérience 2</h3>
                <p className="date">Date • Lieu</p>
                <p>Description de cette expérience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Expérience 3</h3>
                <p className="date">Date • Lieu</p>
                <p>Description de cette expérience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Compétences Techniques</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3>Catégorie 1</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span>Compétence 1</span>
                  <div className="bar"><div style={{width: '80%'}}></div></div>
                </div>
                <div className="skill-bar">
                  <span>Compétence 2</span>
                  <div className="bar"><div style={{width: '75%'}}></div></div>
                </div>
                <div className="skill-bar">
                  <span>Compétence 3</span>
                  <div className="bar"><div style={{width: '85%'}}></div></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Catégorie 2</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span>Compétence 1</span>
                  <div className="bar"><div style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-bar">
                  <span>Compétence 2</span>
                  <div className="bar"><div style={{width: '70%'}}></div></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Domaines de Spécialité</h3>
              <div className="skill-tags">
                <span className="tag">Compétence 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
