import React, { useEffect, useState } from "react";

import "../../styles/interests/photography.css";

import { photographyPage } from "../../data/interests/photography";

type SelectedPhoto = {
  title: string;
  image: string;
};

const Photography: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<
    (typeof photographyPage.collections.items)[number] | null
  >(null);

  const [selectedPhoto, setSelectedPhoto] =
    useState<SelectedPhoto | null>(null);

  const [behindPhotoIndex, setBehindPhotoIndex] = useState(0);

  const behindPhotos = photographyPage.behindThePhotograph.photos;
  const currentBehindPhoto = behindPhotos[behindPhotoIndex];

  useEffect(() => {
    if (!selectedCollection && !selectedPhoto) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCollection, selectedPhoto]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCollection(null);
        setSelectedPhoto(null);
      }

      if (
        event.key === "ArrowLeft" &&
        !selectedCollection &&
        !selectedPhoto &&
        behindPhotos.length > 1
      ) {
        setBehindPhotoIndex((current) =>
          current === 0 ? behindPhotos.length - 1 : current - 1
        );
      }

      if (
        event.key === "ArrowRight" &&
        !selectedCollection &&
        !selectedPhoto &&
        behindPhotos.length > 1
      ) {
        setBehindPhotoIndex((current) =>
          current === behindPhotos.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedCollection,
    selectedPhoto,
    behindPhotos.length,
  ]);

  const showPreviousBehindPhoto = () => {
    setBehindPhotoIndex((current) =>
      current === 0 ? behindPhotos.length - 1 : current - 1
    );
  };

  const showNextBehindPhoto = () => {
    setBehindPhotoIndex((current) =>
      current === behindPhotos.length - 1 ? 0 : current + 1
    );
  };

  const openPhoto = (title: string, image: string | null) => {
    if (!image) return;

    setSelectedPhoto({
      title,
      image,
    });
  };

  return (
    <div className="photography-page">
      {/* =========================================
          Header
          ========================================= */}

      <header className="photography-header">
        <h1>{photographyPage.title}</h1>
        <p>{photographyPage.description}</p>
      </header>

      <main className="photography-content">
        {/* =========================================
            Featured Photography
            ========================================= */}

        <section className="photography-section">
          <div className="section-heading">
            <h2>{photographyPage.featured.title}</h2>
            <p>{photographyPage.featured.description}</p>
          </div>

          <div className="photo-grid featured-grid">
            {photographyPage.featured.photos.map((photo) => (
              <article
                className={`photo-card ${
                  photo.featured ? "photo-large" : ""
                }`}
                key={photo.id}
              >
                <button
                  className={`photo-image-button ${
                    photo.image ? "photo-clickable" : ""
                  }`}
                  onClick={() =>
                    openPhoto(photo.title, photo.image)
                  }
                  disabled={!photo.image}
                  aria-label={
                    photo.image
                      ? `View ${photo.title} full screen`
                      : undefined
                  }
                >
                  <div className="photo-placeholder">
                    {photo.image ? (
                      <>
                        <img
                          src={photo.image}
                          alt={photo.title}
                        />

                        <div className="photo-hover-overlay">
                          <span>View Photo</span>
                        </div>
                      </>
                    ) : (
                      <span>
                        {photo.featured
                          ? "Featured Photo"
                          : "Photo"}
                      </span>
                    )}
                  </div>
                </button>

                <div className="photo-caption">
                  <h3>{photo.title}</h3>
                  <p>
                    {photo.location} · {photo.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================
            Collections
            ========================================= */}

        <section className="photography-section">
          <div className="section-heading">
            <h2>{photographyPage.collections.title}</h2>
            <p>{photographyPage.collections.description}</p>
          </div>

          <div className="collection-grid">
            {photographyPage.collections.items.map((collection) => (
              <article
                className="collection-card"
                key={collection.id}
                onClick={() =>
                  setSelectedCollection(collection)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setSelectedCollection(collection);
                  }
                }}
              >
                <div className="collection-placeholder">
                  {collection.image ? (
                    <img
                      src={collection.image}
                      alt={collection.title}
                    />
                  ) : (
                    <span>{collection.title}</span>
                  )}
                </div>

                <div className="collection-info">
                  <h3>{collection.title}</h3>

                  <p>{collection.description}</p>

                  <span className="collection-count">
                    {collection.count} photographs
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================
            Behind the Photograph
            ========================================= */}

        <section className="photography-section">
          <div className="section-heading">
            <h2>
              {photographyPage.behindThePhotograph.title}
            </h2>

            <p>
              {photographyPage.behindThePhotograph.description}
            </p>
          </div>

          {currentBehindPhoto && (
            <article className="featured-story">
              <button
                className={`story-image-button ${
                  currentBehindPhoto.image
                    ? "photo-clickable"
                    : ""
                }`}
                onClick={() =>
                  openPhoto(
                    currentBehindPhoto.title,
                    currentBehindPhoto.image
                  )
                }
                disabled={!currentBehindPhoto.image}
                aria-label={
                  currentBehindPhoto.image
                    ? `View ${currentBehindPhoto.title} full screen`
                    : undefined
                }
              >
                <div className="story-image">
                  <div className="photo-placeholder">
                    {currentBehindPhoto.image ? (
                      <>
                        <img
                          src={currentBehindPhoto.image}
                          alt={currentBehindPhoto.title}
                        />

                        <div className="photo-hover-overlay">
                          <span>View Photo</span>
                        </div>
                      </>
                    ) : (
                      <span>Photograph</span>
                    )}
                  </div>
                </div>
              </button>

              <div className="story-content">
                <h3>{currentBehindPhoto.title}</h3>

                <p className="story-location">
                  {currentBehindPhoto.location}
                  {" · "}
                  {currentBehindPhoto.date}
                </p>

                <p>{currentBehindPhoto.story}</p>

                {behindPhotos.length > 1 && (
                  <div className="story-navigation-row">
                    <button
                      className="story-navigation"
                      onClick={showPreviousBehindPhoto}
                      aria-label="Previous photograph"
                    >
                      ←
                    </button>

                    <div className="story-counter">
                      {behindPhotoIndex + 1} /{" "}
                      {behindPhotos.length}
                    </div>

                    <button
                      className="story-navigation"
                      onClick={showNextBehindPhoto}
                      aria-label="Next photograph"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
            </article>
          )}
        </section>
      </main>

      {/* =========================================
          Collection Overlay
          ========================================= */}

      {selectedCollection && (
        <div
          className="photography-overlay"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="collection-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="photography-overlay-close"
              onClick={() =>
                setSelectedCollection(null)
              }
              aria-label="Close collection"
            >
              ×
            </button>

            <div className="collection-modal-header">
              <h2>{selectedCollection.title}</h2>

              <p>
                {selectedCollection.description}
              </p>
            </div>

            <div className="collection-photo-grid">
              {selectedCollection.photos.map((photo) => (
                <article
                  className="collection-photo"
                  key={photo.id}
                >
                  <button
                    className={`collection-photo-button ${
                      photo.image
                        ? "photo-clickable"
                        : ""
                    }`}
                    onClick={() =>
                      openPhoto(
                        photo.title,
                        photo.image
                      )
                    }
                    disabled={!photo.image}
                    aria-label={
                      photo.image
                        ? `View ${photo.title} full screen`
                        : undefined
                    }
                  >
                    <div className="collection-photo-image">
                      {photo.image ? (
                        <>
                          <img
                            src={photo.image}
                            alt={photo.title}
                          />

                          <div className="photo-hover-overlay">
                            <span>View Photo</span>
                          </div>
                        </>
                      ) : (
                        <span>Photograph</span>
                      )}
                    </div>
                  </button>

                  <div className="collection-photo-caption">
                    <h3>{photo.title}</h3>

                    {photo.location && photo.date && (
                      <p>
                        {photo.location} ·{" "}
                        {photo.date}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          Full-Screen Photo Overlay
          ========================================= */}

      {selectedPhoto && (
        <div
          className="photo-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="photo-overlay-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photograph"
          >
            ×
          </button>

          <div
            className="photo-overlay-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="photo-overlay-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;