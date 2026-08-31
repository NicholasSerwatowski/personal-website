import { useEffect, useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  // Allow the Escape key to close the expanded image
  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  // No gallery images
  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex(
      (currentIndex + 1) % images.length
    );
  };

  const closeExpandedImage = () => {
    setIsExpanded(false);
  };

  return (
    <div className="project-gallery">

      {/* Gallery Image */}
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
          onClick={() => setIsExpanded(true)}
        />

        <button
          className="project-gallery-button project-gallery-button-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>

      </div>

      {/* Image Information */}
      <div className="project-gallery-info">
        <h3>{currentImage.title}</h3>

        {currentImage.description && (
          <p>{currentImage.description}</p>
        )}
      </div>

      {/* Counter */}
      <div className="project-gallery-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Expanded Image Overlay */}
      {isExpanded && (
        <div
          className="project-gallery-overlay"
          onClick={closeExpandedImage}
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
        >
          <button
            className="project-gallery-close"
            onClick={closeExpandedImage}
            aria-label="Close expanded image"
          >
            ×
          </button>

          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="project-gallery-expanded"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
};

export default ProjectGallery;