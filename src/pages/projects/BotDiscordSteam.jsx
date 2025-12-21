import ProjectLayout from '../../layout/ProjectLayout';
import botdiscord1 from '../../assets/BotDiscordSteam/botdiscordsteam-picture2.webp';
import botdiscord2 from '../../assets/BotDiscordSteam/botdiscordsteam-picture1.webp';
import botdiscord3 from '../../assets/BotDiscordSteam/botdiscordsteam-picture3.webp';

export default function BotDiscordSteam() {
  const projectData = {
    title: "Bot Discord lié à l'API de Steam",
    tags: ["JavaScript", "Open Source", "Page en cours d'écriture"],
    date: "Déc. 2024 - Mai. 2025",
    links: [
      { url: "https://github.com/loazur/bot-discord-steam-api", label: "GitHub", primary: true }
    ],
    mainImage: {
      src: botdiscord1,
      alt: "Bot Discord Steam - Menu d'aide"
    },
    galleryImages: [
      { src: botdiscord2, alt: "Affichage des profils Steam" },
      { src: botdiscord3, alt: "Liste des comptes Steam liés" }
    ]
  };

  return (
    <ProjectLayout {...projectData}>
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Bot Discord codé en JavaScript, intégrant l'API Steam pour permettre la liaison de comptes Steam
          à Discord et l'affichage des informations associées.
        </p>
        <p>
          Ce projet personnel a été développé pour faciliter le suivi des profils Steam directement depuis Discord,
          permettant aux utilisateurs de consulter rapidement leurs statistiques et celles de leurs amis.
        </p>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li><strong>Liaison de compte Steam :</strong> Commande <code>/link</code> pour associer son compte Steam à son profil Discord</li>
          <li><strong>Affichage de profil :</strong> Commande <code>/stats</code> pour consulter les statistiques d'un utilisateur (SteamID, niveau, date de création, nombre d'amis, jeux possédés, statut)</li>
          <li><strong>Liste des comptes liés :</strong> Commande <code>/list-linked</code> pour voir tous les utilisateurs Discord ayant lié leur compte Steam</li>
          <li><strong>Système de modération :</strong> Commandes admin pour bannir/kick/unban des membres</li>
          <li><strong>Utilitaires :</strong> Commandes de maintenance (ping, purge de messages, aide)</li>
          <li><strong>Stockage JSON :</strong> Sauvegarde sur le serveur des liaisons Discord-Steam</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Commandes disponibles</h2>
        <h3>🎮 Steam</h3>
        <ul>
          <li><code>/link</code> - Lier son compte Steam</li>
          <li><code>/stats [user]</code> - Afficher les statistiques Steam d'un utilisateur</li>
          <li><code>/list-linked</code> - Liste des comptes Steam liés</li>
        </ul>
        
        <h3>🛠️ Utilitaires</h3>
        <ul>
          <li><code>/help</code> - Menu d'aide complet</li>
          <li><code>/ping</code> - Vérifier la latence du bot</li>
          <li><code>/purge [nombre]</code> - Supprimer plusieurs messages</li>
        </ul>

        <h3>👮 Modération</h3>
        <ul>
          <li><code>/ban</code> - Bannir un membre</li>
          <li><code>/kick</code> - Expulser un membre</li>
          <li><code>/unban</code> - Débannir un membre</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies et Outils Utilisés</h2>
        <div className="tech-tags">
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Discord.js</span>
          <span className="tech-tag">Steam API</span>
          <span className="tech-tag">GitHub</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Compétences développées</h2>
        <ul>
          <li>Intégration d'API externe (Steam Web API)</li>
          <li>Développement de bot Discord avec Discord.js</li>
          <li>Gestion de données avec fichiers JSON</li>
          <li>Gestion asynchrone en JavaScript (Promises, async/await)</li>
          <li>Système de permissions et modération</li>
          <li>Déploiement et maintenance d'un bot</li>
        </ul>
      </section>
    </ProjectLayout>
  );
}