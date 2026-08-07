// This is the main app file that contains the routing for the website
import { BrowserRouter, Routes, Route } from "react-router-dom";
// This is the navbar
import Navbar from "./components/Navbar";
// These are the pages
import Home from "./pages/Home";
import About from "./pages/About";
import Engineering from "./pages/Engineering";
  import CombatRobotics from "./pages/engineering/CombatRobotics";
  import CaseWind from "./pages/engineering/CaseWind";
  import CAD from "./pages/engineering/CAD";
import Projects from "./pages/Projects";
  import Personal from "./pages/projects/Personal";
  import Archive from "./pages/projects/Archive";
  import Featured from "./pages/projects/Featured";
  import Research from "./pages/projects/Research";
import Experience from "./pages/Experience";
  import Education from "./pages/experience/Education";
  import Work from "./pages/experience/Work";
  import Leadership from "./pages/experience/Leadership";
  import Awards from "./pages/experience/Awards";
import Interests from "./pages/Interests";
  import Music from "./pages/interests/Music";
  import Photography from "./pages/interests/Photography";
  import Travel from "./pages/interests/Travel";
  import Books from "./pages/interests/Books";
  import Learning from "./pages/interests/Learning";
import Contact from "./pages/Contact";


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
          <Route path="/engineering/cad" element={<CAD />} />

        {/* This is the projects page */}
        <Route path="/projects" element={<Projects />} />
        {/* This is the projects sub-pages */}
          <Route path="/projects/featured" element={<Featured />} />
          <Route path="/projects/personal" element={<Personal />} />
          <Route path="/projects/research" element={<Research />} />
          <Route path="/projects/archive" element={<Archive />} />

        {/* This is the experience page */}
        <Route path="/experience" element={<Experience />} />
          {/* These are the sub-pages for the experience topics */}
          <Route path="/experience/education" element={<Education />} />
          <Route path="/experience/work" element={<Work />} />
          <Route path="/experience/leadership" element={<Leadership />} />
          <Route path="/experience/awards" element={<Awards />} />

        {/* This is the interests page */}
        <Route path="/interests" element={<Interests />} />
          {/* These are the sub-pages for the interests topics */}
          <Route path="/interests/music" element={<Music />} />
          <Route path="/interests/photography" element={<Photography />} />
          <Route path="/interests/travel" element={<Travel />} />
          <Route path="/interests/books" element={<Books />} />
          <Route path="/interests/learning" element={<Learning />} />

        {/* This is the contact page */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

    {/* This is the footer */}
    </BrowserRouter>
  );
}

// Export the app
export default App;