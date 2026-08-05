import profileImage from "../assets/ProfessionalCloseUp.jpg";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "UI Engineering",
  "Design Systems",
  "Problem Solving",
];

const projects = [
  {
    title: "Productive Planner",
    description:
      "A task and goal tracking app focused on calm, focused workflows for busy teams and individuals.",
    stack: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Insight Dashboard",
    description:
      "An analytics experience that turns complex data into clear, actionable summaries for stakeholders.",
    stack: ["JavaScript", "Node.js", "REST APIs"],
  },
  {
    title: "Portfolio Platform",
    description:
      "A modern personal brand site designed to help professionals stand out during hiring and networking.",
    stack: ["Vite", "React", "Responsive Design"],
  },
];

const highlights = [
  "Built user-focused products with clean, maintainable code.",
  "Comfortable turning ideas into polished interfaces and experiences.",
  "Strong communicator who enjoys collaboration and fast iteration.",
];

function Home() {
  return (
    <>
      <header className="hero">
    <div className="hero-content">
        <div className="hero-copy">
            <p className="eyebrow">
                Hello, I'm
            </p>
            <h1 className="hero-name">
                Nicholas
                <br />
                Serwatowski
            </h1>
            <p className="hero-description">
                Computer Engineering student.
                Software Engineer.
                Builder.
                Curious about difficult problems.
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
                key={project.title}
              >
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

        <section className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>

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
              <a
                className="button button-primary"
                href="mailto:nick.serwatowski@gmail.com"
              >
                Email Me
              </a>

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

export default Home;