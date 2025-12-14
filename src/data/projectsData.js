export const projectsData = {
  fr: [
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
      features: ["Lua", "2D", "Platformer", "Tiled"],
      link: "/projects/iplat",
      featured: false,
      openSource: true
    },
    {
      id: 4,
      title: "Bot Discord Steam",
      engine: "JavaScript",
      status: "Terminé",
      year: "2024-2025",
      type: "Personnel",
      category: "Bot",
      description: "Bot Discord permettant d'afficher des informations de profils Steam.",
      features: ["Node.js", "Discord.js", "API Steam"],
      link: "/projects/bot-discord-steam",
      featured: false,
      openSource: true
    },
    {
      id: 5,
      title: "Application web de gestion de soutenances",
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
  ],
  en: [
    {
      id: 1,
      title: "LIBET",
      engine: "Unity 6",
      status: "In Progress",
      year: "2025-2026",
      type: "Student Project",
      category: "Video Game",
      description: "First-person 3D game where the player embodies 'Libet', an old man with Alzheimer's, living his life while progressively losing his mind.",
      features: ["C#", "FMOD"],
      link: "/projects/libet",
      featured: true,
      openSource: true 
    },
    {
      id: 2,
      title: "Project Mycoria",
      engine: "Unreal Engine 5",
      status: "Completed",
      year: "2025",
      type: "Student Project",
      category: "Video Game",
      description: "3D exploration and narrative game set in the Livradois-Forez region. Play as Vincent Morel, a DGSI agent, investigating a series of mysterious disappearances.",
      features: ["C++", "Blueprints"],
      link: "/projects/project-mycoria",
      featured: false,
      openSource: false
    },
    {
      id: 3,
      title: "IPlat",
      engine: "Löve2D",
      status: "Completed",
      year: "2021",
      type: "Personal",
      category: "Video Game",
      description: "Short 2D platformer game developed in 1 week using the Löve2D framework.",
      features: ["Lua", "2D", "Platformer", "Tiled"],
      link: "/projects/iplat",
      featured: false,
      openSource: true
    },
    {
      id: 4,
      title: "Discord Steam Bot",
      engine: "JavaScript",
      status: "Completed",
      year: "2024-2025",
      type: "Personal",
      category: "Bot",
      description: "Discord Bot allowing to display Steam profile informations.",
      features: ["Node.js", "Discord.js", "Steam API"],
      link: "/projects/bot-discord-steam",
      featured: false,
      openSource: true
    },
    {
      id: 5,
      title: "Defense Management Web Application",
      engine: "PHP",
      status: "Completed",
      year: "2025",
      type: "Student Project",
      category: "Web",
      description: "Web application developed to facilitate project defense management at the IUT.",
      features: ["MySQL", "Database"],
      link: "/projects/app-web-soutenances",
      featured: false,
      openSource: false
    }
  ]
};

export const getFeaturedProjects = (language = 'fr') => {
  return projectsData[language].filter(project => project.featured);
};

export const getProjects = (language = 'fr') => {
  return projectsData[language];
};