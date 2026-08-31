import { useState } from "react";
import { certifications } from "../../data/experience/certifications";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    string | null
  >(null);

  return (
    <div className="section">
      <h1>Certifications</h1>

      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            {/* Optional certification logo/image */}
            {certification.image && (
              <img
                src={certification.image}
                alt={`${certification.title} logo`}
                className="certification-image"
              />
            )}

            <div className="certification-content">
              <h2>{certification.title}</h2>

              <h3>{certification.organization}</h3>

              <p className="certification-date">
                Issued: {certification.date}
                {certification.expiration &&
                  ` • Expires: ${certification.expiration}`}
              </p>

              <p>{certification.description}</p>

              {/* Optional credential ID */}
              {certification.credentialId && (
                <p className="credential-id">
                  <strong>Credential ID:</strong>{" "}
                  {certification.credentialId}
                </p>
              )}

              {/* Optional certificate images */}
              {certification.certificates &&
                certification.certificates.length > 0 && (
                  <div className="certification-document">
                    <h4>Certificates</h4>

                    <div className="certificate-images">
                      {certification.certificates.map(
                        (certificate, certificateIndex) => {
                          const certificateImage = (
                            <img
                              src={certificate.image}
                              alt={`${certification.title} certificate ${
                                certificateIndex + 1
                              }`}
                              className="certificate-image"
                            />
                          );

                          return (
                            <div
                              className="certificate-item"
                              key={certificateIndex}
                            >
                              {/* Image with optional link */}
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

                              {/* Optional description */}
                              {certificate.description && (
                                <p className="certificate-description">
                                  {certificate.description}
                                </p>
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

      {/* Enlarged certificate overlay */}
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
            alt="Enlarged certification"
            className="certificate-expanded"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Certifications;