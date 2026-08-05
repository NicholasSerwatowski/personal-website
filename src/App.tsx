import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Engineering from "./pages/Engineering";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/engineering" element={<Engineering />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/interests" element={<Interests />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;