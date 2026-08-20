import { useState } from "react";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="project-gallery">

      <div className="project-gallery-image-container">
        <button
          className="project-gallery-button project-gallery-button-left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="project-gallery-image"
        />

        <button
          className="project-gallery-button project-gallery-button-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="project-gallery-info">
        <h3>{currentImage.title}</h3>

        <p>{currentImage.description}</p>
      </div>

      <div className="project-gallery-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`project-gallery-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="project-gallery-counter">
        {currentIndex + 1} / {images.length}
      </div>

    </div>
  );
};

export default ProjectGallery;