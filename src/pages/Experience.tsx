// Change file as needed
import PageNavigation from "../components/PageNavigation";

function Experience() {
  return (
    <section className="section">
      <h1>Experience</h1>

      <p></p>

      <PageNavigation
        links={[
          {
            title: "Awards",
            path: "/personal-website/experience/awards",
          },
          {
            title: "Certifications",
            path: "/personal-website/experience/certifications",
          },
          {
            title: "Education",
            path: "/personal-website/experience/education",
          },
          {
            title: "Research",
            path: "/personal-website/experience/research",
          },
          {
            title: "Work",
            path: "/personal-website/experience/work",
          },
        ]}
      />
    </section>
  );
}

export default Experience;