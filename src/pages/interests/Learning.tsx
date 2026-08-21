import React from "react";

const Learning: React.FC = () => {
  return (
    <div className="learning-page">
      <header className="learning-header">
        <h1>Learning</h1>
        <p>
          I'm naturally curious and enjoy learning about subjects that help me
          understand how things work, solve problems, and see the world from
          different perspectives.
        </p>
      </header>

      <main className="learning-content">
        {/* Currently Learning */}
        <section className="learning-section">
          <div className="section-heading">
            <h2>Currently Learning</h2>
            <p>
              Subjects and skills that I'm actively exploring right now.
            </p>
          </div>

          <div className="learning-grid">
            <article className="learning-card">
              <div className="learning-card-number">01</div>

              <div className="learning-card-content">
                <h3>Topic or Skill</h3>
                <span className="learning-category">Engineering</span>

                <p>
                  A short description of what I'm currently learning and why
                  I've decided to explore it.
                </p>

                <div className="learning-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>In Progress</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill" />
                  </div>
                </div>
              </div>
            </article>

            <article className="learning-card">
              <div className="learning-card-number">02</div>

              <div className="learning-card-content">
                <h3>Topic or Skill</h3>
                <span className="learning-category">Programming</span>

                <p>
                  A short description of what I'm currently learning and why
                  I've decided to explore it.
                </p>

                <div className="learning-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>In Progress</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill" />
                  </div>
                </div>
              </div>
            </article>

            <article className="learning-card">
              <div className="learning-card-number">03</div>

              <div className="learning-card-content">
                <h3>Topic or Skill</h3>
                <span className="learning-category">Personal</span>

                <p>
                  A short description of what I'm currently learning and why
                  I've decided to explore it.
                </p>

                <div className="learning-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>In Progress</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="learning-section">
          <div className="section-heading">
            <h2>Areas of Interest</h2>
            <p>
              Subjects that I frequently find myself reading, researching, or
              experimenting with.
            </p>
          </div>

          <div className="interest-grid">
            <article className="interest-card">
              <div className="interest-icon">⚙</div>
              <h3>Engineering</h3>
              <p>
                Mechanical design, manufacturing, robotics, materials, and
                practical engineering.
              </p>
            </article>

            <article className="interest-card">
              <div className="interest-icon">💻</div>
              <h3>Programming</h3>
              <p>
                Software, automation, data analysis, and using code to solve
                engineering problems.
              </p>
            </article>

            <article className="interest-card">
              <div className="interest-icon">🔬</div>
              <h3>Science</h3>
              <p>
                Physics, mathematics, and the scientific ideas behind the
                systems I encounter.
              </p>
            </article>

            <article className="interest-card">
              <div className="interest-icon">🌎</div>
              <h3>History</h3>
              <p>
                Learning how people, technologies, organizations, and societies
                have developed over time.
              </p>
            </article>

            <article className="interest-card">
              <div className="interest-icon">💡</div>
              <h3>Design</h3>
              <p>
                Understanding how thoughtful design can make products, systems,
                and experiences better.
              </p>
            </article>

            <article className="interest-card">
              <div className="interest-icon">🧠</div>
              <h3>Ideas</h3>
              <p>
                Philosophy, psychology, decision-making, and other subjects
                that challenge how I think.
              </p>
            </article>
          </div>
        </section>

        {/* Learning Through Projects */}
        <section className="learning-section">
          <div className="section-heading">
            <h2>Learning Through Projects</h2>
            <p>
              Some of the things I've learned by building, testing, and
              figuring things out for myself.
            </p>
          </div>

          <div className="learning-timeline">
            <article className="timeline-item">
              <div className="timeline-marker">01</div>

              <div className="timeline-content">
                <span className="timeline-category">Project</span>
                <h3>Project Name</h3>

                <p>
                  A short explanation of the project and what it taught me.
                  Focus on the knowledge or skills gained rather than simply
                  describing the project itself.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker">02</div>

              <div className="timeline-content">
                <span className="timeline-category">Project</span>
                <h3>Project Name</h3>

                <p>
                  A short explanation of the project and what it taught me.
                  Focus on the knowledge or skills gained rather than simply
                  describing the project itself.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker">03</div>

              <div className="timeline-content">
                <span className="timeline-category">Project</span>
                <h3>Project Name</h3>

                <p>
                  A short explanation of the project and what it taught me.
                  Focus on the knowledge or skills gained rather than simply
                  describing the project itself.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Resources */}
        <section className="learning-section">
          <div className="section-heading">
            <h2>Resources I Use</h2>
            <p>
              Books, courses, websites, and other resources that have helped me
              learn.
            </p>
          </div>

          <div className="resource-grid">
            <a href="#" className="resource-card">
              <span className="resource-type">BOOK</span>
              <h3>Resource Name</h3>
              <p>Author or creator</p>
            </a>

            <a href="#" className="resource-card">
              <span className="resource-type">COURSE</span>
              <h3>Resource Name</h3>
              <p>Platform or instructor</p>
            </a>

            <a href="#" className="resource-card">
              <span className="resource-type">WEBSITE</span>
              <h3>Resource Name</h3>
              <p>Website or organization</p>
            </a>

            <a href="#" className="resource-card">
              <span className="resource-type">OTHER</span>
              <h3>Resource Name</h3>
              <p>Creator or organization</p>
            </a>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="learning-philosophy">
          <h2>Learn. Build. Break. Understand.</h2>

          <p>
            I learn best by putting ideas into practice. Whenever possible, I
            like to move beyond simply reading about something and actually
            build, test, experiment, or take something apart to understand how
            it works.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Learning;
