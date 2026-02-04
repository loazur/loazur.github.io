// Import des images avec les BONS noms de fichiers
import LibetMainPicture from '../assets/Libet/libet-dev-picture1.webp';
import MycoriaMainPicture from '../assets/ProjectMycoria/project-mycoria-picture1.webp';
import IPlatMainPicture from '../assets/IPlat/iplat-picture1.webp';
import BotDiscordMainPicture from '../assets/BotDiscordSteam/botdiscordsteam-picture2.webp';
import AppWebSoutenancesMainPicture from '../assets/AppWebSoutenances/gestion-soutenances-picture1.webp';

// Données des projets
export const projectsData = [
  {
    id: 1,
    title: "LIBET",
    engine: "Unity 6",
    year: "2025-2026",
    type: "Projet Étudiant",
    category: "Jeu vidéo",
    status: "En cours",
    description: "Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.",
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
    type: "Projet Étudiant",
    category: "Jeu vidéo",
    status: "Terminé",
    description: "Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.",
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
    type: "Personnel",
    category: "Jeu vidéo",
    status: "Terminé",
    description: "Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.",
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
    type: "Personnel",
    category: "Bot",
    status: "Terminé",
    description: "Bot Discord permettant de suivre les soldes Steam et recevoir des notifications pour vos jeux favoris.",
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
    type: "Projet Étudiant",
    category: "Web",
    status: "Terminé",
    description: "Application web développée pour faciliter la gestion des soutenances de projet à l'IUT.",
    features: ["MySQL"],
    link: "/projects/app-web-soutenances",
    featured: false,
    openSource: false,
    image: AppWebSoutenancesMainPicture
  }
];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjects = () => {
  return projectsData;
};