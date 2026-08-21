import ProjectCard from "../../components/projects/ProjectCard";
import { archiveProjects } from "../../data/projects";

const Archive = () => {
  return (
    <div className="projects-page">
      <h1>Archive</h1>

      <div className="projects-grid">
        {archiveProjects.map((project) => (
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

export default Archive;