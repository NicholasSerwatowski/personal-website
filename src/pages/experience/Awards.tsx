import { useState } from "react";
import { awards } from "../../data/awards";

function Awards() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

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

              {award.certificates && award.certificates.length > 0 && (
                <div className="award-certificates">
                  <h4>Certificates</h4>

                  <div className="certificate-list">
                    {award.certificates.map(
                      (certificate, certificateIndex) => (
                        <div
                          className="certificate"
                          key={certificateIndex}
                        >
                          <button
                            className="certificate-button"
                            onClick={() =>
                              setSelectedCertificate(certificate.image)
                            }
                          >
                            <img
                              src={certificate.image}
                              alt={`${award.title} certificate ${
                                certificateIndex + 1
                              }`}
                            />
                          </button>

                          {certificate.description && (
                            <p>{certificate.description}</p>
                          )}
                        </div>
                      )
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