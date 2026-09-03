import React, { useEffect, useState } from "react";

import "../../styles/interests/travel.css";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  type Latitude,
  type Longitude,
} from "@vnedyalk0v/react19-simple-maps";

import { travelPage } from "../../data/interests/travel";

const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

type TravelLocation =
  (typeof travelPage.locations)[number];

type MapPosition = {
  coordinates: [Longitude, Latitude];
  zoom: number;
};

const toLongitude = (value: number): Longitude =>
  value as Longitude;

const toLatitude = (value: number): Latitude =>
  value as Latitude;

const toCoordinates = (
  longitude: number,
  latitude: number
): [Longitude, Latitude] => [
  toLongitude(longitude),
  toLatitude(latitude),
];

const Travel: React.FC = () => {
  const locations = travelPage.locations;

  const [selectedLocation, setSelectedLocation] =
    useState<TravelLocation | null>(null);

  const [position, setPosition] = useState<MapPosition>({
    coordinates: [
      toLongitude(0),
      toLatitude(0),
    ],
    zoom: 1,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedLocation(null);
      }
    };

    if (selectedLocation) {
      document.addEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedLocation]);

  const openLocation = (
    location: TravelLocation
  ) => {
    setSelectedLocation(location);
  };

  const closeLocation = () => {
    setSelectedLocation(null);
  };

  const zoomIn = () => {
    setPosition((current) => ({
      ...current,
      zoom: Math.min(current.zoom * 1.4, 4),
    }));
  };

  const zoomOut = () => {
    setPosition((current) => ({
      ...current,
      zoom: Math.max(current.zoom / 1.4, 1),
    }));
  };

  const resetMap = () => {
    setPosition({
      coordinates: [
        toLongitude(0),
        toLatitude(0),
      ],
      zoom: 1,
    });
  };

  return (
    <div className="travel-page">
      <header className="travel-header">
        <h1>{travelPage.title}</h1>

        <p>{travelPage.description}</p>

        <span className="travel-location-count">
          {locations.length}{" "}
          {locations.length === 1
            ? "place"
            : "places"}{" "}
          visited
        </span>
      </header>

      <main className="travel-content">
        <section className="travel-map-section">
          <div className="travel-section-heading">
            <div>
              <span className="travel-eyebrow">
                My Journey
              </span>

              <h2>Places I've Been</h2>
            </div>

            <p>
              Click a dot to learn more.
            </p>
          </div>

          <div className="travel-map-container">
            <div className="travel-map-controls">
              <button
                type="button"
                onClick={zoomIn}
                aria-label="Zoom in"
              >
                +
              </button>

              <button
                type="button"
                onClick={zoomOut}
                aria-label="Zoom out"
              >
                −
              </button>

              <button
                type="button"
                onClick={resetMap}
                aria-label="Reset map"
              >
                ↺
              </button>
            </div>

            <ComposableMap
              className="travel-map"
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 150,
              }}
              width={1000}
              height={550}
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                minZoom={1}
                maxZoom={4}
                onMoveEnd={(newPosition) => {
                  setPosition({
                    coordinates:
                      newPosition.coordinates,
                    zoom: newPosition.zoom,
                  });
                }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(
                      (geography) => (
                        <Geography
                          key={geography.rsmKey}
                          geography={geography}
                          className="travel-country"
                        />
                      )
                    )
                  }
                </Geographies>

                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    coordinates={toCoordinates(
                      location.longitude,
                      location.latitude
                    )}
                    onClick={() =>
                      openLocation(location)
                    }
                  >
                    <circle
                      r={3.5}
                      className="travel-marker"
                    />

                    <text
                      className="travel-marker-label"
                      textAnchor="middle"
                      y={-9}
                    >
                      {location.name}
                    </text>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          <p className="travel-map-caption">
            Click a location to explore that part
            of my journey. The map can also be
            dragged and zoomed.
          </p>
        </section>
      </main>

      {selectedLocation && (
        <div
          className="travel-overlay"
          onClick={closeLocation}
          role="presentation"
        >
          <div
            className="travel-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="travel-modal-title"
          >
            <button
              className="travel-modal-close"
              type="button"
              onClick={closeLocation}
              aria-label="Close travel location"
            >
              &times;
            </button>

            {selectedLocation.image && (
              <div className="travel-modal-image">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                />
              </div>
            )}

            <div className="travel-modal-content">
              <header className="travel-modal-header">
                <span className="travel-modal-region">
                  {selectedLocation.region ||
                    selectedLocation.country}
                </span>

                <h2 id="travel-modal-title">
                  {selectedLocation.name}
                </h2>

                <div className="travel-modal-meta">
                  <span>
                    {selectedLocation.country}
                  </span>

                  {selectedLocation.date && (
                    <>
                      <span className="travel-meta-divider">
                        /
                      </span>

                      <span>
                        {selectedLocation.date}
                      </span>
                    </>
                  )}
                </div>
              </header>

              {selectedLocation.description && (
                <p className="travel-modal-description">
                  {selectedLocation.description}
                </p>
              )}

              {selectedLocation.story &&
                selectedLocation.story.length > 0 && (
                  <section className="travel-story">
                    <div className="travel-story-heading">
                      <span>01</span>
                      <h3>The Story</h3>
                    </div>

                    <div className="travel-story-content">
                      {selectedLocation.story.map(
                        (paragraph, index) => (
                          <p key={index}>
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </section>
                )}

              {selectedLocation.photos &&
                selectedLocation.photos.length > 0 && (
                  <section className="travel-photos">
                    <div className="travel-story-heading">
                      <span>02</span>
                      <h3>Photos</h3>
                    </div>

                    <div className="travel-photo-grid">
                      {selectedLocation.photos.map(
                        (photo, index) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`${selectedLocation.name} ${
                              index + 1
                            }`}
                          />
                        )
                      )}
                    </div>
                  </section>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travel;