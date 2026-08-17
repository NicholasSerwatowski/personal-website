// Change file as needed
// This imports the profile image for the home page
import profileImage from "../assets/ProfessionalCloseUp.jpg";
import resumePreview from "../assets/Nicholas_Serwatowski_Resume.png";
import resumePDF from "../assets/Nicholas_Serwatowski_Resume.pdf";
import cwruImage from "../assets/cwru.jpg";
import HighlightCarousel from "../components/HighlightCarousel";
import SkillsTabs from "../components/SkillsTabs";

// This represents the skills, projects, and highlights for the home page
const skillCategories = [
  {
    name: "Engineering",
    skills: [
      "CAD",
      "Mechanical Design",
      "Prototyping",
      "Manufacturing",
      "Testing",
      "Troubleshooting",
    ],
  },
  {
    name: "Programming",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "React",
    ],
  },
  {
    name: "Software",
    skills: [
      "SolidWorks",
      "MATLAB",
      "Git",
      "VS Code",
      "Microsoft Excel",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Leadership",
      "Technical Writing",
    ],
  },
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

const highlights = [
  {
    title: "Combat Robotics",
    description:
      "Designing and competing with CWRUBotix, a collegiate combat robotics team.",
    image: cwruImage,
  },
  {
    title: "Case Wind",
    description:
      "Working with Case Wind to design and develop a wind turbine for the DOE Collegiate Wind Competition.",
    image: cwruImage,
  },
  {
    title: "Music",
    description:
      "A lifelong interest in music that first sparked my fascination with patterns.",
    image: cwruImage,
  },
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
              I'm driven by solving practical problems with innovative solutions.
            </h2>
          </div>
          <div className="about-grid">
            <p>
              I'm a Mechanical & Aerospace Engineering student at Case Western Reserve University, 
              and I care about building things that are useful, well-designed, and worth trusting. 
              What motivates me most is the process of taking something I don't understand, 
              breaking it down, and figuring out how it works. I tend to see the world as one 
              big problem to solve, and I genuinely enjoy looking for the patterns and principles 
              that make it all make sense. 
              <br /><br />
              I grew up in Papillion, Nebraska, where I first became 
              interested in patterns through music and brain puzzles. I started playing violin before 
              moving to piano, which eventually led me into percussion and a variety of band activities 
              throughout school. Music was probably my first real introduction to recognizing patterns 
              and relationships. The more I played, the more I started noticing those same ideas in 
              mathematics. I became fascinated by the way mathematical patterns could show up in things 
              that seemed completely unrelated. 
              <br /><br />
              That curiosity eventually led me to math and physics. 
              I liked that they gave me a way to describe and understand the world around me. But I didn't 
              just want to understand how things worked on paper—I wanted to do something with that 
              understanding. I became fascinated by the idea of using those principles to design, build, 
              test, and improve something in the real world. That is what ultimately drew me to mechanical 
              and aerospace engineering. 
              <br /><br />
              Today, I get to pursue that interest through my coursework and 
              hands-on projects at Case Western. Whether I'm designing and building a combat robot with CWRUbotix, 
              working on a wind turbine through Case Wind, or simply taking something apart to understand it, 
              I enjoy the same process: understand the problem, find the patterns, build a solution, and see if it 
              actually works. 
              <br /><br />
              Outside of engineering, I still find myself drawn to the same things that started this whole 
              journey—music, puzzles, learning, and anything that gives me an excuse to figure out how something works.
            </p>
            <div className="info-card">
              <h3>Now looking for</h3>
              <p>
                Internship and research opportunities where I can develop my skills in
                mechanical and aerospace engineering, while contributing to meaningful projects.
              </p>
            </div>
          </div>
        </section>

        {/* This is the skills section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>
              Core strengths that support modern engineering and product development.
            </h2>
          </div>

          <SkillsTabs categories={skillCategories} />
        </section>

        {/* This is the highlights section of the home page */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>Experiences in my life I'm proud of</h2>
          </div>

  <HighlightCarousel highlights={highlights} />
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
              I'm looking for internship and research opportunities where I can 
              develop my skills in mechanical and aerospace engineering, 
              while contributing to meaningful projects.
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