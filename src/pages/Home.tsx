// Change file as needed
// This imports the profile image for the home page
import profileImage from "../assets/ProfessionalCloseUp.jpg";
import resumePreview from "../assets/Nicholas_Serwatowski_Resume.png";
import resumePDF from "../assets/Nicholas_Serwatowski_Resume.pdf";

// This represents the skills, projects, and highlights for the home page
const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "UI Engineering",
  "Design Systems",
  "Problem Solving",
];

// This represents the projects for the home page
const projects = [
  // This is one project
  {
    title: "Productive Planner",
    description:
      "A task and goal tracking app focused on calm, focused workflows for busy teams and individuals.",
    stack: ["React", "TypeScript", "CSS"],
  },
  // This is one project
  {
    title: "Insight Dashboard",
    description:
      "An analytics experience that turns complex data into clear, actionable summaries for stakeholders.",
    stack: ["JavaScript", "Node.js", "REST APIs"],
  },
  // This is one project
  {
    title: "Portfolio Platform",
    description:
      "A modern personal brand site designed to help professionals stand out during hiring and networking.",
    stack: ["Vite", "React", "Responsive Design"],
  },
];

// This represents the highlights for the home page
const highlights = [
  // One highlight
  "Built user-focused products with clean, maintainable code.",
  // One highlight
  "Comfortable turning ideas into polished interfaces and experiences.",
  // One highlight
  "Strong communicator who enjoys collaboration and fast iteration.",
  // Add more by following the same format within the brackets
];

// This is the home page
function Home() {
  return (
    <>
    {/* This is the hero section of the home page */}
  <header className="hero">
    <div className="hero-content">
        <div className="hero-copy">

          {/* This is the hero eyebrow for the home page */}
            <p className="eyebrow">
                Hello, I'm
            </p>
            <h1 className="hero-name">
                Nicholas
                <br />
                Serwatowski
            </h1>

            {/* This is the hero description for the home page */}
            <p className="hero-description">
                Mechanical and Aerospace Engineering student.
                Aspiring engineer.
                Curious about difficult problems.
            </p>
        </div>

        {/* This is the hero image for the home page which is ProfessionalCloseUp.jpg */}
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

        {/* This is the about section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>
              I'm driven by solving practical problems with elegant solutions.
            </h2>
          </div>
          <div className="about-grid">
            <p>
              I care about building products that feel polished, useful, and
              easy to trust. Whether I'm refining a user flow, writing reliable
              front-end code, or collaborating with a team, I focus on the
              details that turn a good idea into something people remember.
            </p>
            <div className="info-card">
              <h3>Now looking for</h3>
              <p>
                Opportunities where I can contribute as a thoughtful developer,
                grow in a strong team, and help build products that matter.
              </p>
            </div>
          </div>
        </section>

        {/* This is the skills section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>
              Core strengths that support modern product development.
            </h2>
          </div>
          <div className="pill-list">
            {skills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* This is the highlights section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>
              A few things that define how I approach engineering.
            </h2>
          </div>
          <div className="card-grid">
            {highlights.map((highlight) => (
              <article className="project-card" key={highlight}>
                <p>{highlight}</p>
              </article>
            ))}
          </div>
        </section>

        {/* This is the projects section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>
              Projects that reflect how I think, design, and build.
            </h2>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title} >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* This is the resume section of the home page */}
        <section className="section resume-section">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>
              A snapshot of my engineering experience and skills.
            </h2>
          </div>

          <div className="resume-card">
            <img
              src={resumePreview}
              alt="Nicholas Serwatowski Resume Preview"
              className="resume-preview"
            />

            <div className="resume-actions">
              <a
                className="button button-primary"
                href={resumePDF}
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* This is the contact section of the home page */}
        <section className="section contact-section">
          <div className="section-heading">
            <p 
            className="eyebrow">Contact
            </p>
            <h2>
              Let's talk about how I can contribute to your team.
            </h2>
          </div>
          <div className="contact-card">
            <p>
              I'm open to full-time, freelance, and collaborative
              opportunities. I'd love to hear from you.
            </p>
            <div className="hero-actions">
              {/* This is the email button for the home page */}
              <a
                className="button button-primary"
                href="mailto:nick.serwatowski@gmail.com"
              >
                Email Me
              </a>
              {/* This is the LinkedIn button for the home page */}
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/nicholasserwatowski/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}

// Export the home page
export default Home;