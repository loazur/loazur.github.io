import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './components/Header';
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CV from "./pages/CV"
import Projects from "./pages/Projects"
import Libet from "./pages/projects/Libet"
import ProjectMycoria from "./pages/projects/ProjectMycoria"
import IPlat from "./pages/projects/IPlat"
import BotDiscordSteam from "./pages/projects/BotDiscordSteam"
import AppWebSoutenances from "./pages/projects/AppWebSoutenances"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/libet" element={<Libet />} />
          <Route path="/projects/project-mycoria" element={<ProjectMycoria />} />
          <Route path="/projects/iplat" element={<IPlat />} />
          <Route path="/projects/bot-discord-steam" element={<BotDiscordSteam />} />
          <Route path="/projects/app-web-soutenances" element={<AppWebSoutenances />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App