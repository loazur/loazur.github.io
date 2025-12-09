export const projectsData = [
  {
    id: 1,
    title: "LIBET",
    engine: "Unity 6",
    status: "En cours",
    year: "2025-2026",
    type: "Projet Étudiant",
    category: "Jeu vidéo",
    description: "Jeu 3D à la première personne dans lequel le joueur incarne 'Libet', un vieil homme atteint d'Alzheimer, vivant sa vie tandis qu'il perd progressivement la raison.",
    features: ["C#", "FMOD"],
    link: "/projects/libet",
    featured: true,
    openSource: true 
  },
  {
    id: 2,
    title: "Project Mycoria",
    engine: "Unreal Engine 5",
    status: "Terminé",
    year: "2025",
    type: "Projet Étudiant",
    category: "Jeu vidéo",
    description: "Jeu 3D d'exploration et narratif se déroulant dans la région du Livradois-Forez. Incarnez Vincent Morel, agent de la DGSI, chargé d'enquêter sur une série de disparitions mystérieuses.",
    features: ["C++", "Blueprints"],
    link: "/projects/project-mycoria",
    featured: false,
    openSource: false
  },
  {
    id: 3,
    title: "IPlat",
    engine: "Löve2D",
    status: "Terminé",
    year: "2021",
    type: "Personnel",
    category: "Jeu vidéo",
    description: "Court jeu de platforme en 2D développé en 1 semaine avec le framework Löve2D.",
    features: ["Lua", "2D", "Platformer"],
    link: "/projects/iplat",
    featured: false,
    openSource: true
  },
  {
    id: 4,
    title: "Bot Discord Steam",
    engine: "JavaScript",
    status: "Terminé",
    year: "2024",
    type: "Personnel",
    category: "Bot",
    description: "Bot Discord permettant de suivre les soldes Steam et recevoir des notifications pour vos jeux favoris.",
    features: ["Node.js", "Discord.js", "API Steam"],
    link: "/projects/bot-discord-steam",
    featured: false,
    openSource: true
  },
  {
    id: 5,
    title: "Application Web de Gestion des Soutenances",
    engine: "PHP",
    status: "Terminé",
    year: "2025",
    type: "Projet Étudiant",
    category: "Web",
    description: "Application web développée pour faciliter la gestion des soutenances de projet à l'IUT.",
    features: ["MySQL", "Base de données"],
    link: "/projects/app-web-soutenances",
    featured: false,
    openSource: false
  }
];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};