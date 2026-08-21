import profileImage from "../assets/ProfessionalCloseUp.jpg";
import resumePreview from "../assets/Nicholas_Serwatowski_Resume.png";
import resumePDF from "../assets/Nicholas_Serwatowski_Resume.pdf";

import HighlightCarousel from "../components/home/HighlightCarousel";
import SkillsTabs from "../components/home/SkillsTabs";

import { homePage } from "../data/home";
import { skillCategories } from "../data/home/skills";
import { highlights } from "../data/home/highlights";
import { homeProjects } from "../data/home/projects";

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">

          <div className="hero-copy">

            <p className="eyebrow">
              {homePage.hero.eyebrow}
            </p>

            <h1 className="hero-name">
              {homePage.hero.name}
            </h1>

            <p className="hero-description">
              {homePage.hero.title}
            </p>

          </div>

          <div className="hero-image">
            <img
              src={profileImage}
              alt="Nicholas"
              className="profile-image"
            />
          </div>

        </div>
      </header>


      <main>

        {/* About */}
        <section className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.about.eyebrow}
            </p>

            <h2>
              {homePage.about.heading}
            </h2>

          </div>

          <div className="about-grid">

            <div>
              {homePage.about.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="info-card">

              <h3>
                {homePage.about.card.title}
              </h3>

              <p>
                {homePage.about.card.text}
              </p>

            </div>

          </div>

        </section>


        {/* Skills */}
        <section className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.skills.eyebrow}
            </p>

            <h2>
              {homePage.skills.heading}
            </h2>

          </div>

          <SkillsTabs
            categories={skillCategories}
          />

        </section>


        {/* Highlights */}
        <section className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.highlights.eyebrow}
            </p>

            <h2>
              {homePage.highlights.heading}
            </h2>

          </div>

          <HighlightCarousel
            highlights={highlights}
          />

        </section>


        {/* Selected Work */}
        <section className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.selectedWork.eyebrow}
            </p>

            <h2>
              {homePage.selectedWork.heading}
            </h2>

          </div>

          <div className="card-grid">

            {homeProjects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="stack-list">

                  {project.stack.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* Resume */}
        <section className="section resume-section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.resume.eyebrow}
            </p>

            <h2>
              {homePage.resume.heading}
            </h2>

          </div>

          <div className="resume-card">

            <img
              src={resumePreview}
              alt={homePage.resume.previewAlt}
              className="resume-preview"
            />

            <div className="resume-actions">

              <a
                className="button button-primary"
                href={resumePDF}
                download
              >
                {homePage.resume.downloadText}
              </a>

            </div>

          </div>

        </section>


        {/* Contact */}
        <section className="section contact-section">

          <div className="section-heading">

            <p className="eyebrow">
              {homePage.contact.eyebrow}
            </p>

            <h2>
              {homePage.contact.heading}
            </h2>

          </div>

          <div className="contact-card">

            <p>
              {homePage.contact.text}
            </p>

            <div className="hero-actions">

              <a
                className="button button-primary"
                href={homePage.contact.email.link}
              >
                {homePage.contact.email.text}
              </a>

              <a
                className="button button-secondary"
                href={homePage.contact.linkedin.link}
                target="_blank"
                rel="noreferrer"
              >
                {homePage.contact.linkedin.text}
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;