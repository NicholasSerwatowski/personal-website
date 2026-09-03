import "../styles/about.css";

import professionalImage from "../assets/ProfessionalCloseUp.jpg";

import {
  aboutIntro,
  aboutFocus,
  aboutCurrently,
  aboutBeyondEngineering,
  aboutPath,
} from "../data/about";

function About() {
  return (
    <section className="section about-page">
      {/* Introduction */}
      <div className="about-intro">
        <div className="about-intro-content">
          <p className="about-eyebrow">{aboutIntro.eyebrow}</p>

          <h1>{aboutIntro.name}</h1>

          <h2>{aboutIntro.title}</h2>

          {aboutIntro.paragraphs.map((paragraph, index) => (
            <p className="about-intro-text" key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-photo-card">
          <img
            src={professionalImage}
            alt={aboutIntro.imageAlt}
            className="about-photo"
          />

          <div className="about-photo-caption">
            <strong>{aboutIntro.caption}</strong>
            <span>{aboutIntro.captionSubtitle}</span>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <div className="about-section">
        <div className="about-section-heading">
          <p className="about-eyebrow">{aboutFocus.eyebrow}</p>

          <h2>{aboutFocus.title}</h2>
        </div>

        <div className="about-focus-grid">
          {aboutFocus.areas.map((area) => (
            <div className="about-focus-card" key={area.number}>
              <div className="about-focus-number">{area.number}</div>

              <h3>{area.title}</h3>

              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently */}
      <div className="about-section">
        <div className="about-section-heading">
          <p className="about-eyebrow">{aboutCurrently.eyebrow}</p>

          <h2>{aboutCurrently.title}</h2>
        </div>

        <div className="about-current-grid">
          {aboutCurrently.items.map((item) => (
            <div className="about-current-card" key={item.title}>
              <span className="about-current-icon">{item.icon}</span>

              <div>
                <span className="about-current-label">{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More About Me */}
      <div className="about-section about-more">
        <div className="about-section-heading">
          <p className="about-eyebrow">
            {aboutBeyondEngineering.eyebrow}
          </p>

          <h2>{aboutBeyondEngineering.title}</h2>
        </div>

        <div className="about-more-grid">
          <div>
            {aboutBeyondEngineering.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>

          <a
            href="/personal-website/interests"
            className="about-more-card"
          >
            <span>{aboutBeyondEngineering.interestsLabel}</span>

            <strong>
              {aboutBeyondEngineering.interests.join(" · ")}
            </strong>
          </a>
        </div>
      </div>

      {/* Path */}
      <div className="about-section about-path">
        <div className="about-section-heading">
          <p className="about-eyebrow">{aboutPath.eyebrow}</p>

          <h2>{aboutPath.title}</h2>
        </div>

        <div className="about-timeline">
          {aboutPath.timeline.map((item, index) => (
            <div
              className="about-timeline-item"
              key={`${item.year}-${index}`}
            >
              <span className="about-timeline-year">
                {item.year}
              </span>

              <div>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;