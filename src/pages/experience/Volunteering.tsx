import { useState } from "react";
import "../../styles/experience/volunteering.css";
import { volunteeringExperience } from "../../data/experience/volunteering";

function Volunteering() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="section">
      <h1>Volunteering</h1>

      <div className="volunteering-list">
        {volunteeringExperience.map((volunteer, index) => (
          <div className="volunteering-card" key={index}>
            {volunteer.image && (
              <img
                src={volunteer.image}
                alt={`${volunteer.organization} logo`}
                className="volunteering-image"
              />
            )}

            <div className="volunteering-content">
              <h2>{volunteer.title}</h2>

              <h3>{volunteer.organization}</h3>

              <div className="volunteering-dates">
                {volunteer.startDate} – {volunteer.endDate}
                {volunteer.location && ` • ${volunteer.location}`}
                {volunteer.type && ` • ${volunteer.type}`}
              </div>

              <p>{volunteer.description}</p>

              {volunteer.responsibilities &&
                volunteer.responsibilities.length > 0 && (
                  <div className="volunteering-responsibilities">
                    <h4>Responsibilities</h4>

                    <ul>
                      {volunteer.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {volunteer.skills &&
                volunteer.skills.length > 0 && (
                  <div className="volunteering-skills">
                    <h4>Skills</h4>

                    <div className="volunteering-skill-list">
                      {volunteer.skills.map((skill, skillIndex) => (
                        <span
                          className="volunteering-skill-tag"
                          key={skillIndex}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {volunteer.impact &&
                volunteer.impact.length > 0 && (
                  <div className="volunteering-impact">
                    <h4>Impact</h4>

                    <ul>
                      {volunteer.impact.map((impact, impactIndex) => (
                        <li key={impactIndex}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {volunteer.gallery &&
                volunteer.gallery.length > 0 && (
                  <div className="volunteering-gallery">
                    <h4>Gallery</h4>

                    <div className="volunteering-gallery-list">
                      {volunteer.gallery.map((photo, photoIndex) => (
                        <div
                          className="volunteering-gallery-item"
                          key={photoIndex}
                        >
                          <button
                            type="button"
                            className="volunteering-gallery-button"
                            onClick={() => setSelectedPhoto(photo.image)}
                          >
                            <img
                              src={photo.image}
                              alt={
                                photo.description ||
                                `${volunteer.organization} volunteer activity ${
                                  photoIndex + 1
                                }`
                              }
                              className="volunteering-gallery-image"
                            />
                          </button>

                          {photo.description && (
                            <p className="volunteering-gallery-description">
                              {photo.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {volunteer.links &&
                volunteer.links.length > 0 && (
                  <div className="volunteering-links">
                    <h4>Links</h4>

                    <div className="volunteering-link-list">
                      {volunteer.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="volunteering-link"
                        >
                          {link.title} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="volunteering-photo-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="volunteering-photo-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
            type="button"
          >
            &times;
          </button>

          <img
            src={selectedPhoto}
            alt="Enlarged volunteering photo"
            className="volunteering-photo-expanded"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Volunteering;