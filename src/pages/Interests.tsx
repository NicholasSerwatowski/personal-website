import PageNavigation from "../components/PageNavigation";

import { interestsPage } from "../data/interests";

function Interests() {
  return (
    <section className="section interests-page">
      <h1>{interestsPage.title}</h1>

      <PageNavigation
        links={interestsPage.links}
      />
    </section>
  );
}

export default Interests;