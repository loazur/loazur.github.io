import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './components/Header';
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CV from "./pages/CV"
import Projects from "./pages/Projects"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App