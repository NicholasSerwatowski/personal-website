// This is the main app file that contains the routing for the website
import { BrowserRouter, Routes, Route } from "react-router-dom";
// This is the navbar
import Navbar from "./components/Navbar";
// These are the pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
  import Personal from "./pages/projects/Personal";
    import PersonalWebsitePage from "./pages/projects/personal/PersonalWebsite";
  import Archive from "./pages/projects/Archive";
    import PLVMediaAppPage from "./pages/projects/archive/PLVMediaApp";
  import Featured from "./pages/projects/Featured";
    import CaseWindPage from "./pages/projects/featured/CaseWind";
import Experience from "./pages/Experience";
  import Education from "./pages/experience/Education";
    import CWRU from "./pages/experience/education/CWRU";
    import PLHS from "./pages/experience/education/PLHS";
    import OCM from "./pages/experience/education/OCM";
  import Work from "./pages/experience/Work";
  import Research from "./pages/experience/Research";
  import Awards from "./pages/experience/Awards";
  import Certifications from "./pages/experience/Certifications";
import Interests from "./pages/Interests";
  import Music from "./pages/interests/Music";
  import Photography from "./pages/interests/Photography";
  import Travel from "./pages/interests/Travel";
  import Books from "./pages/interests/Books";
  import Learning from "./pages/interests/Learning";
import Contact from "./pages/Contact";


// This provides the global styles
import "./styles/app.css";
import "./styles/pages.css";
import "./styles/navbar.css";

import "./styles/about.css";
import "./styles/contact.css";
import "./styles/experience.css";
  import "./styles/experience/awards.css";
  import "./styles/experience/certifications.css";
  import "./styles/experience/education.css";
  import "./styles/experience/research.css";
  import "./styles/experience/work.css";
import "./styles/interests.css";
  import "./styles/interests/books.css";
  import "./styles/interests/learning.css";
  import "./styles/interests/music.css";
  import "./styles/interests/photography.css";
  import "./styles/interests/travel.css";
import "./styles/home.css";
import "./styles/projects.css";

// This is the main app
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* These represent the pages */}
      <Routes>

        {/* This is the home page */}
        <Route path="/personal-website" element={<Home />} />

        {/* This is the about page */}
        <Route path="/personal-website/about" element={<About />} />

        {/* This is the projects page */}
        <Route path="/personal-website/projects" element={<Projects />} />
        {/* This is the projects sub-pages */}
          <Route path="/personal-website/projects/featured" element={<Featured />} />
            <Route path="/personal-website/projects/featured/casewind" element={<CaseWindPage />} />
          <Route path="/personal-website/projects/personal" element={<Personal />} />
            <Route path="/personal-website/projects/personal/personalwebsite" element={<PersonalWebsitePage />} />
          <Route path="/personal-website/projects/archive" element={<Archive />} />
            <Route path="/personal-website/projects/archive/plvmediaapp" element={<PLVMediaAppPage />} />

        {/* This is the experience page */}
        <Route path="/personal-website/experience" element={<Experience />} />
          {/* These are the sub-pages for the experience topics */}
          <Route path="/personal-website/experience/education" element={<Education />} />
            <Route path="/personal-website/experience/education/cwru" element={<CWRU />} />
            <Route path="/personal-website/experience/education/plhs" element={<PLHS />} />
            <Route path="/personal-website/experience/education/ocm" element={<OCM />} />

          <Route path="/personal-website/experience/work" element={<Work />} />
          <Route path="/personal-website/experience/research" element={<Research />} />
          <Route path="/personal-website/experience/awards" element={<Awards />} />
          <Route path="/personal-website/experience/certifications" element={<Certifications />} />

        {/* This is the interests page */}
        <Route path="/personal-website/interests" element={<Interests />} />
          {/* These are the sub-pages for the interests topics */}
          <Route path="/personal-website/interests/music" element={<Music />} />
          <Route path="/personal-website/interests/photography" element={<Photography />} />
          <Route path="/personal-website/interests/travel" element={<Travel />} />
          <Route path="/personal-website/interests/books" element={<Books />} />
          <Route path="/personal-website/interests/learning" element={<Learning />} />

        {/* This is the contact page */}
        <Route path="/personal-website/contact" element={<Contact />} />

      </Routes>

    {/* This is the footer */}
    </BrowserRouter>
  );
}

// Export the app
export default App;