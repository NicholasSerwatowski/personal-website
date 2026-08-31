import linkedinImage from "../assets/contact/linkedin.png";
import githubImage from "../assets/contact/github.png";
import emailImage from "../assets/contact/email.png";

export const contactPage = {
  title: "Contact",

  description:
    "I'm always open to connecting, discussing engineering projects, or talking about potential opportunities.",

  links: [
    {
      title: "LinkedIn",
      image: linkedinImage,
      link: "https://www.linkedin.com/in/nicholasserwatowski/",
      imageAlt: "LinkedIn",
    },
    {
      title: "GitHub",
      image: githubImage,
      link: "https://github.com/NicholasSerwatowski",
      imageAlt: "GitHub",
    },
    {
      title: "Email",
      image: emailImage,
      link: "mailto:nick.serwatowski@gmail.com",
      imageAlt: "Email",
    },
  ],
};