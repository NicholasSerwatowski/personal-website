// Change file as needed
import PageNavigation from "../components/PageNavigation";

function Interests() {
  return (
    <section className="section">
      <h1>Interests</h1>

      <p>
        Interests
      </p>

      <PageNavigation
        links={[
          {
            title: "Photography",
            path: "/personal-website/interests/photography",
          },
          {
            title: "Books",
            path: "/personal-website/interests/books",
          },
          {
            title: "Learning",
            path: "/personal-website/interests/learning",
          },
          {
            title: "Music",
            path: "/personal-website/interests/music",
          },
          {
            title: "Travel",
            path: "/personal-website/interests/travel",}
        ]}
      />
    </section>
  );
}

export default Interests;