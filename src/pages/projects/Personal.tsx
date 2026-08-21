import ProjectCard from "../../components/projects/ProjectCard";
import { personalProjects } from "../../data/projects";

const Personal = () => {
  return (
    <div className="projects-page">
      <h1>Featured</h1>

      <div className="projects-grid">
        {personalProjects.map((project) => (
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

export default Personal;