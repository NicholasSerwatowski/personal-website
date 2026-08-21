import ProjectCard from "../../components/projects/ProjectCard";
import { featuredProjects } from "../../data/projects";

const Featured = () => {
  return (
    <div className="projects-page">
      <h1>Featured</h1>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;