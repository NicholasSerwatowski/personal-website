import "../../../styles/pages.css";
import ProjectGallery from "../../../components/ProjectGallery";
import cwruImage from "../../../assets/cwru.jpg";

const SampleF = () => {
  return (
    <div className="project-detail-page">

      {/* Project Header */}
      <header className="project-detail-header">
        <div className="project-detail-title">
          <h1>Project Name</h1>

          <p>
            Project Description
          </p>
        </div>

        <div className="project-detail-hero">
          <img
            src={cwruImage}
            alt="Sample A project"
          />
        </div>

        <div className="project-detail-meta">
          <div className="project-meta-item">
            <span className="project-meta-label">Project Type</span>
            <span className="project-meta-value">
              Project Type
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">Date</span>
            <span className="project-meta-value">Date</span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">Role</span>
            <span className="project-meta-value">Role</span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">Organization</span>
            <span className="project-meta-value">Organization</span>
          </div>
        </div>
      </header>


      {/* Overview */}
      <section className="project-detail-section">
        <h2>Overview</h2>

        <p>
          Project Overview
        </p>

        <p>
          Project Overview Extended
        </p>
      </section>


      {/* My Contributions */}
      <section className="project-detail-section">
        <h2>My Contributions</h2>

        <ul>
          <li>
            Contribution 1
          </li>

          <li>
            Contribution 2
          </li>

          <li>
            Contribution 3
          </li>

          <li>
            Contribution 4
          </li>
        </ul>
      </section>


      {/* Engineering */}
      <section className="project-detail-section">
        <h2>Details</h2>

        <p>
          Specific Details
        </p>

        <p>
          Specific Details Extended
        </p>

        <div className="project-detail-subsection">
          <h3>Project Step 1</h3>

          <p>
            Description
          </p>
        </div>

        <div className="project-detail-subsection">
          <h3>Project Step 2</h3>

          <p>
            Description
          </p>
        </div>

        <div className="project-detail-subsection">
          <h3>Project Step 3</h3>

          <p>
            Description
          </p>
        </div>
      </section>


      {/* Results */}
      <section className="project-detail-section">
        <h2>Results</h2>

        <p>
          Description
        </p>

        <p>
          Description Extended
        </p>
      </section>


      {/* Gallery */}
      <section className="project-detail-section">
  <h2>Gallery</h2>

  <ProjectGallery
    images={[
      {
        src: cwruImage,
        title: "Title",
        description:
          "Description",
      },
      {
        src: cwruImage,
        title: "Title",
        description:
          "Description",
      },
      {
        src: cwruImage,
        title: "Title",
        description:
          "Description",
      },
    ]}
  />
</section>


      {/* Technologies / Skills */}
      <section className="project-detail-section">
        <h2>Skills</h2>

        <div className="project-skills">
          <span>Skill 1</span>
          <span>Skill 2</span>
        </div>
      </section>

    </div>
  );
};

export default SampleF;