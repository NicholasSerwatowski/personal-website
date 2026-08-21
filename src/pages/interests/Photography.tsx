import React from "react";

import "../../styles/interests/photography.css";

import { photographyPage } from "../../data/interests/photography";

const Photography: React.FC = () => {
  return (
    <div className="photography-page">

      {/* Header */}
      <header className="photography-header">
        <h1>{photographyPage.title}</h1>

        <p>
          {photographyPage.description}
        </p>
      </header>


      <main className="photography-content">

        {/* Featured */}
        <section className="photography-section">

          <div className="section-heading">
            <h2>
              {photographyPage.featured.title}
            </h2>

            <p>
              {photographyPage.featured.description}
            </p>
          </div>

          <div className="photo-grid featured-grid">

            {photographyPage.featured.photos.map(
              (photo, index) => (
                <article
                  className={`photo-card ${
                    photo.featured ? "photo-large" : ""
                  }`}
                  key={index}
                >

                  <div className="photo-placeholder">

                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.title}
                      />
                    ) : (
                      <span>
                        {photo.featured
                          ? "Featured Photo"
                          : "Photo"}
                      </span>
                    )}

                  </div>

                  <div className="photo-caption">

                    <h3>
                      {photo.title}
                    </h3>

                    <p>
                      {photo.location} · {photo.date}
                    </p>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Collections */}
        <section className="photography-section">

          <div className="section-heading">

            <h2>
              {photographyPage.collections.title}
            </h2>

            <p>
              {photographyPage.collections.description}
            </p>

          </div>

          <div className="collection-grid">

            {photographyPage.collections.items.map(
              (collection, index) => (
                <article
                  className="collection-card"
                  key={index}
                >

                  <div className="collection-placeholder">

                    {collection.image ? (
                      <img
                        src={collection.image}
                        alt={collection.title}
                      />
                    ) : (
                      <span>
                        {collection.title}
                      </span>
                    )}

                  </div>

                  <div className="collection-info">

                    <h3>
                      {collection.title}
                    </h3>

                    <p>
                      {collection.description}
                    </p>

                    <span className="collection-count">
                      {collection.count} photographs
                    </span>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Behind the Photograph */}
        <section className="photography-section">

          <div className="section-heading">

            <h2>
              {photographyPage.behindThePhotograph.title}
            </h2>

            <p>
              {photographyPage.behindThePhotograph.description}
            </p>

          </div>

          <article className="featured-story">

            <div className="story-image">

              <div className="photo-placeholder">

                {photographyPage.behindThePhotograph.photo.image ? (
                  <img
                    src={
                      photographyPage.behindThePhotograph.photo.image
                    }
                    alt={
                      photographyPage.behindThePhotograph.photo.title
                    }
                  />
                ) : (
                  <span>
                    Photograph
                  </span>
                )}

              </div>

            </div>


            <div className="story-content">

              <h3>
                {photographyPage.behindThePhotograph.photo.title}
              </h3>

              <p className="story-location">
                {
                  photographyPage.behindThePhotograph.photo
                    .location
                }
                {" · "}
                {
                  photographyPage.behindThePhotograph.photo
                    .date
                }
              </p>

              <p>
                {
                  photographyPage.behindThePhotograph.photo
                    .story
                }
              </p>


              <div className="photo-details">

                <div>
                  <span className="detail-label">
                    Camera
                  </span>

                  <span>
                    {
                      photographyPage.behindThePhotograph.photo
                        .details.camera
                    }
                  </span>
                </div>


                <div>
                  <span className="detail-label">
                    Lens
                  </span>

                  <span>
                    {
                      photographyPage.behindThePhotograph.photo
                        .details.lens
                    }
                  </span>
                </div>


                <div>
                  <span className="detail-label">
                    Settings
                  </span>

                  <span>
                    {
                      photographyPage.behindThePhotograph.photo
                        .details.settings
                    }
                  </span>
                </div>

              </div>

            </div>

          </article>

        </section>


        {/* Closing */}
        <section className="photography-closing">

          <h2>
            {photographyPage.closing.title}
          </h2>

          <p>
            {photographyPage.closing.description}
          </p>

        </section>

      </main>

    </div>
  );
};

export default Photography;