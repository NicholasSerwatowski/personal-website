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
            path: "/interests/photography",
          },
          {
            title: "Books",
            path: "/interests/books",
          },
          {
            title: "Learning",
            path: "/interests/learning",
          },
          {
            title: "Music",
            path: "/interests/music",
          },
          {
            title: "Travel",
            path: "/interests/travel",}
        ]}
      />
    </section>
  );
}

export default Interests;