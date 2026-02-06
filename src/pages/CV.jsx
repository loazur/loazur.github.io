import '../styles/CV.css';
import { useTranslation } from 'react-i18next';

export default function CV() {
  const { t } = useTranslation();

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
        <h1>{t("cv.title")}</h1>
        <button onClick={downloadCV} className="download-btn">
          {t("cv.download")}
        </button>
      </div>

      <div className="cv-content">
        <section className="cv-section">
          <h2>{t("cv.sections.education")}</h2>
          
          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.education.but.title")}</h3>
              <span className="date">{t("cv.education.but.date")}</span>
            </div>
            <p className="institution">{t("cv.education.but.institution")}</p>
            <p>{t("cv.education.but.description")}</p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.education.bac.title")}</h3>
              <span className="date">{t("cv.education.bac.date")}</span>
            </div>
            <p className="institution">{t("cv.education.bac.institution")}</p>
            <p>{t("cv.education.bac.mention")}</p>
            <ul>
              <h4>{t("cv.education.bac.grades.title")}</h4>
              <li>{t("cv.education.bac.grades.oral")}</li>
              <li>{t("cv.education.bac.grades.nsi")}</li>
              <li>{t("cv.education.bac.grades.english")}</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>{t("cv.sections.projects")}</h2>
          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.projects.libet.title")}</h3>
              <span className="date">{t("cv.projects.libet.date")}</span>
            </div>
            <p className="institution">{t("cv.projects.libet.institution")}</p>
            <p>{t("cv.projects.libet.description")}</p>
            <p><em>{t("cv.projects.libet.skills")}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.projects.mycoria.title")}</h3>
              <span className="date">{t("cv.projects.mycoria.date")}</span>
            </div>
            <p className="institution">{t("cv.projects.mycoria.institution")}</p>
            <p>{t("cv.projects.mycoria.description")}</p>
            <p><em>{t("cv.projects.mycoria.skills")}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.projects.minecraft.title")}</h3>
              <span className="date">{t("cv.projects.minecraft.date")}</span>
            </div>
            <p className="institution">{t("cv.projects.minecraft.institution")}</p>
            <p>{t("cv.projects.minecraft.description")}</p>
            <p><em>{t("cv.projects.minecraft.skills")}</em></p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <h3>{t("cv.projects.iplat.title")}</h3>
              <span className="date">{t("cv.projects.iplat.date")}</span>
            </div>
            <p className="institution">{t("cv.projects.iplat.institution")}</p>
            <p>{t("cv.projects.iplat.description")}</p>
            <p><em>{t("cv.projects.iplat.skills")}</em></p>
          </div>
        </section>
      </div>
     </section>
  )
}