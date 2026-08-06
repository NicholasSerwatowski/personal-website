// This is the main app file that contains the routing for the website
import { BrowserRouter, Routes, Route } from "react-router-dom";
// This is the navbar
import Navbar from "./components/Navbar";
// These are the pages
import Home from "./pages/Home";
import About from "./pages/About";
import Engineering from "./pages/Engineering";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import CombatRobotics from "./pages/engineering/CombatRobotics";
import CaseWind from "./pages/engineering/CaseWind";
import Research from "./pages/engineering/Research";
import CAD from "./pages/engineering/CAD";

// This provides the global styles
import "./styles/app.css";

// This is the main app
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* These represent the pages */}
      <Routes>

        {/* This is the home page */}
        <Route path="/" element={<Home />} />

        {/* This is the about page */}
        <Route path="/about" element={<About />} />

        {/* This is the engineering page with sub-routes for different engineering topics */}
        <Route path="/engineering" element={<Engineering />} />
          {/* These are the sub-pages for the engineering topics */}
          <Route path="/engineering/combatrobotics" element={<CombatRobotics />} />
          <Route path="/engineering/casewind" element={<CaseWind />} />
          <Route path="/engineering/research" element={<Research />} />
          <Route path="/engineering/cad" element={<CAD />} />

        {/* This is the projects page */}
        <Route path="/projects" element={<Projects />} />

        {/* This is the experience page */}
        <Route path="/experience" element={<Experience />} />

        {/* This is the interests page */}
        <Route path="/interests" element={<Interests />} />

        {/* This is the contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

    {/* This is the footer */}
    </BrowserRouter>
  );
}

// Export the app
export default App;