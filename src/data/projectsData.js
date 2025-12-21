// Import des images avec les BONS noms de fichiers
import LibetMainPicture from '../assets/Libet/libet-dev-picture1.webp';
import MycoriaMainPicture from '../assets/ProjectMycoria/project-mycoria-picture1.webp';
import IPlatMainPicture from '../assets/IPlat/iplat-picture1.webp';
import BotDiscordMainPicture from '../assets/BotDiscordSteam/botdiscordsteam-picture2.webp';
import AppWebSoutenancesMainPicture from '../assets/AppWebSoutenances/gestion-soutenances-picture1.webp';

// Structure optimisée : données communes + traductions séparées
const projectsBase = [
  {
    id: 1,
    title: "LIBET",
    engine: "Unity 6",
    year: "2025-2026",
    type: { fr: "Projet Étudiant", en: "Student Project" },
    category: { fr: "Jeu vidéo", en: "Video Game" },
    status: { fr: "En cours", en: "In Progress" },
    description: {
      fr: "Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.",
      en: "First-person 3D game where the player embodies 'Libet', an old man with Alzheimer's, living his life while progressively losing his mind."
    },
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
    type: { fr: "Projet Étudiant", en: "Student Project" },
    category: { fr: "Jeu vidéo", en: "Video Game" },
    status: { fr: "Terminé", en: "Completed" },
    description: {
      fr: "Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.",
      en: "3D exploration and narrative game set in the Livradois-Forez region. Play as Vincent Morel, a DGSI agent, investigating a series of mysterious disappearances."
    },
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
    type: { fr: "Personnel", en: "Personal" },
    category: { fr: "Jeu vidéo", en: "Video Game" },
    status: { fr: "Terminé", en: "Completed" },
    description: {
      fr: "Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.",
      en: "Short 2D platformer game developed in 1 week using the Löve2D framework."
    },
    features: ["Tiled"],
    link: "/projects/iplat",
    featured: false,
    openSource: true,
    image: IPlatMainPicture
  },
  {
    id: 4,
    title: { fr: "Bot Discord Steam", en: "Steam Discord Bot" },
    engine: "JavaScript",
    year: "2024-2025",
    type: { fr: "Personnel", en: "Personal" },
    category: { fr: "Bot", en: "Bot" },
    status: { fr: "Terminé", en: "Completed" },
    description: {
      fr: "Bot Discord permettant de suivre les soldes Steam et recevoir des notifications pour vos jeux favoris.",
      en: "Discord Bot allowing to display Steam profile informations."
    },
    features: ["API Steam"],
    link: "/projects/bot-discord-steam",
    featured: false,
    openSource: true,
    image: BotDiscordMainPicture
  },
  {
    id: 5,
    title: { fr: "Application web de gestion de soutenances", en: "Defense Management Web App" },
    engine: "PHP",
    year: "2025",
    type: { fr: "Projet Étudiant", en: "Student Project" },
    category: { fr: "Web", en: "Web" },
    status: { fr: "Terminé", en: "Completed" },
    description: {
      fr: "Application web développée pour faciliter la gestion des soutenances de projet à l'IUT.",
      en: "Web application developed to facilitate project defense management at the IUT."
    },
    features: ["MySQL"],
    link: "/projects/app-web-soutenances",
    featured: false,
    openSource: false,
    image: AppWebSoutenancesMainPicture
  }
];

// Fonction pour transformer les projets selon la langue
const transformProjects = (projects, language) => {
  return projects.map(project => ({
    ...project,
    title: typeof project.title === 'object' ? project.title[language] : project.title,
    type: project.type[language],
    category: project.category[language],
    status: project.status[language],
    description: project.description[language]
  }));
};

// Export des données par langue
export const projectsData = {
  fr: transformProjects(projectsBase, 'fr'),
  en: transformProjects(projectsBase, 'en')
};

export const getFeaturedProjects = (language = 'fr') => {
  return projectsData[language].filter(project => project.featured);
};

export const getProjects = (language = 'fr') => {
  return projectsData[language];
};