import '../styles/Contact.css';
import emailIcon from '../assets/icons/icon-mail.webp';
import linkedinIcon from '../assets/icons/icon-linkedin.webp';
import githubIcon from '../assets/icons/icon-github.webp';
import itchIcon from '../assets/icons/icon-itchio.webp';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Me Contacter</h1>
        <p>N'hésitez pas à me contacter via les plateformes ci-dessous !</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:clement.bounaix@gmail.com" className="info-card">
            <div className="info-icon">
              <img src={emailIcon} alt="Email" />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>clement.bounaix@gmail.com</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/clement-bounaix" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
            <div className="info-content">
              <h3>LinkedIn</h3>
              <p>Profil LinkedIn</p>
            </div>
          </a>
          
          <a href="https://github.com/loazur" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={githubIcon} alt="GitHub" />
            </div>
            <div className="info-content">
              <h3>GitHub</h3>
              <p>Profil GitHub</p>
            </div>
          </a>
          
          <a href="https://loazur.itch.io" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={itchIcon} alt="Itch.io" />
            </div>
            <div className="info-content">
              <h3>Itch.io</h3>
              <p>Profil Itch.io</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
