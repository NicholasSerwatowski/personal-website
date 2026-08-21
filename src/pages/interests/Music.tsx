import React from "react";

import "../../styles/interests/music.css";

import { musicPage } from "../../data/interests/music";

const Music: React.FC = () => {
  return (
    <div className="music-page">

      {/* Header */}
      <header className="music-header">
        <h1>{musicPage.title}</h1>

        <p>
          {musicPage.description}
        </p>
      </header>


      <main className="music-content">

        {/* Currently Listening */}
        <section className="music-section">

          <div className="section-heading">
            <h2>
              {musicPage.currentlyListening.title}
            </h2>

            <p>
              {musicPage.currentlyListening.description}
            </p>
          </div>

          <div className="album-grid">

            {musicPage.currentlyListening.albums.map(
              (album, index) => (
                <article
                  className="album-card"
                  key={index}
                >

                  <div className="album-cover">

                    {album.cover ? (
                      <img
                        src={album.cover}
                        alt={`${album.title} album cover`}
                      />
                    ) : (
                      <span>Album Cover</span>
                    )}

                  </div>

                  <div className="album-info">

                    <h3>
                      {album.title}
                    </h3>

                    <p>
                      {album.artist}
                    </p>

                    <span>
                      {album.year}
                    </span>

                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Favorite Artists */}
        <section className="music-section">

          <div className="section-heading">
            <h2>
              {musicPage.favoriteArtists.title}
            </h2>

            <p>
              {musicPage.favoriteArtists.description}
            </p>
          </div>

          <div className="artist-list">

            {musicPage.favoriteArtists.artists.map(
              (artist, index) => (
                <article
                  className="artist-card"
                  key={index}
                >

                  <div className="artist-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>
                      {artist.name}
                    </h3>

                    <p>
                      {artist.genre} · {artist.favoriteSong}
                    </p>
                  </div>

                </article>
              )
            )}

          </div>

        </section>


        {/* Genres */}
        <section className="music-section">

          <div className="section-heading">
            <h2>
              {musicPage.genres.title}
            </h2>

            <p>
              {musicPage.genres.description}
            </p>
          </div>

          <div className="genre-grid">

            {musicPage.genres.genres.map(
              (genre, index) => (
                <div
                  className="genre-card"
                  key={index}
                >

                  <h3>
                    {genre.name}
                  </h3>

                  <p>
                    {genre.description}
                  </p>

                </div>
              )
            )}

          </div>

        </section>


        {/* Favorite Songs */}
        <section className="music-section">

          <div className="section-heading">
            <h2>
              {musicPage.favoriteSongs.title}
            </h2>

            <p>
              {musicPage.favoriteSongs.description}
            </p>
          </div>

          <div className="song-list">

            {musicPage.favoriteSongs.songs.map(
              (song, index) => (
                <article
                  className="song-item"
                  key={index}
                >

                  <span className="song-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="song-info">

                    <h3>
                      {song.title}
                    </h3>

                    <p>
                      {song.artist} · {song.album}
                    </p>

                  </div>

                  <span className="song-duration">
                    {song.duration}
                  </span>

                </article>
              )
            )}

          </div>

        </section>


        {/* Music in My Life */}
        <section className="music-section">

          <div className="music-story">

            <div className="music-story-content">

              <span className="story-label">
                {musicPage.personalStory.label}
              </span>

              <h2>
                {musicPage.personalStory.title}
              </h2>

              {musicPage.personalStory.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>

            <div className="music-story-placeholder">

              {musicPage.personalStory.image ? (
                <img
                  src={musicPage.personalStory.image}
                  alt="Music"
                />
              ) : (
                <span>
                  {musicPage.personalStory.imagePlaceholder}
                </span>
              )}

            </div>

          </div>

        </section>


        {/* Closing */}
        <section className="music-closing">

          <h2>
            {musicPage.closing.title}
          </h2>

          <p>
            {musicPage.closing.description}
          </p>

        </section>

      </main>

    </div>
  );
};

export default Music;