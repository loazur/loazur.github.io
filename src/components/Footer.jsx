import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/icons/icon-mail.webp';
import linkedinIcon from '../assets/icons/icon-linkedin.webp';
import githubIcon from '../assets/icons/icon-github.webp';
import itchIcon from '../assets/icons/icon-itchio.webp';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socials = [
    { href: 'mailto:clement.bounaix@gmail.com', icon: emailIcon, alt: 'Email', label: 'clement.bounaix@gmail.com' },
    { href: 'https://www.linkedin.com/in/clement-bounaix', icon: linkedinIcon, alt: 'LinkedIn', label: 'LinkedIn' },
    { href: 'https://github.com/loazur', icon: githubIcon, alt: 'GitHub', label: 'GitHub' },
    { href: 'https://loazur.itch.io', icon: itchIcon, alt: 'Itch.io', label: 'Itch.io' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Clément Bounaix <span className="footer-pseudo">@loazur</span></h4>
          <p>{t("footer.description")}</p>
        </div>

        <div className="footer-section">
          <h4>{t("footer.navigation")}</h4>
          <ul>
            <li><Link to="/">{t("footer.home")}</Link></li>
            <li><Link to="/projects">{t("footer.projects")}</Link></li>
            <li><Link to="/cv">{t("footer.cv")}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footer.socials")}</h4>
          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="footer-social-link"
                aria-label={social.alt}
                title={social.label}
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 - {currentYear} Clément Bounaix — {t("footer.allRights")}</p>
      </div>
    </footer>
  );
};