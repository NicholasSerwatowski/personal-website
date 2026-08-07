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
            path: "/projects/archive",
          },
          {
            title: "Featured",
            path: "/projects/featured",
          },
          {
            title: "Personal",
            path: "/projects/personal",
          },
          {
            title: "Research",
            path: "/projects/research",}
        ]}
      />
    </section>
  );
}

export default Projects;