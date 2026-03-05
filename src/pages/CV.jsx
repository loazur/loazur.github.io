import i18next from 'i18next';
import '../styles/CV.css';
import { useTranslation } from 'react-i18next';

export default function CV() {
  const { t } = useTranslation();

  const downloadCV = () => {
    const link = document.createElement('a');
    
    switch (i18next.language) {
      case "fr":
        link.href = '/CV-Clement-Bounaix-FR.pdf';
        link.download = "CV-Clement-Bounaix-FR.pdf";
        break;
      case "en":
        link.href = '/CV-Clement-Bounaix-EN.pdf';
        link.download = "CV-Clement-Bounaix-EN.pdf";
        break;
      default:
        link.href = '/CV-Clement-Bounaix-FR.pdf';
        link.download = "CV-Clement-Bounaix-FR.pdf";
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      key: 'but',
      image: '/images/cv/LogoButInfoG.webp',
      tags: ['C++', 'Unity', 'Unreal Engine', 'SQL', 'React'],
    },
    {
      key: 'bac',
      image: '/images/cv/LogoAuvergneRA.png',
      tags: null,
    },
  ];

  const experiences = [];

  const skills = [
    {
      key: 'cpp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      tags: ['C', 'C++', 'C#'],
    },
    {
      key: 'gameEngines',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      tags: ['Unity', 'Unreal Engine', 'Löve2D'],
    },
    {
      key: 'versionControl',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <path d="M6 21V9a9 9 0 0 0 9 9"/>
        </svg>
      ),
      tags: ['Git', 'GitHub', 'Jira'],
    },
    {
      key: 'web',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      tags: ['React', 'JavaScript', 'HTML/CSS'],
    },
  ];

  const softSkills = [
    t('cv.skills.soft.items.teamwork'),
    t('cv.skills.soft.items.autonomy'),
    t('cv.skills.soft.items.curiosity'),
    t('cv.skills.soft.items.adaptability'),
    t('cv.skills.soft.items.projectManagement'),
    t('cv.skills.soft.items.communication'),
  ];

  return (
    <section className="cv">
      {/* ─── Hero ─── */}
      <div className="cv-hero">
        <div className="cv-hero-badge">
          <span className="cv-hero-dot" />
          {t("cv.heroStatus")}
        </div>
        <h1 className="cv-hero-title">
          {t("cv.heroLine1")}
          <span className="cv-hero-accent">{t("cv.heroLine2")}</span>
        </h1>
        <button onClick={downloadCV} className="cv-download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {t("cv.download")}
        </button>
      </div>

      <div className="cv-content">
        {/* ═══════════════════════════════════════
            01 — Formation
           ═══════════════════════════════════════ */}
        <section className="cv-section">
          <div className="cv-section-header">
            <span className="cv-section-number">01</span>
            <h2>{t("cv.sections.education")}</h2>
            <div className="cv-section-line" />
          </div>

          <div className="cv-timeline">
            {education.map((edu) => (
              <div className="cv-card" key={edu.key}>
                <div className="cv-card-image">
                  <img src={edu.image} alt={t(`cv.education.${edu.key}.title`)} />
                </div>
                <div className="cv-card-content">
                  <div className="cv-card-top">
                    <span className="cv-card-date">{t(`cv.education.${edu.key}.date`)}</span>
                    <span className="cv-card-institution">{t(`cv.education.${edu.key}.institution`)}</span>
                  </div>
                  <h3>{t(`cv.education.${edu.key}.title`)}</h3>
                  <p className="cv-card-description">{t(`cv.education.${edu.key}.description`)}</p>
                  
                  {edu.key === 'bac' && (
                    <div className="cv-card-highlight">
                      <span className="cv-highlight-label">{t("cv.education.bac.mention")}</span>
                      <div className="cv-card-tags">
                        <span className="cv-tag cv-tag--grade">{t("cv.education.bac.grades.oral")}</span>
                        <span className="cv-tag cv-tag--grade">{t("cv.education.bac.grades.nsi")}</span>
                        <span className="cv-tag cv-tag--grade">{t("cv.education.bac.grades.english")}</span>
                      </div>
                    </div>
                  )}

                  {edu.tags && (
                    <div className="cv-card-tags">
                      {edu.tags.map((tag) => (
                        <span className="cv-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            02 — Expériences professionnelles
           ═══════════════════════════════════════ */}
        <section className="cv-section">
          <div className="cv-section-header">
            <span className="cv-section-number">02</span>
            <h2>{t("cv.sections.experience")}</h2>
            <div className="cv-section-line" />
          </div>

          {experiences.length > 0 ? (
            <div className="cv-timeline">
              {experiences.map((exp) => (
                <div className="cv-card" key={exp.key}>
                  <div className="cv-card-image">
                    <img src={exp.image} alt={t(`cv.experience.${exp.key}.title`)} />
                  </div>
                  <div className="cv-card-content">
                    <div className="cv-card-top">
                      <span className="cv-card-date">{t(`cv.experience.${exp.key}.date`)}</span>
                      <span className="cv-card-type">{t(`cv.experience.${exp.key}.type`)}</span>
                    </div>
                    <h3>{t(`cv.experience.${exp.key}.title`)}</h3>
                    <p className="cv-card-institution-text">{t(`cv.experience.${exp.key}.company`)}</p>
                    <p className="cv-card-description">{t(`cv.experience.${exp.key}.description`)}</p>
                    {exp.tags && (
                      <div className="cv-card-tags">
                        {exp.tags.map((tag) => (
                          <span className="cv-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cv-empty-state">
              <div className="cv-empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <p className="cv-empty-title">{t("cv.experience.emptyTitle")}</p>
              <p className="cv-empty-text">{t("cv.experience.emptyText")}</p>
            </div>
          )}
        </section>

        {/* ═══════════════════════════════════════
            03 — Compétences
           ═══════════════════════════════════════ */}
        <section className="cv-section">
          <div className="cv-section-header">
            <span className="cv-section-number">03</span>
            <h2>{t("cv.sections.skills")}</h2>
            <div className="cv-section-line" />
          </div>

          <div className="cv-skills-list">
            {skills.map((skill) => (
              <div className="cv-skill-card" key={skill.key}>
                <div className="cv-skill-card-icon">
                  {skill.icon}
                </div>
                <div className="cv-skill-card-body">
                  <h3>{t(`cv.skills.technical.${skill.key}.title`)}</h3>
                  <p>{t(`cv.skills.technical.${skill.key}.description`)}</p>
                  <div className="cv-card-tags">
                    {skill.tags.map((tag) => (
                      <span className="cv-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Savoir-être */}
          <div className="cv-soft-skills">
            <div className="cv-soft-skills-header">
              <div className="cv-skill-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>{t('cv.skills.soft.title')}</h3>
            </div>
            <div className="cv-soft-skills-pills">
              {softSkills.map((skill) => (
                <span className="cv-soft-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}