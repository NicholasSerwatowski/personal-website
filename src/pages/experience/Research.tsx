import { researchExperience } from "../../data/research";

function Research() {
  return (
    <div className="section">
      <h1>Research</h1>

      <p className="research-intro">
        I am interested in opportunities to apply engineering principles to
        open-ended problems and contribute to meaningful research. This section
        documents my research experiences, projects, publications, and other
        academic contributions.
      </p>

      <div className="research-list">
        {researchExperience.map((research, index) => (
          <div className="research-card" key={index}>
            {research.image && (
              <img
                src={research.image}
                alt={`${research.organization} logo`}
                className="research-image"
              />
            )}

            <div className="research-content">
              <h2>{research.title}</h2>

              <h3>{research.organization}</h3>

              {research.advisor && (
                <p className="research-advisor">
                  <strong>Advisor:</strong> {research.advisor}
                </p>
              )}

              <p className="research-meta">
                {research.startDate}
                {research.endDate && ` – ${research.endDate}`}
                {research.location && ` • ${research.location}`}
              </p>

              <p>{research.description}</p>

              {research.researchAreas &&
                research.researchAreas.length > 0 && (
                  <div className="research-section">
                    <h4>Research Areas</h4>

                    <div className="research-tag-list">
                      {research.researchAreas.map((area, areaIndex) => (
                        <span className="research-tag" key={areaIndex}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {research.responsibilities &&
                research.responsibilities.length > 0 && (
                  <div className="research-section">
                    <h4>Responsibilities</h4>

                    <ul>
                      {research.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {research.skills && research.skills.length > 0 && (
                <div className="research-section">
                  <h4>Skills & Technologies</h4>

                  <div className="research-tag-list">
                    {research.skills.map((skill, skillIndex) => (
                      <span className="research-tag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {research.publications &&
                research.publications.length > 0 && (
                  <div className="research-section">
                    <h4>Publications & Presentations</h4>

                    <ul>
                      {research.publications.map(
                        (publication, publicationIndex) => (
                          <li key={publicationIndex}>
                            {publication}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {research.gallery && research.gallery.length > 0 && (
                <div className="research-section">
                  <h4>Gallery</h4>

                  <div className="research-gallery">
                    {research.gallery.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`${research.title} research image ${
                          imageIndex + 1
                        }`}
                        className="research-gallery-image"
                      />
                    ))}
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

export default Research;