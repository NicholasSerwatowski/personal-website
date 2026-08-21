import { useState } from "react";

type Highlight = {
  title: string;
  description: string;
  image: string;
};

type HighlightCarouselProps = {
  highlights: Highlight[];
};

function HighlightCarousel({ highlights }: HighlightCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (highlights.length === 0) {
    return null;
  }

  const currentHighlight = highlights[currentIndex];

  const previousHighlight = () => {
    setCurrentIndex(
      (currentIndex - 1 + highlights.length) % highlights.length
    );
  };

  const nextHighlight = () => {
    setCurrentIndex((currentIndex + 1) % highlights.length);
  };

  return (
    <div className="highlight-carousel">
      <div className="highlight-image-container">
        <img
          src={currentHighlight.image}
          alt={currentHighlight.title}
          className="highlight-image"
        />
      </div>

      <div className="highlight-content">
        <h3>{currentHighlight.title}</h3>
        <p>{currentHighlight.description}</p>
      </div>

      <div className="highlight-controls">
        <button
          className="highlight-arrow"
          onClick={previousHighlight}
          aria-label="Previous highlight"
        >
          ←
        </button>

        <div className="highlight-dots">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.title}
              className={`highlight-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${highlight.title}`}
            />
          ))}
        </div>

        <button
          className="highlight-arrow"
          onClick={nextHighlight}
          aria-label="Next highlight"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default HighlightCarousel;