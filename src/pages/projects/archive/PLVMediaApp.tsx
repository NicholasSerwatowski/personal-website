import ProjectGallery from "../../../components/projects/ProjectGallery";
import { PLVMediaApp } from "../../../data/projects/archive/plvmediaapp";

const PLVMediaAppPage = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">

        <div className="project-detail-title">
          <h1>{PLVMediaApp.title}</h1>

          {PLVMediaApp.description && (
            <p>{PLVMediaApp.description}</p>
          )}
        </div>

        {PLVMediaApp.image && (
          <div className="project-detail-hero">
            <img
              src={PLVMediaApp.image}
              alt={PLVMediaApp.title}
            />
          </div>
        )}

        {/* Project Meta */}
        {PLVMediaApp.meta && (
          <div className="project-detail-meta">

            {PLVMediaApp.meta.type && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Project Type
                </span>

                <span className="project-meta-value">
                  {PLVMediaApp.meta.type}
                </span>
              </div>
            )}

            {PLVMediaApp.meta.date && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Date
                </span>

                <span className="project-meta-value">
                  {PLVMediaApp.meta.date}
                </span>
              </div>
            )}

            {PLVMediaApp.meta.role && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Role
                </span>

                <span className="project-meta-value">
                  {PLVMediaApp.meta.role}
                </span>
              </div>
            )}

            {PLVMediaApp.meta.organization && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Organization
                </span>

                <span className="project-meta-value">
                  {PLVMediaApp.meta.organization}
                </span>
              </div>
            )}

          </div>
        )}

      </header>

      {/* Overview */}
      {PLVMediaApp.overview && PLVMediaApp.overview.length > 0 && (
        <section className="project-detail-section">

          <h2>Overview</h2>

          {PLVMediaApp.overview.map((paragraph, index) => (
            paragraph && (
              <p key={index}>
                {paragraph}
              </p>
            )
          ))}

        </section>
      )}

      {/* My Contributions */}
      {PLVMediaApp.contributions &&
        PLVMediaApp.contributions.length > 0 && (
          <section className="project-detail-section">

            <h2>My Contributions</h2>

            <ul>
              {PLVMediaApp.contributions.map((contribution, index) => (
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
      {PLVMediaApp.details && (
        <section className="project-detail-section">

          <h2>Details</h2>

          {PLVMediaApp.details.paragraphs &&
            PLVMediaApp.details.paragraphs.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          {PLVMediaApp.details.subsections &&
            PLVMediaApp.details.subsections.map((subsection, index) => (
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
      {PLVMediaApp.results &&
        PLVMediaApp.results.length > 0 && (
          <section className="project-detail-section">

            <h2>Results</h2>

            {PLVMediaApp.results.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          </section>
        )}

      {/* Gallery */}
      {PLVMediaApp.gallery &&
        PLVMediaApp.gallery.length > 0 && (
          <section className="project-detail-section">

            <h2>Gallery</h2>

            <ProjectGallery
              images={PLVMediaApp.gallery}
            />

          </section>
        )}

      {/* Skills */}
      {PLVMediaApp.skills &&
        PLVMediaApp.skills.length > 0 && (
          <section className="project-detail-section">

            <h2>Skills</h2>

            <div className="project-skills">

              {PLVMediaApp.skills.map((skill, index) => (
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

export default PLVMediaAppPage;