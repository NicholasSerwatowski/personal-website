import React, { useEffect, useState } from "react";

import "../../styles/interests/learning.css";

import {
  learningPage,
  developedCategories,
} from "../../data/interests/learning";

type LearningImage = {
  src: string;
  caption: string;
};

type LearningMilestone = {
  date: string;
  title: string;
  description: string;
  images: LearningImage[];
};

type LearningTopic = {
  id: string;
  icon?: string;
  title: string;
  category: string;
  description: string;
  started?: string;
  milestones: LearningMilestone[];
};

const Learning: React.FC = () => {
  const [selectedTopic, setSelectedTopic] =
    useState<LearningTopic | null>(null);

  const [selectedImage, setSelectedImage] =
    useState<LearningImage | null>(null);

  const [activeDevelopedCategory, setActiveDevelopedCategory] =
    useState(0);

  const [activeResourceCategory, setActiveResourceCategory] =
    useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          setSelectedTopic(null);
        }
      }
    };

    if (selectedTopic || selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedTopic, selectedImage]);

  const openTopic = (topic: LearningTopic) => {
    setSelectedTopic(topic);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  const openImage = (image: LearningImage) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const renderLearningCard = (
    topic: LearningTopic,
    index: number
  ) => {
    return (
      <button
        className="learning-card"
        key={topic.id}
        onClick={() => openTopic(topic)}
        type="button"
      >
        <div className="learning-card-default">
          <div className="learning-card-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="learning-card-content">
            {topic.icon && (
              <div className="interest-icon">
                {topic.icon}
              </div>
            )}

            <span className="learning-category">
              {topic.category}
            </span>

            <h3>{topic.title}</h3>

            <p>{topic.description}</p>
          </div>
        </div>

        <div className="learning-card-hover">
          <span>{topic.category}</span>

          <h3>{topic.title}</h3>

          <strong>
            Learn More <span>→</span>
          </strong>
        </div>
      </button>
    );
  };

  const currentDevelopedCategory =
    developedCategories[activeDevelopedCategory];

  const developedTopics =
    currentDevelopedCategory?.topics ?? [];

  const currentResourceCategory =
    learningPage.resources.categories[activeResourceCategory];

  const resourceItems =
    currentResourceCategory?.items ?? [];

  return (
    <div className="learning-page">
      <header className="learning-header">
        <h1>{learningPage.title}</h1>

        <p>{learningPage.description}</p>
      </header>

      <main className="learning-content">
        {/* =====================================================
            CURRENTLY LEARNING
        ===================================================== */}

        <section className="learning-section">
          <div className="section-heading">
            <h2>
              {learningPage.currentlyLearning.title}
            </h2>

            <p>
              {learningPage.currentlyLearning.description}
            </p>
          </div>

          <div className="learning-grid">
            {learningPage.currentlyLearning.topics.map(
              renderLearningCard
            )}
          </div>
        </section>

        {/* =====================================================
            DEVELOPED
        ===================================================== */}

        <section className="learning-section">
          <div className="section-heading">
            <h2>{learningPage.developed.title}</h2>

            <p>{learningPage.developed.description}</p>
          </div>

          <div className="developed-tabs">
            <div className="developed-tab-list">
              {developedCategories.map((category, index) => (
                <button
                  key={category.name}
                  className={`developed-tab ${
                    index === activeDevelopedCategory
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveDevelopedCategory(index)
                  }
                  type="button"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="learning-grid developed-grid">
            {developedTopics.map(renderLearningCard)}
          </div>
        </section>

        {/* =====================================================
            AREAS OF INTEREST
        ===================================================== */}

        <section className="learning-section">
          <div className="section-heading">
            <h2>
              {learningPage.areasOfInterest.title}
            </h2>

            <p>
              {learningPage.areasOfInterest.description}
            </p>
          </div>

          <div className="interest-grid">
            {learningPage.areasOfInterest.areas.map(
              (area, index) => (
                <article
                  className="interest-card"
                  key={index}
                >
                  <div className="interest-icon">
                    {area.icon}
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </article>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            RESOURCES
        ===================================================== */}

        <section className="learning-section">
          <div className="section-heading">
            <h2>{learningPage.resources.title}</h2>

            <p>{learningPage.resources.description}</p>
          </div>

          <div className="resource-tabs">
            <div className="resource-tab-list">
              {learningPage.resources.categories.map(
                (category, index) => (
                  <button
                    key={category.name}
                    className={`resource-tab ${
                      index === activeResourceCategory
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveResourceCategory(index)
                    }
                    type="button"
                  >
                    {category.name}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="resource-grid">
            {resourceItems.map((resource, index) => {
              const hasLink =
                resource.link &&
                resource.link !== "#";

              return (
                <a
                  href={resource.link}
                  className={`resource-card ${
                    hasLink
                      ? "resource-card-linked"
                      : ""
                  }`}
                  key={index}
                  target={
                    hasLink ? "_blank" : undefined
                  }
                  rel={
                    hasLink
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={(event) => {
                    if (!hasLink) {
                      event.preventDefault();
                    }
                  }}
                >
                  <div className="resource-card-content">
                    <span className="resource-type">
                      {resource.type}
                    </span>

                    <h3>{resource.title}</h3>

                    <p>{resource.creator}</p>
                  </div>

                  {hasLink && (
                    <span className="resource-link-overlay">
                      View Resource ↗
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            LEARNING PHILOSOPHY
        ===================================================== */}

        <section className="learning-philosophy">
          <h2>{learningPage.philosophy.title}</h2>

          <p>{learningPage.philosophy.description}</p>
        </section>
      </main>

      {/* =======================================================
          LEARNING MODAL
      ======================================================= */}

      {selectedTopic && (
        <div
          className="learning-overlay"
          onClick={closeTopic}
          role="presentation"
        >
          <div
            className="learning-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="learning-modal-title"
          >
            <button
              className="learning-modal-close"
              onClick={closeTopic}
              type="button"
              aria-label="Close learning details"
            >
              &times;
            </button>

            <header className="learning-modal-header">
              <span className="learning-modal-category">
                {selectedTopic.category}
              </span>

              <h2 id="learning-modal-title">
                {selectedTopic.title}
              </h2>

              <p>{selectedTopic.description}</p>

              {selectedTopic.started && (
                <div className="learning-modal-started">
                  <span>Started</span>
                  <strong>{selectedTopic.started}</strong>
                </div>
              )}
            </header>

            <section className="learning-modal-section">
              <div className="learning-modal-section-heading">
                <span>01</span>
                <h3>Learning Journey</h3>
              </div>

              <div className="modal-learning-timeline">
                {selectedTopic.milestones.map(
                  (milestone, index) => (
                    <article
                      className="modal-timeline-item"
                      key={index}
                    >
                      <div className="modal-timeline-line">
                        <div className="modal-timeline-dot">
                          <span>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="modal-timeline-content">
                        <span className="modal-timeline-date">
                          {milestone.date}
                        </span>

                        <h4>{milestone.title}</h4>

                        <p>{milestone.description}</p>

                        {milestone.images.filter(
                          (image) => image.src
                        ).length > 0 && (
                          <div className="milestone-photo-grid">
                            {milestone.images
                              .filter(
                                (image) => image.src
                              )
                              .map(
                                (
                                  image,
                                  imageIndex
                                ) => (
                                  <button
                                    className="milestone-photo-button"
                                    key={imageIndex}
                                    onClick={() =>
                                      openImage(image)
                                    }
                                    type="button"
                                    aria-label={`View ${
                                      image.caption ||
                                      "photo"
                                    } enlarged`}
                                  >
                                    <img
                                      src={image.src}
                                      alt={
                                        image.caption ||
                                        "Learning milestone"
                                      }
                                    />

                                    <span className="milestone-photo-expand">
                                      View
                                    </span>
                                  </button>
                                )
                              )}
                          </div>
                        )}
                      </div>
                    </article>
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* =======================================================
          PHOTO LIGHTBOX
      ======================================================= */}

      {selectedImage && (
        <div
          className="photo-lightbox"
          onClick={closeImage}
          role="presentation"
        >
          <button
            className="photo-lightbox-close"
            onClick={closeImage}
            type="button"
            aria-label="Close photo"
          >
            &times;
          </button>

          <img
            src={selectedImage.src}
            alt={
              selectedImage.caption ||
              "Enlarged learning milestone"
            }
            className="photo-lightbox-expanded"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </div>
  );
};

export default Learning;