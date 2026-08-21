import React from "react";

const Travel: React.FC = () => {
  return (
    <div className="travel-page">
      {/* Header */}
      <header className="travel-header">
        <h1>Travel</h1>
        <p>
          I enjoy exploring new places, experiencing different environments,
          and finding the interesting details that make each place unique.
        </p>
      </header>

      <main className="travel-content">
        {/* Places Visited */}
        <section className="travel-section">
          <div className="section-heading">
            <h2>Places I've Visited</h2>
            <p>
              Some of the places I've had the opportunity to explore.
            </p>
          </div>

          <div className="destination-grid">
            <article className="destination-card destination-large">
              <div className="destination-image">
                <span>Photo</span>
              </div>

              <div className="destination-info">
                <span className="destination-location">
                  United States
                </span>
                <h3>Cleveland, Ohio</h3>
                <p>
                  A place I've come to know well while studying at Case Western
                  Reserve University.
                </p>
              </div>
            </article>

            <article className="destination-card">
              <div className="destination-image">
                <span>Photo</span>
              </div>

              <div className="destination-info">
                <span className="destination-location">
                  State / Country
                </span>
                <h3>Place Name</h3>
                <p>
                  A short description of the trip or what made this place
                  memorable.
                </p>
              </div>
            </article>

            <article className="destination-card">
              <div className="destination-image">
                <span>Photo</span>
              </div>

              <div className="destination-info">
                <span className="destination-location">
                  State / Country
                </span>
                <h3>Place Name</h3>
                <p>
                  A short description of the trip or what made this place
                  memorable.
                </p>
              </div>
            </article>

            <article className="destination-card">
              <div className="destination-image">
                <span>Photo</span>
              </div>

              <div className="destination-info">
                <span className="destination-location">
                  State / Country
                </span>
                <h3>Place Name</h3>
                <p>
                  A short description of the trip or what made this place
                  memorable.
                </p>
              </div>
            </article>

            <article className="destination-card">
              <div className="destination-image">
                <span>Photo</span>
              </div>

              <div className="destination-info">
                <span className="destination-location">
                  State / Country
                </span>
                <h3>Place Name</h3>
                <p>
                  A short description of the trip or what made this place
                  memorable.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Favorite Trips */}
        <section className="travel-section">
          <div className="section-heading">
            <h2>Favorite Trips</h2>
            <p>
              Trips and experiences that have stood out to me.
            </p>
          </div>

          <div className="trip-list">
            <article className="trip-card">
              <div className="trip-number">01</div>

              <div className="trip-image">
                <span>Trip Photo</span>
              </div>

              <div className="trip-info">
                <span className="trip-date">MONTH · YEAR</span>
                <h3>Trip Name</h3>
                <p className="trip-location">
                  Location
                </p>

                <p>
                  A short story about the trip, what I did, who I went with,
                  and what made the experience memorable.
                </p>
              </div>
            </article>

            <article className="trip-card">
              <div className="trip-number">02</div>

              <div className="trip-image">
                <span>Trip Photo</span>
              </div>

              <div className="trip-info">
                <span className="trip-date">MONTH · YEAR</span>
                <h3>Trip Name</h3>
                <p className="trip-location">
                  Location
                </p>

                <p>
                  A short story about the trip, what I did, who I went with,
                  and what made the experience memorable.
                </p>
              </div>
            </article>

            <article className="trip-card">
              <div className="trip-number">03</div>

              <div className="trip-image">
                <span>Trip Photo</span>
              </div>

              <div className="trip-info">
                <span className="trip-date">MONTH · YEAR</span>
                <h3>Trip Name</h3>
                <p className="trip-location">
                  Location
                </p>

                <p>
                  A short story about the trip, what I did, who I went with,
                  and what made the experience memorable.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Travel Style */}
        <section className="travel-section">
          <div className="section-heading">
            <h2>What I Like About Traveling</h2>
            <p>
              The parts of traveling that I find most interesting.
            </p>
          </div>

          <div className="travel-interest-grid">
            <article className="travel-interest-card">
              <span className="travel-interest-number">01</span>
              <h3>Exploring</h3>
              <p>
                Wandering through unfamiliar places and discovering things
                that aren't necessarily in a guidebook.
              </p>
            </article>

            <article className="travel-interest-card">
              <span className="travel-interest-number">02</span>
              <h3>Architecture</h3>
              <p>
                Seeing how different places use buildings, infrastructure,
                and design to shape their environment.
              </p>
            </article>

            <article className="travel-interest-card">
              <span className="travel-interest-number">03</span>
              <h3>Food</h3>
              <p>
                Trying local food and finding restaurants and dishes that are
                unique to the places I visit.
              </p>
            </article>

            <article className="travel-interest-card">
              <span className="travel-interest-number">04</span>
              <h3>Photography</h3>
              <p>
                Photographing places and moments that I want to remember long
                after a trip is over.
              </p>
            </article>

            <article className="travel-interest-card">
              <span className="travel-interest-number">05</span>
              <h3>History</h3>
              <p>
                Learning about the history and events that shaped the places
                I'm visiting.
              </p>
            </article>

            <article className="travel-interest-card">
              <span className="travel-interest-number">06</span>
              <h3>People</h3>
              <p>
                Meeting people and getting a better sense of how everyday life
                differs from place to place.
              </p>
            </article>
          </div>
        </section>

        {/* Future Destinations */}
        <section className="travel-section">
          <div className="section-heading">
            <h2>Places I Want to Go</h2>
            <p>
              A growing list of places I'd like to explore someday.
            </p>
          </div>

          <div className="future-grid">
            <article className="future-card">
              <span>01</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>

            <article className="future-card">
              <span>02</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>

            <article className="future-card">
              <span>03</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>

            <article className="future-card">
              <span>04</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>

            <article className="future-card">
              <span>05</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>

            <article className="future-card">
              <span>06</span>
              <h3>Destination</h3>
              <p>Country / Region</p>
            </article>
          </div>
        </section>

        {/* Travel Philosophy */}
        <section className="travel-closing">
          <h2>Go Somewhere New</h2>
          <p>
            Traveling gives me an opportunity to step outside of my usual
            routine, experience something unfamiliar, and come back with a
            different perspective.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Travel;