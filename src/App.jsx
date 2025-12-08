import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Libet from './pages/projects/Libet';
import ProjectMycoria from './pages/projects/ProjectMycoria';
import IPlat from './pages/projects/IPlat';
import BotDiscordSteam from './pages/projects/BotDiscordSteam';
import AppWebSoutenances from './pages/projects/AppWebSoutenances';
import './App.css';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/libet" element={<Libet />} />
          <Route path="/projects/project-mycoria" element={<ProjectMycoria />} />
          <Route path="/projects/iplat" element={<IPlat />} />
          <Route path="/projects/bot-discord-steam" element={<BotDiscordSteam />} />
          <Route path="/projects/app-web-soutenances" element={<AppWebSoutenances />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;