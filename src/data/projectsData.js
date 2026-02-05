// Import des images
import LibetMainPicture from '../assets/Libet/libet-dev-picture1.webp';
import MycoriaMainPicture from '../assets/ProjectMycoria/project-mycoria-picture1.webp';
import IPlatMainPicture from '../assets/IPlat/iplat-picture1.webp';
import BotDiscordMainPicture from '../assets/BotDiscordSteam/botdiscordsteam-picture2.webp';
import AppWebSoutenancesMainPicture from '../assets/AppWebSoutenances/gestion-soutenances-picture1.webp';

// Données des projets avec clés de catégorie
export const getProjectsData = (t) => [
  {
    id: 1,
    title: "LIBET",
    engine: "Unity 6",
    year: "2025-2026",
    type: t("projects.datas.types.student"),
    categoryKey: "videogame", // Clé fixe
    category: t("projects.datas.categories.videogame"), // Traduction pour affichage
    status: t("projects.datas.status.inprogress"),
    description: t("projects.datas.libet.description"),
    features: ["FMOD"],
    link: "/projects/libet",
    featured: true,
    openSource: true,
    image: LibetMainPicture
  },
  {
    id: 2,
    title: "Project Mycoria",
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
    image: MycoriaMainPicture
  },
  {
    id: 3,
    title: "IPlat",
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
    image: IPlatMainPicture
  },
  {
    id: 4,
    title: "Bot Discord Steam",
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
    image: BotDiscordMainPicture
  },
  {
    id: 5,
    title: "Application web de gestion de soutenances",
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
    image: AppWebSoutenancesMainPicture
  }
];

export const getFeaturedProjects = (t) => {
  return getProjectsData(t).filter(project => project.featured);
};

export const getProjects = (t) => {
  return getProjectsData(t);
};