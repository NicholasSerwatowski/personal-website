import ProjectGallery from "../../../components/projects/ProjectGallery";

import { PersonalWebsite } from "../../../data/projects/personal/personalwebsite";

const PersonalWebsitePage = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">

        <div className="project-detail-title">
          <h1>{PersonalWebsite.title}</h1>

          {PersonalWebsite.description && (
            <p>{PersonalWebsite.description}</p>
          )}
        </div>

        {PersonalWebsite.image && (
          <div className="project-detail-hero">
            <img
              src={PersonalWebsite.image}
              alt={PersonalWebsite.title}
            />
          </div>
        )}

        {/* Project Meta */}
        {PersonalWebsite.meta && (
          <div className="project-detail-meta">

            {PersonalWebsite.meta.type && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Project Type
                </span>

                <span className="project-meta-value">
                  {PersonalWebsite.meta.type}
                </span>
              </div>
            )}

            {PersonalWebsite.meta.date && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Date
                </span>

                <span className="project-meta-value">
                  {PersonalWebsite.meta.date}
                </span>
              </div>
            )}

            {PersonalWebsite.meta.role && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Role
                </span>

                <span className="project-meta-value">
                  {PersonalWebsite.meta.role}
                </span>
              </div>
            )}

            {PersonalWebsite.meta.organization && (
              <div className="project-meta-item">
                <span className="project-meta-label">
                  Organization
                </span>

                <span className="project-meta-value">
                  {PersonalWebsite.meta.organization}
                </span>
              </div>
            )}

          </div>
        )}

      </header>

      {/* Overview */}
      {PersonalWebsite.overview && PersonalWebsite.overview.length > 0 && (
        <section className="project-detail-section">

          <h2>Overview</h2>

          {PersonalWebsite.overview.map((paragraph, index) => (
            paragraph && (
              <p key={index}>
                {paragraph}
              </p>
            )
          ))}

        </section>
      )}

      {/* My Contributions */}
      {PersonalWebsite.contributions &&
        PersonalWebsite.contributions.length > 0 && (
          <section className="project-detail-section">

            <h2>My Contributions</h2>

            <ul>
              {PersonalWebsite.contributions.map((contribution, index) => (
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
      {PersonalWebsite.details && (
        <section className="project-detail-section">

          <h2>Details</h2>

          {PersonalWebsite.details.paragraphs &&
            PersonalWebsite.details.paragraphs.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          {PersonalWebsite.details.subsections &&
            PersonalWebsite.details.subsections.map((subsection, index) => (
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
      {PersonalWebsite.results &&
        PersonalWebsite.results.length > 0 && (
          <section className="project-detail-section">

            <h2>Results</h2>

            {PersonalWebsite.results.map((paragraph, index) => (
              paragraph && (
                <p key={index}>
                  {paragraph}
                </p>
              )
            ))}

          </section>
        )}

      {/* Gallery */}
      {PersonalWebsite.gallery &&
        PersonalWebsite.gallery.length > 0 && (
          <section className="project-detail-section">

            <h2>Gallery</h2>

            <ProjectGallery
              images={PersonalWebsite.gallery}
            />

          </section>
        )}

      {/* Skills */}
      {PersonalWebsite.skills &&
        PersonalWebsite.skills.length > 0 && (
          <section className="project-detail-section">

            <h2>Skills</h2>

            <div className="project-skills">

              {PersonalWebsite.skills.map((skill, index) => (
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

export default PersonalWebsitePage;