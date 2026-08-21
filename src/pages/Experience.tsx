import PageNavigation from "../components/PageNavigation";

import awardsImage from "../assets/cwru.jpg";
import certificationsImage from "../assets/cwru.jpg";
import educationImage from "../assets/cwru.jpg";
import researchImage from "../assets/cwru.jpg";
import workImage from "../assets/cwru.jpg";

function Experience() {
  return (
    <section className="section experience-page">
      <h1>Experience</h1>

      <PageNavigation
        links={[
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
          {
            title: "Research",
            path: "/personal-website/experience/research",
            image: researchImage,
          },
          {
            title: "Work",
            path: "/personal-website/experience/work",
            image: workImage,
          },
        ]}
      />
    </section>
  );
}

export default Experience;