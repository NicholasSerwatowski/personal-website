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

              {certification.credentialId && (
                <p className="credential-id">
                  <strong>Credential ID:</strong>{" "}
                  {certification.credentialId}
                </p>
              )}

              {certification.verificationUrl && (
                <a
                  href={certification.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verification-link"
                >
                  Verify Certification
                </a>
              )}

              {certification.certificate && (
                <div className="certification-document">
                  <h4>Certificate</h4>

                  <button
                    className="certificate-button"
                    onClick={() =>
                      setSelectedCertificate(certification.certificate!)
                    }
                  >
                    <img
                      src={certification.certificate}
                      alt={`${certification.title} certificate`}
                    />
                  </button>
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