import ProjectGallery from "../../../components/projects/ProjectGallery";

import { CaseWind } from "../../../data/projects/featured/casewind";

const CaseWindPage = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">

        <div className="project-detail-title">
          <h1>{CaseWind.title}</h1>

          {CaseWind.description && (
            <p>{CaseWind.description}</p>
          )}
        </div>

        {CaseWind.image && (
          <div className="project-detail-hero">
            <img
              src={CaseWind.image}
              alt={CaseWind.title}
            />
          </div>
        )}

        {/* Project Meta */}
        {CaseWind.meta && (
          <div className="project-detail-meta">

            {CaseWind.meta.type && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Project Type
                </span>

                <span className="project-meta-value">
                  {CaseWind.meta.type}
                </span>
              </div>
            )}

            {CaseWind.meta.date && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Date
                </span>

                <span className="project-meta-value">
                  {CaseWind.meta.date}
                </span>
              </div>
            )}

            {CaseWind.meta.role && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Role
                </span>

                <span className="project-meta-value">
                  {CaseWind.meta.role}
                </span>
              </div>
            )}

            {CaseWind.meta.organization && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Organization
                </span>

                <span className="project-meta-value">
                  {CaseWind.meta.organization}
                </span>
              </div>
            )}

          </div>
        )}

      </header>

      {/* Overview */}
      {CaseWind.overview && CaseWind.overview.length > 0 && (
        <section className="project-detail-section">

          <h2>Overview</h2>

          {CaseWind.overview.map((paragraph, index) => (
            paragraph && (
              <p key={index}>
                {paragraph}
              </p>
            )
          ))}

        </section>
      )}

      {/* My Contributions */}
      {CaseWind.contributions &&
        CaseWind.contributions.length > 0 && (
          <section className="project-detail-section">

            <h2>My Contributions</h2>

            <ul>
              {CaseWind.contributions.map((contribution, index) => (
                contribution && (
                  <li key={index}>
                    {contribution}
                  </li>
                )
              ))}
            </ul>

          </section>
        )}

      {/* Details */}
      {CaseWind.details && (
        <section className="project-detail-section">

          <h2>Details</h2>

          {CaseWind.details.paragraphs &&
            CaseWind.details.paragraphs.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          {CaseWind.details.subsections &&
            CaseWind.details.subsections.map((subsection, index) => (
              <div
                className="project-detail-subsection"
                key={index}
              >

                {subsection.title && (
                  <h3>
                    {subsection.title}
                  </h3>
                )}

                {subsection.description && (
                  <p>
                    {subsection.description}
                  </p>
                )}

              </div>
            ))}

        </section>
      )}

      {/* Results */}
      {CaseWind.results &&
        CaseWind.results.length > 0 && (
          <section className="project-detail-section">

            <h2>Results</h2>

            {CaseWind.results.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          </section>
        )}

      {/* Gallery */}
      {CaseWind.gallery &&
        CaseWind.gallery.length > 0 && (
          <section className="project-detail-section">

            <h2>Gallery</h2>

            <ProjectGallery
              images={CaseWind.gallery}
            />

          </section>
        )}

      {/* Skills */}
      {CaseWind.skills &&
        CaseWind.skills.length > 0 && (
          <section className="project-detail-section">

            <h2>Skills</h2>

            <div className="project-skills">

              {CaseWind.skills.map((skill, index) => (
                skill && (
                  <span key={index}>
                    {skill}
                  </span>
                )
              ))}

            </div>

          </section>
        )}

    </div>
  );
};

export default CaseWindPage;