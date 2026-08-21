import React from "react";

import "../../styles/interests/learning.css";

import { learningPage } from "../../data/interests/learning";

const Learning: React.FC = () => {
  return (
    <div className="learning-page">

      {/* Header */}
      <header className="learning-header">
        <h1>{learningPage.title}</h1>

        <p>
          {learningPage.description}
        </p>
      </header>


      <main className="learning-content">

        {/* Currently Learning */}
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
              (topic, index) => (
                <article
                  className="learning-card"
                  key={index}
                >

                  <div className="learning-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="learning-card-content">

                    <h3>
                      {topic.title}
                    </h3>

                    <span className="learning-category">
                      {topic.category}
                    </span>

                    <p>
                      {topic.description}
                    </p>

                    <div className="learning-progress">

                      <div className="progress-label">
                        <span>Progress</span>

                        <span>
                          {topic.progress}
                        </span>
                      </div>

                      <div className="progress-bar">
                        <div className="progress-fill" />
                      </div>

                    </div>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Areas of Interest */}
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

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.description}
                  </p>

                </article>
              )
            )}

          </div>

        </section>


        {/* Learning Through Projects */}
        <section className="learning-section">

          <div className="section-heading">
            <h2>
              {learningPage.learningThroughProjects.title}
            </h2>

            <p>
              {learningPage.learningThroughProjects.description}
            </p>
          </div>

          <div className="learning-timeline">

            {learningPage.learningThroughProjects.projects.map(
              (project, index) => (
                <article
                  className="timeline-item"
                  key={index}
                >

                  <div className="timeline-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="timeline-content">

                    <span className="timeline-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Resources */}
        <section className="learning-section">

          <div className="section-heading">
            <h2>
              {learningPage.resources.title}
            </h2>

            <p>
              {learningPage.resources.description}
            </p>
          </div>

          <div className="resource-grid">

            {learningPage.resources.items.map(
              (resource, index) => (
                <a
                  href={resource.link}
                  className="resource-card"
                  key={index}
                >

                  <span className="resource-type">
                    {resource.type}
                  </span>

                  <h3>
                    {resource.title}
                  </h3>

                  <p>
                    {resource.creator}
                  </p>

                </a>
              )
            )}

          </div>

        </section>


        {/* Learning Philosophy */}
        <section className="learning-philosophy">

          <h2>
            {learningPage.philosophy.title}
          </h2>

          <p>
            {learningPage.philosophy.description}
          </p>

        </section>

      </main>

    </div>
  );
};

export default Learning;