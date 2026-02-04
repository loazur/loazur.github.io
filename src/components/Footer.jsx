import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Clément Bounaix. Tous droits réservés.</p>
    </footer>
  );
};