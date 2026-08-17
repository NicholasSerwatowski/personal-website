import { schools } from "../../data/education";
import EducationCard from "../../components/EducationCard";

function Education() {
  return (
    <div className="section">
      <h1>Education</h1>

      <div className="education-grid">
        {schools.map((school) => (
          <EducationCard
            key={school.id}
            school={school}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;