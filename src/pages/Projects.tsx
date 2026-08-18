// Change file as needed
import PageNavigation from "../components/PageNavigation";

function Projects() {
  return (
    <section className="section">
      <h1>Projects</h1>

      <p>
        Projects
      </p>

      <PageNavigation
        links={[
          {
            title: "Archive",
            path: "/personal-website/projects/archive",
          },
          {
            title: "Featured",
            path: "/personal-website/projects/featured",
          },
          {
            title: "Personal",
            path: "/personal-website/projects/personal",
          },
          {
            title: "Research",
            path: "/personal-website/projects/research",}
        ]}
      />
    </section>
  );
}

export default Projects;