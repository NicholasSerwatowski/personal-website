// Change file as needed
import PageNavigation from "../components/PageNavigation";

function Experience() {
  return (
    <section className="section">
      <h1>Experience</h1>

      <p>
        Experience
      </p>

      <PageNavigation
        links={[
          {
            title: "Awards",
            path: "/experience/awards",
          },
          {
            title: "Education",
            path: "/experience/education",
          },
          {
            title: "Leadership",
            path: "/experience/leadership",
          },
          {
            title: "Work",
            path: "/experience/work",
          }
        ]}
      />
    </section>
  );
}

export default Experience;