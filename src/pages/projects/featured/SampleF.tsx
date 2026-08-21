import ProjectGallery from "../../../components/projects/ProjectGallery";
import { sampleF } from "../../../data/projects/featured/samplef";

const SampleF = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">

        <div className="project-detail-title">
          <h1>{sampleF.title}</h1>

          <p>
            {sampleF.description}
          </p>
        </div>

        <div className="project-detail-hero">
          <img
            src={sampleF.image}
            alt={sampleF.title}
          />
        </div>

        <div className="project-detail-meta">

          <div className="project-meta-item">
            <span className="project-meta-label">
              Project Type
            </span>

            <span className="project-meta-value">
              {sampleF.meta.type}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Date
            </span>

            <span className="project-meta-value">
              {sampleF.meta.date}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Role
            </span>

            <span className="project-meta-value">
              {sampleF.meta.role}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Organization
            </span>

            <span className="project-meta-value">
              {sampleF.meta.organization}
            </span>
          </div>

        </div>
      </header>


      {/* Overview */}
      <section className="project-detail-section">
        <h2>Overview</h2>

        {sampleF.overview.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </section>


      {/* My Contributions */}
      <section className="project-detail-section">
        <h2>My Contributions</h2>

        <ul>
          {sampleF.contributions.map((contribution, index) => (
            <li key={index}>
              {contribution}
            </li>
          ))}
        </ul>
      </section>


      {/* Details */}
      <section className="project-detail-section">
        <h2>Details</h2>

        {sampleF.details.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {sampleF.details.subsections.map((subsection, index) => (
          <div
            className="project-detail-subsection"
            key={index}
          >
            <h3>
              {subsection.title}
            </h3>

            <p>
              {subsection.description}
            </p>
          </div>
        ))}
      </section>


      {/* Results */}
      <section className="project-detail-section">
        <h2>Results</h2>

        {sampleF.results.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </section>


      {/* Gallery */}
      <section className="project-detail-section">
        <h2>Gallery</h2>

        <ProjectGallery
          images={sampleF.gallery}
        />
      </section>


      {/* Skills */}
      <section className="project-detail-section">
        <h2>Skills</h2>

        <div className="project-skills">
          {sampleF.skills.map((skill, index) => (
            <span key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SampleF;