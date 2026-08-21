import React from "react";

import "../../styles/interests/travel.css";

import { travelPage } from "../../data/interests/travel";

const Travel: React.FC = () => {
  return (
    <div className="travel-page">

      {/* Header */}
      <header className="travel-header">
        <h1>{travelPage.title}</h1>

        <p>
          {travelPage.description}
        </p>
      </header>


      <main className="travel-content">

        {/* Places Visited */}
        <section className="travel-section">

          <div className="section-heading">

            <h2>
              {travelPage.placesVisited.title}
            </h2>

            <p>
              {travelPage.placesVisited.description}
            </p>

          </div>


          <div className="destination-grid">

            {travelPage.placesVisited.destinations.map(
              (destination, index) => (
                <article
                  key={index}
                  className={`destination-card ${
                    destination.featured
                      ? "destination-large"
                      : ""
                  }`}
                >

                  <div className="destination-image">

                    {destination.image ? (
                      <img
                        src={destination.image}
                        alt={destination.name}
                      />
                    ) : (
                      <span>
                        Photo
                      </span>
                    )}

                  </div>


                  <div className="destination-info">

                    <span className="destination-location">
                      {destination.country}
                    </span>

                    <h3>
                      {destination.name}
                    </h3>

                    <p>
                      {destination.description}
                    </p>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Favorite Trips */}
        <section className="travel-section">

          <div className="section-heading">

            <h2>
              {travelPage.favoriteTrips.title}
            </h2>

            <p>
              {travelPage.favoriteTrips.description}
            </p>

          </div>


          <div className="trip-list">

            {travelPage.favoriteTrips.trips.map(
              (trip, index) => (
                <article
                  className="trip-card"
                  key={index}
                >

                  <div className="trip-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <div className="trip-image">

                    {trip.image ? (
                      <img
                        src={trip.image}
                        alt={trip.name}
                      />
                    ) : (
                      <span>
                        Trip Photo
                      </span>
                    )}

                  </div>


                  <div className="trip-info">

                    <span className="trip-date">
                      {trip.date}
                    </span>

                    <h3>
                      {trip.name}
                    </h3>

                    <p className="trip-location">
                      {trip.location}
                    </p>

                    <p>
                      {trip.description}
                    </p>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Travel Style */}
        <section className="travel-section">

          <div className="section-heading">

            <h2>
              {travelPage.travelInterests.title}
            </h2>

            <p>
              {travelPage.travelInterests.description}
            </p>

          </div>


          <div className="travel-interest-grid">

            {travelPage.travelInterests.interests.map(
              (interest, index) => (
                <article
                  className="travel-interest-card"
                  key={index}
                >

                  <span className="travel-interest-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {interest.title}
                  </h3>

                  <p>
                    {interest.description}
                  </p>

                </article>
              )
            )}

          </div>

        </section>


        {/* Future Destinations */}
        <section className="travel-section">

          <div className="section-heading">

            <h2>
              {travelPage.futureDestinations.title}
            </h2>

            <p>
              {travelPage.futureDestinations.description}
            </p>

          </div>


          <div className="future-grid">

            {travelPage.futureDestinations.destinations.map(
              (destination, index) => (
                <article
                  className="future-card"
                  key={index}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {destination.name}
                  </h3>

                  <p>
                    {destination.region}
                  </p>

                </article>
              )
            )}

          </div>

        </section>


        {/* Travel Philosophy */}
        <section className="travel-closing">

          <h2>
            {travelPage.closing.title}
          </h2>

          <p>
            {travelPage.closing.description}
          </p>

        </section>

      </main>

    </div>
  );
};

export default Travel;