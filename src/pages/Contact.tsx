/* Overall contact page settings */

import ContactLink from "../components/contact/ContactLink";
import linkedinImage from "../assets/linkedin.png";
import githubImage from "../assets/github.png";
import emailImage from "../assets/email.png";

function Contact() {
  return (
    <div className="section contact-section">
      <h1>Contact</h1>

      <p>
        I'm always open to connecting, discussing engineering projects,
        or talking about potential opportunities.
      </p>

      <div className="contact-links">

        <ContactLink
          title="LinkedIn"
          image={linkedinImage}
          link="https://www.linkedin.com/in/nicholasserwatowski/"
        />

        <ContactLink
          title="GitHub"
          image={githubImage}
          link="https://github.com/NicholasSerwatowski"
        />

        <ContactLink
          title="Email"
          image={emailImage}
          link="mailto:nick.serwatowski@gmail.com"
        />

      </div>
    </div>
  );
}

export default Contact;