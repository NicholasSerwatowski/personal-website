import PageNavigation from "../components/PageNavigation";

import { experiencePage } from "../data/experience";

function Experience() {
  return (
    <section className="section experience-page">
      <h1>{experiencePage.title}</h1>

      <PageNavigation
        links={experiencePage.links}
      />
    </section>
  );
}

export default Experience;