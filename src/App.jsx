import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layout/MainLayout';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Libet from './pages/projects/Libet';
import ProjectMycoria from './pages/projects/ProjectMycoria';
import IPlat from './pages/projects/IPlat';
import BotDiscordSteam from './pages/projects/BotDiscordSteam';
import AppWebSoutenances from './pages/projects/AppWebSoutenances';
import AR_CHU from './pages/projects/AR-CHU';
import ProjetVapeur from './pages/projects/ProjetVapeur';

import './App.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/cv" element={<PageTransition><CV /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/projects/libet" element={<PageTransition><Libet /></PageTransition>} />
        <Route path="/projects/project-mycoria" element={<PageTransition><ProjectMycoria /></PageTransition>} />
        <Route path="/projects/iplat" element={<PageTransition><IPlat /></PageTransition>} />
        <Route path="/projects/bot-discord-steam" element={<PageTransition><BotDiscordSteam /></PageTransition>} />
        <Route path="/projects/app-web-soutenances" element={<PageTransition><AppWebSoutenances /></PageTransition>} />
        <Route path="/projects/therapie-miroir-ar" element={<PageTransition><AR_CHU /></PageTransition>} />
        <Route path="/projects/projet-vapeur" element={<PageTransition><ProjetVapeur /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <AnimatedBackground />
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;