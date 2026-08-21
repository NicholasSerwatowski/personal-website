import { schools } from "../../../data/experience/education";
import EducationTabs from "../../../components/experience/education/EducationTabs";

function PLHS() {
  const school = schools.find(
    (school) => school.id === "plhs"
  );

  if (!school) {
    return (
      <div className="section">
        <h1>School Not Found</h1>
      </div>
    );
  }

  return (
    <div className="section">

      <div className="school-header">

        <img
          src={school.image}
          alt={school.name}
          className="school-image"
        />

        <div className="school-header-content">

          <p className="eyebrow">
            Education
          </p>

          <h1>
            {school.name}
          </h1>

          <h2>
            {school.degree}
          </h2>

          <p className="school-meta">
            {school.years} · {school.location}
          </p>

          <p className="school-description">
            {school.description}
          </p>

        </div>

      </div>

      <EducationTabs school={school} />

    </div>
  );
}

export default PLHS;