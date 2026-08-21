import PageNavigation from "../components/PageNavigation";

import archiveImage from "../assets/ocm.png";
import featuredImage from "../assets/cwru.jpg";
import personalImage from "../assets/plhs.png";

function Projects() {
  return (
    <section className="section projects-page">
      <h1>Projects</h1>

      <PageNavigation
        links={[
          {
            title: "Archive",
            path: "/personal-website/projects/archive",
            image: archiveImage,
          },
          {
            title: "Featured",
            path: "/personal-website/projects/featured",
            image: featuredImage,
          },
          {
            title: "Personal",
            path: "/personal-website/projects/personal",
            image: personalImage,
          },
        ]}
      />
    </section>
  );
}

export default Projects;