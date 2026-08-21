import { workExperience } from "../../data/experience/work";

function Work() {
  return (
    <div className="section">
      <h1>Work</h1>

      <div className="work-list">
        {workExperience.map((work, index) => (
          <div className="work-card" key={index}>
            {work.image && (
              <img
                src={work.image}
                alt={`${work.organization} logo`}
                className="work-image"
              />
            )}

            <div className="work-content">
              <h2>{work.title}</h2>

              <h3>{work.organization}</h3>

              <p className="work-meta">
                {work.startDate} – {work.endDate}
                {work.location && ` • ${work.location}`}
                {work.type && ` • ${work.type}`}
              </p>

              <p>{work.description}</p>

              {work.responsibilities &&
                work.responsibilities.length > 0 && (
                  <div className="work-responsibilities">
                    <h4>Responsibilities</h4>

                    <ul>
                      {work.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {work.skills && work.skills.length > 0 && (
                <div className="work-skills">
                  <h4>Skills & Technologies</h4>

                  <div className="skill-list">
                    {work.skills.map((skill, skillIndex) => (
                      <span className="skill-tag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {work.gallery && work.gallery.length > 0 && (
                <div className="work-gallery">
                  <h4>Gallery</h4>

                  <div className="work-gallery-list">
                    {work.gallery.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`${work.organization} work ${imageIndex + 1}`}
                        className="work-gallery-image"
                      />
                    ))}
                  </div>
                </div>
              )}

              {work.relatedProjects &&
                work.relatedProjects.length > 0 && (
                  <div className="related-projects">
                    <h4>Related Projects</h4>

                    <div className="related-project-list">
                      {work.relatedProjects.map(
                        (project, projectIndex) => (
                          <span
                            className="related-project"
                            key={projectIndex}
                          >
                            {project}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;