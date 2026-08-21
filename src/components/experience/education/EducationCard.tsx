import { Link } from "react-router-dom";
import type { School } from "../../../data/experience/education";

interface EducationCardProps {
  school: School;
}

function EducationCard({ school }: EducationCardProps) {
  return (
    <article className="education-card">
      <img src={school.image} alt={school.name} />

      <div className="education-card-content">
        <p className="eyebrow">Education</p>

        <h2>{school.name}</h2>

        <p className="education-degree">
          {school.degree}
        </p>

        <div className="education-meta">
          <span>{school.years}</span>
          <span>{school.location}</span>
        </div>

        <p className="education-description">
          {school.description}
        </p>

        <Link
          to={school.link}
          className="education-card-button"
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}

export default EducationCard;