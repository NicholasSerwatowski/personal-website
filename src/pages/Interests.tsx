import PageNavigation from "../components/PageNavigation";

import booksImage from "../assets/cwru.jpg";
import learningImage from "../assets/cwru.jpg";
import musicImage from "../assets/cwru.jpg";
import photographyImage from "../assets/cwru.jpg";
import travelImage from "../assets/cwru.jpg";

function Interests() {
  return (
    <section className="section interests-page">
      <h1>Interests</h1>

      <PageNavigation
        links={[
          {
            title: "Books",
            path: "/personal-website/interests/books",
            image: booksImage,
          },
          {
            title: "Learning",
            path: "/personal-website/interests/learning",
            image: learningImage,
          },
          {
            title: "Music",
            path: "/personal-website/interests/music",
            image: musicImage,
          },
          {
            title: "Photography",
            path: "/personal-website/interests/photography",
            image: photographyImage,
          },
          {
            title: "Travel",
            path: "/personal-website/interests/travel",
            image: travelImage,
          },
        ]}
      />
    </section>
  );
}

export default Interests;