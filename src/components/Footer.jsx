import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} {t("footer.allRights")}</p>
    </footer>
  );
};