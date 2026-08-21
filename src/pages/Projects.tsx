import PageNavigation from "../components/PageNavigation";
import { projectCategories } from "../data/projects";

function Projects() {
  return (
    <section className="section projects-page">
      <h1>Projects</h1>

      <PageNavigation links={projectCategories} />
    </section>
  );
}

export default Projects;