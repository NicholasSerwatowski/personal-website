import awardsImage from "../assets/experience/Awards.png";
import certificationsImage from "../assets/experience/Certifications.png";
import educationImage from "../assets/experience/Education.png";
// import researchImage from "../assets/experience/Research.png";
import volunteeringImage from "../assets/experience/Volunteering.png";
import workImage from "../assets/experience/Work.jpg";

export const experiencePage = {
  title: "Experience",

  links: [
    {
      title: "Awards",
      path: "/personal-website/experience/awards",
      image: awardsImage,
    },
    {
      title: "Certifications",
      path: "/personal-website/experience/certifications",
      image: certificationsImage,
    },
    {
      title: "Education",
      path: "/personal-website/experience/education",
      image: educationImage,
    },
    
/*   
    {
      title: "Research",
      path: "/personal-website/experience/research",
      image: researchImage,
    },
*/

    {
      title: "Volunteering",
      path: "/personal-website/experience/volunteering",
      image: volunteeringImage,
    },
    {
      title: "Work",
      path: "/personal-website/experience/work",
      image: workImage,
    },
  ],
};