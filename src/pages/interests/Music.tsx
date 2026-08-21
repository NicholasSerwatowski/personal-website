import React from "react";

const Music: React.FC = () => {
  return (
    <div className="music-page">
      {/* Header */}
      <header className="music-header">
        <h1>Music</h1>
        <p>
          Music has always been a part of how I spend my time, whether I'm
          listening to something new, returning to an old favorite, or simply
          putting something on in the background while I work.
        </p>
      </header>

      <main className="music-content">
        {/* Currently Listening */}
        <section className="music-section">
          <div className="section-heading">
            <h2>Currently Listening</h2>
            <p>A few things that have been in rotation lately.</p>
          </div>

          <div className="album-grid">
            <article className="album-card">
              <div className="album-cover">
                <span>Album Cover</span>
              </div>

              <div className="album-info">
                <h3>Album Name</h3>
                <p>Artist Name</p>
                <span>2026</span>
              </div>
            </article>

            <article className="album-card">
              <div className="album-cover">
                <span>Album Cover</span>
              </div>

              <div className="album-info">
                <h3>Album Name</h3>
                <p>Artist Name</p>
                <span>2026</span>
              </div>
            </article>

            <article className="album-card">
              <div className="album-cover">
                <span>Album Cover</span>
              </div>

              <div className="album-info">
                <h3>Album Name</h3>
                <p>Artist Name</p>
                <span>2026</span>
              </div>
            </article>

            <article className="album-card">
              <div className="album-cover">
                <span>Album Cover</span>
              </div>

              <div className="album-info">
                <h3>Album Name</h3>
                <p>Artist Name</p>
                <span>2026</span>
              </div>
            </article>
          </div>
        </section>

        {/* Favorite Artists */}
        <section className="music-section">
          <div className="section-heading">
            <h2>Favorite Artists</h2>
            <p>
              Artists and bands whose music I keep coming back to.
            </p>
          </div>

          <div className="artist-list">
            <article className="artist-card">
              <div className="artist-number">01</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>

            <article className="artist-card">
              <div className="artist-number">02</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>

            <article className="artist-card">
              <div className="artist-number">03</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>

            <article className="artist-card">
              <div className="artist-number">04</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>

            <article className="artist-card">
              <div className="artist-number">05</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>

            <article className="artist-card">
              <div className="artist-number">06</div>
              <div>
                <h3>Artist Name</h3>
                <p>Genre · Favorite song</p>
              </div>
            </article>
          </div>
        </section>

        {/* Genres */}
        <section className="music-section">
          <div className="section-heading">
            <h2>What I Listen To</h2>
            <p>
              My taste is pretty broad, but these are some of the styles I
              tend to gravitate toward.
            </p>
          </div>

          <div className="genre-grid">
            <div className="genre-card">
              <h3>Rock</h3>
              <p>Classic and modern rock.</p>
            </div>

            <div className="genre-card">
              <h3>Alternative</h3>
              <p>Alternative and indie music.</p>
            </div>

            <div className="genre-card">
              <h3>Electronic</h3>
              <p>Electronic music and experimental sounds.</p>
            </div>

            <div className="genre-card">
              <h3>Classical</h3>
              <p>Orchestral and instrumental music.</p>
            </div>

            <div className="genre-card">
              <h3>Jazz</h3>
              <p>Jazz and improvisational music.</p>
            </div>

            <div className="genre-card">
              <h3>Other</h3>
              <p>Anything interesting enough to catch my attention.</p>
            </div>
          </div>
        </section>

        {/* Songs */}
        <section className="music-section">
          <div className="section-heading">
            <h2>Favorite Songs</h2>
            <p>
              Individual songs that have stuck with me for one reason or
              another.
            </p>
          </div>

          <div className="song-list">
            <article className="song-item">
              <span className="song-number">01</span>

              <div className="song-info">
                <h3>Song Title</h3>
                <p>Artist Name · Album Name</p>
              </div>

              <span className="song-duration">3:42</span>
            </article>

            <article className="song-item">
              <span className="song-number">02</span>

              <div className="song-info">
                <h3>Song Title</h3>
                <p>Artist Name · Album Name</p>
              </div>

              <span className="song-duration">4:15</span>
            </article>

            <article className="song-item">
              <span className="song-number">03</span>

              <div className="song-info">
                <h3>Song Title</h3>
                <p>Artist Name · Album Name</p>
              </div>

              <span className="song-duration">3:28</span>
            </article>

            <article className="song-item">
              <span className="song-number">04</span>

              <div className="song-info">
                <h3>Song Title</h3>
                <p>Artist Name · Album Name</p>
              </div>

              <span className="song-duration">5:01</span>
            </article>

            <article className="song-item">
              <span className="song-number">05</span>

              <div className="song-info">
                <h3>Song Title</h3>
                <p>Artist Name · Album Name</p>
              </div>

              <span className="song-duration">2:57</span>
            </article>
          </div>
        </section>

        {/* Music in My Life */}
        <section className="music-section">
          <div className="music-story">
            <div className="music-story-content">
              <span className="story-label">PERSONAL</span>

              <h2>Music in My Life</h2>

              <p>
                Music has been a constant part of my life. I enjoy discovering
                new artists and genres, but I also appreciate having a handful
                of familiar songs and albums that I can always return to.
              </p>

              <p>
                This section could eventually become a more personal story
                about how I got into music, memorable concerts, learning an
                instrument, making music, or the role music plays in my
                everyday life.
              </p>
            </div>

            <div className="music-story-placeholder">
              <span>Photo / Concert / Instrument</span>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="music-closing">
          <h2>Always Looking for Something New</h2>

          <p>
            My music taste is constantly changing. There's always another
            artist, album, or song worth discovering.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Music;