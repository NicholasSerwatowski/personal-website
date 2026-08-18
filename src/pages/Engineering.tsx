// Change file as needed
import PageNavigation from "../components/PageNavigation";

function Engineering() {
  return (
    <section className="section">
      <h1>Engineering</h1>

      <p>
        A collection of my engineering projects and technical work.
      </p>

      <PageNavigation
        links={[
          {
            title: "Combat Robotics",
            path: "/presonal-website/engineering/combatrobotics",
          },
          {
            title: "Case Wind",
            path: "/personal-website/engineering/casewind",
          },
          {
            title: "CAD",
            path: "/personal-website/engineering/cad",
          },
        ]}
      />
    </section>
  );
}

export default Engineering;