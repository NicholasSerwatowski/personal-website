interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  path,
}: ProjectCardProps) => {
  return (
    <a href={path} className="project-card">
      <img src={image} alt={title} />

      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>View Project →</span>
      </div>
    </a>
  );
};

export default ProjectCard;