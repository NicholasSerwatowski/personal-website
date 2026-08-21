import ProjectGallery from "../../../components/projects/ProjectGallery";
import { sampleA } from "../../../data/projects/archive/samplea";

const SampleA = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">

        <div className="project-detail-title">
          <h1>{sampleA.title}</h1>

          <p>
            {sampleA.description}
          </p>
        </div>

        <div className="project-detail-hero">
          <img
            src={sampleA.image}
            alt={sampleA.title}
          />
        </div>

        <div className="project-detail-meta">

          <div className="project-meta-item">
            <span className="project-meta-label">
              Project Type
            </span>

            <span className="project-meta-value">
              {sampleA.meta.type}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Date
            </span>

            <span className="project-meta-value">
              {sampleA.meta.date}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Role
            </span>

            <span className="project-meta-value">
              {sampleA.meta.role}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Organization
            </span>

            <span className="project-meta-value">
              {sampleA.meta.organization}
            </span>
          </div>

        </div>
      </header>


      {/* Overview */}
      <section className="project-detail-section">
        <h2>Overview</h2>

        {sampleA.overview.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </section>


      {/* My Contributions */}
      <section className="project-detail-section">
        <h2>My Contributions</h2>

        <ul>
          {sampleA.contributions.map((contribution, index) => (
            <li key={index}>
              {contribution}
            </li>
          ))}
        </ul>
      </section>


      {/* Details */}
      <section className="project-detail-section">
        <h2>Details</h2>

        {sampleA.details.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {sampleA.details.subsections.map((subsection, index) => (
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

        {sampleA.results.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </section>


      {/* Gallery */}
      <section className="project-detail-section">
        <h2>Gallery</h2>

        <ProjectGallery
          images={sampleA.gallery}
        />
      </section>


      {/* Skills */}
      <section className="project-detail-section">
        <h2>Skills</h2>

        <div className="project-skills">
          {sampleA.skills.map((skill, index) => (
            <span key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SampleA;