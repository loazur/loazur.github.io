import { useLanguage } from '../context/LanguageContext';
import '../styles/CV.css';

export default function CV() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: 'Mon CV',
      downloadBtn: '⬇ Télécharger mon CV',
      education: 'Formation',
      projects: 'Projets',
      languages: 'Langues',
      
      // Education
      degree1: 'BUT Informatique Graphique',
      degree1Period: '2024 - 2027',
      degree1School: 'Université Clermont Auvergne - IUT Le Puy-en-Velay',
      degree1Desc: 'Programmation en C++, Bases de données, Gestion de projets, Moteurs Unreal Engine et Unity',
      
      degree2: 'Baccalauréat général - Spécialités NSI, Anglais',
      degree2Period: '2021 - 2024',
      degree2School: 'Lycée Simone Weil',
      degree2Grade: 'Mention Assez Bien',
      gradesTitle: 'Notes obtenues:',
      grade1: 'Grand oral: 18',
      grade2: 'Numérique et sciences informatiques: 19',
      grade3: 'Anglais monde contemporain: 15',
      
      // Projects
      project1Title: 'Programmation d\'un jeu Unity - « LIBET »',
      project1Period: 'Oct. 2025 - Juin 2026',
      project1School: 'IUT Le Puy-en-Velay',
      project1Desc: 'Jeu à la première personne, incarnez \'Libet\' un vieil homme atteint d\'Alzheimer, succombant peu à peu à sa maladie',
      project1Skills: 'Utilisation d\'Unity/C#, Gestion du projet avec Trello et Github, Répartition des tâches',
      
      project2Title: 'Programmation d\'un jeu Unreal Engine - « Project Mycoria »',
      project2Period: 'Janv. - Juin 2025',
      project2School: 'IUT Le Puy-en-Velay',
      project2Desc: 'Conception d\'un jeu narratif se déroulant dans le parc naturel du Livradois-Forez en Haute-Loire, commandé par l\'Université elle même',
      project2Skills: 'Gestion de version sur Github, Programmation en Blueprint, Optimisation d\'objets 3D, Création de niveaux',
      
      project3Title: 'Programmation et maintien d\'un serveur Minecraft',
      project3Period: 'Juill. - Août 2021',
      project3School: 'Projet en équipe hors du cadre académique',
      project3Desc: 'Développement et gestion d\'un serveur multijoueur axé « Minijeux ». Et organisation d\'un événement en jeu avec argent à gagner.',
      project3Skills: 'Travail d\'équipe, Gestion d\'événements en jeu, Programmation en Java',
      
      project4Title: 'Conception d\'un jeu 2D - « IPlat »',
      project4Period: 'Oct. 2021',
      project4School: 'Projet en autodidacte',
      project4Desc: 'Création d\'un court jeu de plateforme en 1 semaine',
      project4Skills: 'Utilisation du framework Löve2D et du Lua, Gestion d\'assets, Création de maps avec Tiled',
      
      // Languages
      french: 'Français :',
      frenchLevel: 'Langue maternelle',
      english: 'Anglais :',
      englishLevel: 'Niveau B2'
    },
    en: {
      title: 'My Resume',
      downloadBtn: '⬇ Download my Resume',
      education: 'Education',
      projects: 'Projects',
      languages: 'Languages',
      
      // Education
      degree1: 'Computer Graphics Bachelor',
      degree1Period: '2024 - 2027',
      degree1School: 'Clermont Auvergne University - IUT Le Puy-en-Velay',
      degree1Desc: 'C++ Programming, Databases, Project Management, Unreal Engine and Unity',
      
      degree2: 'High School Diploma - Computer Science, English',
      degree2Period: '2021 - 2024',
      degree2School: 'Lycée Simone Weil',
      degree2Grade: 'Honors',
      gradesTitle: 'Grades obtained:',
      grade1: 'Oral exam: 18',
      grade2: 'Computer Science: 19',
      grade3: 'Contemporary English: 15',
      
      // Projects
      project1Title: 'Unity Game Programming - "LIBET"',
      project1Period: 'Oct. 2025 - June 2026',
      project1School: 'IUT Le Puy-en-Velay',
      project1Desc: 'First-person game, play as \'Libet\', an old man with Alzheimer\'s, gradually succumbing to his illness',
      project1Skills: 'Unity/C# usage, Project management with Trello and Github, Task distribution',
      
      project2Title: 'Unreal Engine Game Programming - "Project Mycoria"',
      project2Period: 'Jan. - June 2025',
      project2School: 'IUT Le Puy-en-Velay',
      project2Desc: 'Narrative game design set in the Livradois-Forez natural park in Haute-Loire, commissioned by the University itself',
      project2Skills: 'Version control on Github, Blueprint programming, 3D object optimization, Level creation',
      
      project3Title: 'Minecraft Server Programming and Maintenance',
      project3Period: 'July - Aug. 2021',
      project3School: 'Team project outside academic framework',
      project3Desc: 'Development and management of a multiplayer server focused on "Minigames". Organization of an in-game event with cash prizes.',
      project3Skills: 'Teamwork, In-game event management, Java programming',
      
      project4Title: '2D Game Design - "IPlat"',
      project4Period: 'Oct. 2021',
      project4School: 'Self-taught project',
      project4Desc: 'Creation of a short platformer game in 1 week',
      project4Skills: 'Löve2D framework and Lua usage, Asset management, Map creation with Tiled',
      
      // Languages
      french: 'French:',
      frenchLevel: 'Native',
      english: 'English:',
      englishLevel: 'B2 Level'
    }
  };

  const t = translations[language];

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
        <h1>{t.title}</h1>
        <button onClick={downloadCV} className="download-btn">
          {t.downloadBtn}
        </button>
      </div>

      <div className="cv-content">
        <section className="cv-section">
          <h2>{t.education}</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.degree1}</h3>
              <span className="date">{t.degree1Period}</span>
            </div>
            <p className="institution">{t.degree1School}</p>
            <p>{t.degree1Desc}</p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.degree2}</h3>
              <span className="date">{t.degree2Period}</span>
            </div>
            <p className="institution">{t.degree2School}</p>
            <p>{t.degree2Grade}</p>
            <ul>
              <h4>{t.gradesTitle}</h4>
              <li>{t.grade1}</li>
              <li>{t.grade2}</li>
              <li>{t.grade3}</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>{t.projects}</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.project1Title}</h3>
              <span className="date">{t.project1Period}</span>
            </div>
            <p className="institution">{t.project1School}</p>
            <p>{t.project1Desc}</p>
            <p><em>{t.project1Skills}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.project2Title}</h3>
              <span className="date">{t.project2Period}</span>
            </div>
            <p className="institution">{t.project2School}</p>
            <p>{t.project2Desc}</p>
            <p><em>{t.project2Skills}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.project3Title}</h3>
              <span className="date">{t.project3Period}</span>
            </div>
            <p className="institution">{t.project3School}</p>
            <p>{t.project3Desc}</p>
            <p><em>{t.project3Skills}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t.project4Title}</h3>
              <span className="date">{t.project4Period}</span>
            </div>
            <p className="institution">{t.project4School}</p>
            <p>{t.project4Desc}</p>
            <p><em>{t.project4Skills}</em></p>
          </div>
        </section>

        <section className="cv-section">
          <h2>{t.languages}</h2>
          <div className="cv-item">
            <p><strong>{t.french}</strong> {t.frenchLevel}</p>
            <p><strong>{t.english}</strong> {t.englishLevel}</p>
          </div>
        </section>
      </div>
    </section>
  );
}