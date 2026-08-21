import ContactLink from "../components/contact/ContactLink";

import { contactPage } from "../data/contact";

function Contact() {
  return (
    <div className="section contact-section">

      <h1>
        {contactPage.title}
      </h1>

      <p>
        {contactPage.description}
      </p>

      <div className="contact-links">

        {contactPage.links.map((contact) => (
          <ContactLink
            key={contact.title}
            title={contact.title}
            image={contact.image}
            link={contact.link}
          />
        ))}

      </div>

    </div>
  );
}

export default Contact;