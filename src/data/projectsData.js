// Import des images
import LibetMainPicture from '../assets/Libet/libet-dev-picture1.webp';
import MycoriaMainPicture from '../assets/ProjectMycoria/project-mycoria-picture1.webp';
import IPlatMainPicture from '../assets/IPlat/iplat-picture1.webp';

// Import des vidéos
import LibetVideo from "../assets/Libet/libet-preview.mp4";
import IPlatVideo from "../assets/IPlat/iplat-preview.mp4";
import MycoriaVideo from "../assets/ProjectMycoria/project-mycoria-preview.mp4"

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
    status: t("projects.datas.status.finished"),
    description: t("projects.datas.libet.description"),
    features: ["FMOD"],
    link: "/projects/libet",
    featured: true,
    openSource: true,
    image: LibetMainPicture,
    video: LibetVideo, 
    videoType: "mp4" 
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
    video: MycoriaVideo, 
    videoType: "mp4" 
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
    video: IPlatVideo,
    videoType: "mp4"
  },
  
];

export const getFeaturedProjects = (t) => {
  return getProjectsData(t).filter(project => project.featured);
};

export const getProjects = (t) => {
  return getProjectsData(t);
};