import '../../styles/ProjectDetail.css';
import ProjectLayout from '../../layout/ProjectLayout';
import { useTranslation } from 'react-i18next';

import IPlatMainPicture from '../../assets/IPlat/iplat-picture1.webp';
import IPlatPicture1 from '../../assets/IPlat/iplat-picture2.webp';
import IPlatPicture2 from '../../assets/IPlat/iplat-picture3.webp';
import IPlatPicture3 from '../../assets/IPlat/iplat-picture4.webp';
import IPlatPicture4 from '../../assets/IPlat/iplat-picture5.webp';

export default function IPlat() {
  const { t } = useTranslation();

  const projectData = {
    title: t('projects.datas.iplat.title'),
    tags: [t('projects.datas.iplat.tags.love2d'), t('projects.datas.iplat.tags.platformer')],
    date: t('projects.datas.iplat.date'),
    links: [
      { url: "https://github.com/loazur/IPlat", label: t('projects.datas.iplat.links.github'), primary: false },
      { url: "https://loazur.itch.io/iplat", label: t('projects.datas.iplat.links.itchio'), primary: true }
    ],
    mainImage: {
      src: IPlatMainPicture,
      alt: "IPlat - Capture d'écran principale"
    },
    galleryImages: [
      { src: IPlatPicture1, alt: 'IPlat - Gameplay niveau 1' },
      { src: IPlatPicture2, alt: 'IPlat - Gameplay niveau 2' },
      { src: IPlatPicture3, alt: 'IPlat - Gameplay niveau 3' },
      { src: IPlatPicture4, alt: 'IPlat - Gameplay niveau 4' }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>{t('projects.datas.iplat.context.title')}</h2>
        <p>
          {t('projects.datas.iplat.context.paragraph1')} <br/>
          {t('projects.datas.iplat.context.paragraph2')} <br/>
          {t('projects.datas.iplat.context.paragraph3')} <br/>
          {t('projects.datas.iplat.context.paragraph4')}
        </p>
        <p>
          <br/>
          <strong>{t('projects.datas.iplat.context.problem')}</strong> {t('projects.datas.iplat.context.problemText')}
        </p>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.objectives.title')}</h2>
        <ul>
          <li>{t('projects.datas.iplat.objectives.item1')}</li>
          <li>{t('projects.datas.iplat.objectives.item2')}</li>
          <li>{t('projects.datas.iplat.objectives.item3')}</li>
          <li>{t('projects.datas.iplat.objectives.item4')}</li>
          <li>{t('projects.datas.iplat.objectives.item5')}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.missions.title')}</h2>
        <ul>
          <li>{t('projects.datas.iplat.missions.item1')}</li>
          <li>{t('projects.datas.iplat.missions.item2')}</li>
          <li>{t('projects.datas.iplat.missions.item3')}</li>
          <li>{t('projects.datas.iplat.missions.item4')}</li>
          <li>{t('projects.datas.iplat.missions.item5')}</li>
          <li>{t('projects.datas.iplat.missions.item6')}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.skills.title')}</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{t('projects.datas.iplat.skills.technical.title')}</h3>
            <ul>
              <li>{t('projects.datas.iplat.skills.technical.item1')}</li>
              <li>{t('projects.datas.iplat.skills.technical.item2')}</li>
              <li>{t('projects.datas.iplat.skills.technical.item3')}</li>
              <li>{t('projects.datas.iplat.skills.technical.item4')}</li>
              <li>{t('projects.datas.iplat.skills.technical.item5')}</li>
              <li>{t('projects.datas.iplat.skills.technical.item6')}</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>{t('projects.datas.iplat.skills.transversal.title')}</h3>
            <ul>
              <li>{t('projects.datas.iplat.skills.transversal.item1')}</li>
              <li>{t('projects.datas.iplat.skills.transversal.item2')}</li>
              <li>{t('projects.datas.iplat.skills.transversal.item3')}</li>
              <li>{t('projects.datas.iplat.skills.transversal.item4')}</li>
              <li>{t('projects.datas.iplat.skills.transversal.item5')}</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>{t('projects.datas.iplat.skills.human.title')}</h3>
            <ul>
              <li>{t('projects.datas.iplat.skills.human.item1')}</li>
              <li>{t('projects.datas.iplat.skills.human.item2')}</li>
              <li>{t('projects.datas.iplat.skills.human.item3')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.academic.title')}</h2>
        <p>{t('projects.datas.iplat.academic.intro')}</p>
        <ul>
          <li><strong>{t('projects.datas.iplat.academic.oop')}</strong> {t('projects.datas.iplat.academic.oopText')}</li>
          <li><strong>{t('projects.datas.iplat.academic.algorithm')}</strong> {t('projects.datas.iplat.academic.algorithmText')}</li>
          <li><strong>{t('projects.datas.iplat.academic.projectManagement')}</strong> {t('projects.datas.iplat.academic.projectManagementText')}</li>
          <li><strong>{t('projects.datas.iplat.academic.gameDev')}</strong> {t('projects.datas.iplat.academic.gameDevText')}</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.conclusion.title')}</h2>
        <p>
          {t('projects.datas.iplat.conclusion.paragraph1')}
        </p>
        <p>
          {t('projects.datas.iplat.conclusion.paragraph2')}
        </p>
      </section>

      <section className="project-section">
        <h2>{t('projects.datas.iplat.technologies.title')}</h2>
        <div className="tech-tags">
          <span className="tech-tag">Löve2D</span>
          <span className="tech-tag">Lua</span>
          <span className="tech-tag">Tiled</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>
    </ProjectLayout>
  );
}