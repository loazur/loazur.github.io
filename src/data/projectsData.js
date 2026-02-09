// Import des images
import LibetMainPicture from '../assets/Libet/libet-dev-picture1.webp';
import MycoriaMainPicture from '../assets/ProjectMycoria/project-mycoria-picture1.webp';
import IPlatMainPicture from '../assets/IPlat/iplat-picture1.webp';
import BotDiscordMainPicture from '../assets/BotDiscordSteam/botdiscordsteam-picture2.webp';
import AppWebSoutenancesMainPicture from '../assets/AppWebSoutenances/gestion-soutenances-picture1.webp';

// Import des vidéos (ajoutez vos vidéos dans le dossier assets)
// import LibetVideo from '../assets/Libet/libet-preview.mp4';
// import MycoriaVideo from '../assets/ProjectMycoria/mycoria-preview.mp4';

// Données des projets
export const getProjectsData = (t) => [
  {
    id: 1,
    title: t("projects.datas.libet.title"),
    engine: "Unity 6",
    year: "2025-2026",
    type: t("projects.datas.types.student"),
    categoryKey: "videogame", 
    category: t("projects.datas.categories.videogame"),
    status: t("projects.datas.status.inprogress"),
    description: t("projects.datas.libet.description"),
    features: ["FMOD"],
    link: "/projects/libet",
    featured: true,
    openSource: true,
    image: LibetMainPicture,
    video: null, // Ajoutez le chemin de la vidéo ici : LibetVideo
    videoType: "mp4" // Type de vidéo (mp4, webm, etc.)
  },
  {
    id: 2,
    title: t("projects.datas.projectMycoria.title"),
    engine: "Unreal Engine 5",
    year: "2025",
    type: t("projects.datas.types.student"),
    categoryKey: "videogame",
    category: t("projects.datas.categories.videogame"),
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.projectMycoria.description"),
    features: ["C++"],
    link: "/projects/project-mycoria",
    featured: false,
    openSource: false,
    image: MycoriaMainPicture,
    video: null, // Ajoutez le chemin de la vidéo ici : MycoriaVideo
    videoType: "mp4" // Type de vidéo (mp4, webm, etc.)
  },
  {
    id: 3,
    title: t("projects.datas.iplat.title"),
    engine: "Löve2D",
    year: "2021",
    type: t("projects.datas.types.personal"),
    categoryKey: "videogame",
    category: t("projects.datas.categories.videogame"),
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.iplat.description"),
    features: ["Tiled"],
    link: "/projects/iplat",
    featured: false,
    openSource: true,
    image: IPlatMainPicture,
    video: null,
    videoType: "mp4"
  },
  {
    id: 4,
    title: t("projects.datas.botSteam.title"),
    engine: "JavaScript",
    year: "2024-2025",
    type: t("projects.datas.types.personal"),
    categoryKey: "bot",
    category: t("projects.datas.categories.bot"),
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.botSteam.description"),
    features: ["API Steam"],
    link: "/projects/bot-discord-steam",
    featured: false,
    openSource: true,
    image: BotDiscordMainPicture,
    video: null,
    videoType: "mp4"
  },
  {
    id: 5,
    title: t("projects.datas.webSoutenances.title"),
    engine: "PHP",
    year: "2025",
    type: t("projects.datas.types.student"),
    categoryKey: "web",
    category: t("projects.datas.categories.web"),
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.webSoutenances.description"),
    features: ["MySQL"],
    link: "/projects/app-web-soutenances",
    featured: false,
    openSource: false,
    image: AppWebSoutenancesMainPicture,
    video: null,
    videoType: "mp4"
  },
  {
    id: 6,
    title: t("projects.datas.therapieMiroir-AR.title"),
    engine: "Unity 6",
    year: "2026",
    type: t("projects.datas.types.student"),
    categoryKey: "other",
    category: t("projects.datas.categories.other"),
    status: t("projects.datas.status.inprogress"),
    description: t("projects.datas.therapieMiroir-AR.description"),
    features: ["C#", "Meta Quest"],
    link: "/projects/therapie-miroir-ar",
    featured: true,
    openSource: false,
    image: null,
    video: null,
    videoType: "mp4"
  },
  {
    id: 7,
    title: t("projects.datas.projetVapeur.title"),
    engine: "JavaScript",
    year: "2025",
    type: t("projects.datas.types.student"),
    categoryKey: "web",
    category: t("projects.datas.categories.web"),
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.projetVapeur.description"),
    features: ["Handlebars"],
    link: "/projects/projet-vapeur",
    featured: false,
    openSource: true,
    image: null,
    video: null,
    videoType: "mp4"
  }
  
];

export const getFeaturedProjects = (t) => {
  return getProjectsData(t).filter(project => project.featured);
};

export const getProjects = (t) => {
  return getProjectsData(t);
};