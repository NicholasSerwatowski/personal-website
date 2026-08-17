/* Don't change file */
/* Deals with the contact links on the contact page */

type ContactLinkProps = {
  title: string;
  image: string;
  link: string;
};

function ContactLink({ title, image, link }: ContactLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      <img src={image} alt="" className="contact-link-icon" />

      <span>{title}</span>

      <span className="contact-link-arrow">→</span>
    </a>
  );
}

export default ContactLink;