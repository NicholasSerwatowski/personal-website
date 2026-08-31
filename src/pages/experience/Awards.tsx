import { useState } from "react";
import { awards } from "../../data/experience/awards";

function Awards() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    string | null
  >(null);

  return (
    <div className="section">
      <h1>Awards</h1>

      <div className="awards-list">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            {award.image && (
              <img
                src={award.image}
                alt={`${award.title} award`}
                className="award-image"
              />
            )}

            <div className="award-content">
              <h2>{award.title}</h2>

              <h3>{award.organization}</h3>

              <div className="award-dates">
                {award.dates.map((date, dateIndex) => (
                  <span key={dateIndex}>
                    {date}
                    {dateIndex < award.dates.length - 1 && " • "}
                  </span>
                ))}
              </div>

              <p>{award.description}</p>

              {award.certificates &&
                award.certificates.length > 0 && (
                  <div className="award-certificates">
                    <h4>Certificates</h4>

                    <div className="certificate-list">
                      {award.certificates.map(
                        (certificate, certificateIndex) => {
                          const certificateImage = (
                            <img
                              src={certificate.image}
                              alt={`${award.title} certificate ${
                                certificateIndex + 1
                              }`}
                            />
                          );

                          return (
                            <div
                              className="certificate"
                              key={certificateIndex}
                            >
                              {certificate.url ? (
                                <a
                                  href={certificate.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="certificate-button"
                                >
                                  {certificateImage}

                                  <span className="certificate-link-overlay">
                                    View Link ↗
                                  </span>
                                </a>
                              ) : (
                                <button
                                  className="certificate-button"
                                  onClick={() =>
                                    setSelectedCertificate(
                                      certificate.image
                                    )
                                  }
                                  type="button"
                                >
                                  {certificateImage}
                                </button>
                              )}

                              {certificate.description && (
                                <p>{certificate.description}</p>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="certificate-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            className="certificate-close"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate"
            type="button"
          >
            &times;
          </button>

          <img
            src={selectedCertificate}
            alt="Enlarged certificate"
            className="certificate-expanded"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Awards;