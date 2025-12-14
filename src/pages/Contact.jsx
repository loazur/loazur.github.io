import { useLanguage } from '../context/LanguageContext';
import '../styles/Contact.css';
import emailIcon from '../assets/icons/icon-mail.webp';
import linkedinIcon from '../assets/icons/icon-linkedin.webp';
import githubIcon from '../assets/icons/icon-github.webp';
import itchIcon from '../assets/icons/icon-itchio.webp';

export default function Contact() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: 'Me Contacter',
      subtitle: "N'hésitez pas à me contacter via les plateformes ci-dessous !",
      email: 'Email',
      linkedin: 'LinkedIn',
      linkedinProfile: 'Profil LinkedIn',
      github: 'GitHub',
      githubProfile: 'Profil GitHub',
      itch: 'Itch.io',
      itchProfile: 'Profil Itch.io'
    },
    en: {
      title: 'Contact Me',
      subtitle: "Feel free to contact me through the platforms below!",
      email: 'Email',
      linkedin: 'LinkedIn',
      linkedinProfile: 'LinkedIn Profile',
      github: 'GitHub',
      githubProfile: 'GitHub Profile',
      itch: 'Itch.io',
      itchProfile: 'Itch.io Profile'
    }
  };

  const t = translations[language];

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:clement.bounaix@gmail.com" className="info-card">
            <div className="info-icon">
              <img src={emailIcon} alt={t.email} />
            </div>
            <div className="info-content">
              <h3>{t.email}</h3>
              <p>clement.bounaix@gmail.com</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/clement-bounaix" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={linkedinIcon} alt={t.linkedin} />
            </div>
            <div className="info-content">
              <h3>{t.linkedin}</h3>
              <p>{t.linkedinProfile}</p>
            </div>
          </a>
          
          <a href="https://github.com/loazur" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={githubIcon} alt={t.github} />
            </div>
            <div className="info-content">
              <h3>{t.github}</h3>
              <p>{t.githubProfile}</p>
            </div>
          </a>
          
          <a href="https://loazur.itch.io" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <img src={itchIcon} alt={t.itch} />
            </div>
            <div className="info-content">
              <h3>{t.itch}</h3>
              <p>{t.itchProfile}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
