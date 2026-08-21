import React from "react";

const Photography: React.FC = () => {
  return (
    <div className="photography-page">
      <header className="photography-header">
        <h1>Photography</h1>
        <p>
          Photography is a way for me to slow down, pay attention to my
          surroundings, and capture moments that I find interesting.
        </p>
      </header>

      <main className="photography-content">
        <section className="photography-section">
          <div className="section-heading">
            <h2>Featured</h2>
            <p>A selection of photographs I've taken.</p>
          </div>

          <div className="photo-grid featured-grid">
            <article className="photo-card photo-large">
              <div className="photo-placeholder">
                <span>Featured Photo</span>
              </div>

              <div className="photo-caption">
                <h3>Photograph Title</h3>
                <p>Location · Date</p>
              </div>
            </article>

            <article className="photo-card">
              <div className="photo-placeholder">
                <span>Photo</span>
              </div>

              <div className="photo-caption">
                <h3>Photograph Title</h3>
                <p>Location · Date</p>
              </div>
            </article>

            <article className="photo-card">
              <div className="photo-placeholder">
                <span>Photo</span>
              </div>

              <div className="photo-caption">
                <h3>Photograph Title</h3>
                <p>Location · Date</p>
              </div>
            </article>

            <article className="photo-card">
              <div className="photo-placeholder">
                <span>Photo</span>
              </div>

              <div className="photo-caption">
                <h3>Photograph Title</h3>
                <p>Location · Date</p>
              </div>
            </article>

            <article className="photo-card">
              <div className="photo-placeholder">
                <span>Photo</span>
              </div>

              <div className="photo-caption">
                <h3>Photograph Title</h3>
                <p>Location · Date</p>
              </div>
            </article>
          </div>
        </section>

        <section className="photography-section">
          <div className="section-heading">
            <h2>Collections</h2>
            <p>
              Groups of photographs organized around a place, subject, or
              experience.
            </p>
          </div>

          <div className="collection-grid">
            <article className="collection-card">
              <div className="collection-placeholder">
                <span>Cleveland</span>
              </div>

              <div className="collection-info">
                <h3>Cleveland</h3>
                <p>
                  Architecture, streets, landmarks, and everyday moments from
                  around Cleveland.
                </p>
                <span className="collection-count">0 photographs</span>
              </div>
            </article>

            <article className="collection-card">
              <div className="collection-placeholder">
                <span>Travel</span>
              </div>

              <div className="collection-info">
                <h3>Travel</h3>
                <p>
                  Photographs from places I've visited and experiences along
                  the way.
                </p>
                <span className="collection-count">0 photographs</span>
              </div>
            </article>

            <article className="collection-card">
              <div className="collection-placeholder">
                <span>Nature</span>
              </div>

              <div className="collection-info">
                <h3>Nature</h3>
                <p>
                  Landscapes, wildlife, weather, and other moments found
                  outdoors.
                </p>
                <span className="collection-count">0 photographs</span>
              </div>
            </article>

            <article className="collection-card">
              <div className="collection-placeholder">
                <span>Architecture</span>
              </div>

              <div className="collection-info">
                <h3>Architecture</h3>
                <p>
                  Buildings, structures, and interesting examples of design and
                  construction.
                </p>
                <span className="collection-count">0 photographs</span>
              </div>
            </article>
          </div>
        </section>

        <section className="photography-section">
          <div className="section-heading">
            <h2>Behind the Photograph</h2>
            <p>
              A closer look at some of my favorite photographs and the stories
              behind them.
            </p>
          </div>

          <article className="featured-story">
            <div className="story-image">
              <div className="photo-placeholder">
                <span>Photograph</span>
              </div>
            </div>

            <div className="story-content">
              <h3>Photograph Title</h3>

              <p className="story-location">Location · Date</p>

              <p>
                This photograph was taken because something about the scene
                caught my attention. This space can be used to explain what
                made the photograph interesting, what was happening when it
                was taken, or why it has become meaningful to me.
              </p>

              <div className="photo-details">
                <div>
                  <span className="detail-label">Camera</span>
                  <span>Camera Name</span>
                </div>

                <div>
                  <span className="detail-label">Lens</span>
                  <span>Lens Name</span>
                </div>

                <div>
                  <span className="detail-label">Settings</span>
                  <span>ƒ/2.8 · 1/250 · ISO 400</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="photography-closing">
          <h2>Seeing the World Differently</h2>
          <p>
            Photography encourages me to notice details that I might otherwise
            overlook. Whether I'm traveling somewhere new or walking through a
            familiar place, I enjoy looking for interesting perspectives,
            patterns, and moments worth remembering.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Photography;