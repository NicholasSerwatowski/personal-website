import "../styles/about.css";

import professionalImage from "../assets/ProfessionalCloseUp.jpg";

function About() {
  return (
    <section className="section about-page">
      {/* Introduction */}
      <div className="about-intro">
        <div className="about-intro-content">
          <p className="about-eyebrow">ABOUT ME</p>

          <h1>Nicholas Serwatowski</h1>

          <h2>Mechanical & Aerospace Engineering</h2>

          <p className="about-intro-text">
            I enjoy turning ideas into things that actually work. From combat
            robots to wind turbines, I like getting hands-on with engineering
            problems and figuring out how to design, build, test, and improve
            them.
          </p>

          <p className="about-intro-text">
            I'm particularly interested in practical mechanical engineering,
            hands-on design, manufacturing, testing, and solving problems that
            require both technical thinking and creativity.
          </p>
        </div>

        <div className="about-photo-card">
          <img
            src={professionalImage}
            alt="Nicholas Serwatowski"
            className="about-photo"
          />

          <div className="about-photo-caption">
            <strong>Nicholas Serwatowski</strong>
            <span>Mechanical & Aerospace Engineering</span>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <div className="about-section">
        <div className="about-section-heading">
          <p className="about-eyebrow">WHAT I DO</p>
          <h2>Engineering from idea to reality.</h2>
        </div>

        <div className="about-focus-grid">
          <div className="about-focus-card">
            <div className="about-focus-number">01</div>
            <h3>Design</h3>
            <p>
              Developing mechanical designs, CAD models, and engineering
              solutions with an emphasis on function and practicality.
            </p>
          </div>

          <div className="about-focus-card">
            <div className="about-focus-number">02</div>
            <h3>Build</h3>
            <p>
              Turning designs into physical systems through manufacturing,
              fabrication, assembly, and hands-on problem solving.
            </p>
          </div>

          <div className="about-focus-card">
            <div className="about-focus-number">03</div>
            <h3>Test</h3>
            <p>
              Testing and evaluating mechanical systems, analyzing results,
              troubleshooting failures, and iterating toward better designs.
            </p>
          </div>

          <div className="about-focus-card">
            <div className="about-focus-number">04</div>
            <h3>Solve</h3>
            <p>
              Breaking complicated problems into manageable pieces and finding
              practical solutions that work in the real world.
            </p>
          </div>
        </div>
      </div>

      {/* Currently */}
      <div className="about-section">
        <div className="about-section-heading">
          <p className="about-eyebrow">CURRENTLY</p>
          <h2>What I'm working on.</h2>
        </div>

        <div className="about-current-grid">
          <div className="about-current-card">
            <span className="about-current-icon">🎓</span>
            <div>
              <span className="about-current-label">STUDYING</span>
              <h3>Case Western Reserve University</h3>
              <p>Mechanical & Aerospace Engineering</p>
            </div>
          </div>

          <div className="about-current-card">
            <span className="about-current-icon">🤖</span>
            <div>
              <span className="about-current-label">BUILDING</span>
              <h3>CWRUBotix</h3>
              <p>Competitive combat robotics</p>
            </div>
          </div>

          <div className="about-current-card">
            <span className="about-current-icon">🌬️</span>
            <div>
              <span className="about-current-label">DEVELOPING</span>
              <h3>Case Wind</h3>
              <p>Collegiate wind turbine project</p>
            </div>
          </div>

          <div className="about-current-card">
            <span className="about-current-icon">🔧</span>
            <div>
              <span className="about-current-label">LEARNING</span>
              <h3>New Things</h3>
              <p>Tools, techniques, and ways to build better things</p>
            </div>
          </div>
        </div>
      </div>

      {/* More About Me */}
      <div className="about-section about-more">
        <div className="about-section-heading">
          <p className="about-eyebrow">BEYOND ENGINEERING</p>
          <h2>A little more about me.</h2>
        </div>

        <div className="about-more-grid">
          <div>
            <p>
              Engineering is a major part of what I do, but it's not the only
              thing I'm interested in. I enjoy reading, learning about new
              subjects, listening to music, photography, and traveling.
            </p>

            <p>
              I'm generally happiest when I'm working on something, learning
              something, or exploring somewhere new.
            </p>
          </div>

          <div className="about-more-card">
            <span>EXPLORE MY INTERESTS</span>
            <strong>Books · Learning · Music · Photography · Travel</strong>
          </div>
        </div>
      </div>

      {/* Path */}
      <div className="about-section about-path">
        <div className="about-section-heading">
          <p className="about-eyebrow">MY PATH</p>
          <h2>A work in progress.</h2>
        </div>

        <div className="about-timeline">
          <div className="about-timeline-item">
            <span className="about-timeline-year">2023</span>
            <div>
              <h3>Started at Case Western Reserve University</h3>
              <p>
                Began studying Mechanical & Aerospace Engineering in Cleveland.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span className="about-timeline-year">2024</span>
            <div>
              <h3>Joined CWRUBotix</h3>
              <p>
                Started getting deeper into hands-on mechanical design,
                manufacturing, and competitive robotics.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span className="about-timeline-year">2025</span>
            <div>
              <h3>Co-founded Case Wind</h3>
              <p>
                Began working with a team to develop a wind turbine for the
                Department of Energy Collegiate Wind Competition.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span className="about-timeline-year">2026</span>
            <div>
              <h3>Keep building.</h3>
              <p>
                Continuing to develop engineering experience through projects,
                research, work, and new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;