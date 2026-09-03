import React, { useEffect, useRef, useState } from "react";

import "../../styles/interests/music.css";

import { musicPage } from "../../data/interests/music";

const Music: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<
    (typeof musicPage.currentlyListening.albums)[number] | null
  >(null);

  const [playingSongIndex, setPlayingSongIndex] = useState<number | null>(
    null
  );

  const [loadedSongIndex, setLoadedSongIndex] = useState<number | null>(
    null
  );

  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAlbum(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAlbum]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const favoriteSongs = musicPage.favoriteSongs.songs;

  const handlePlaySong = (index: number) => {
    const song = favoriteSongs[index];

    if (!song.audio) {
      return;
    }

    // If this song is already loaded, simply play/resume it.
    // This preserves the current playback position.
    if (loadedSongIndex === index && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setPlayingSongIndex(index);
          })
          .catch(() => {});
      } else {
        audioRef.current.pause();
        setPlayingSongIndex(null);
      }

      return;
    }

    // Stop the previous song when selecting a different song.
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create a new Audio object only when selecting
    // a different song.
    const audio = new Audio(song.audio);

    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      if (audioRef.current === audio) {
        setAudioDuration(audio.duration);
      }
    });

    audio.addEventListener("timeupdate", () => {
      if (audioRef.current === audio) {
        setCurrentTime(audio.currentTime);
      }
    });

    audio.addEventListener("ended", () => {
      if (audioRef.current === audio) {
        setPlayingSongIndex(null);
        setLoadedSongIndex(null);
        setCurrentTime(0);
        setAudioDuration(0);
      }
    });

    audio.addEventListener("error", () => {
      if (audioRef.current === audio) {
        setPlayingSongIndex(null);
        setLoadedSongIndex(null);
        setCurrentTime(0);
        setAudioDuration(0);
      }
    });

    setLoadedSongIndex(index);
    setPlayingSongIndex(index);
    setCurrentTime(0);
    setAudioDuration(0);

    audio.play().catch(() => {
      if (audioRef.current === audio) {
        setPlayingSongIndex(null);
      }
    });
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(event.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="music-page">
      {/* Header */}
      <header className="music-header">
        <h1>{musicPage.title}</h1>
        <p>{musicPage.description}</p>
      </header>

      <main className="music-content">
        {/* Currently Listening */}
        <section className="music-section">
          <div className="section-heading">
            <h2>{musicPage.currentlyListening.title}</h2>
            <p>{musicPage.currentlyListening.description}</p>
          </div>

          <div className="album-grid">
            {musicPage.currentlyListening.albums.map(
              (album, index) => (
                <button
                  className="album-card"
                  key={index}
                  type="button"
                  onClick={() => setSelectedAlbum(album)}
                  aria-label={`View songs on ${album.title} by ${album.artist}`}
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

                    <div className="album-hover-overlay">
                      <span>View album</span>
                    </div>
                  </div>

                  <div className="album-info">
                    <h3>{album.title}</h3>
                    <p>{album.artist}</p>
                    <span>{album.year}</span>
                  </div>
                </button>
              )
            )}
          </div>
        </section>

        {/* Favorite Artists */}
        <section className="music-section">
          <div className="section-heading">
            <h2>{musicPage.favoriteArtists.title}</h2>
            <p>{musicPage.favoriteArtists.description}</p>
          </div>

          <div className="artist-list">
            {musicPage.favoriteArtists.artists.map(
              (artist, index) => (
                <article className="artist-card" key={index}>
                  <div className="artist-image">
                    {artist.image ? (
                      <img
                        src={artist.image}
                        alt={artist.name}
                      />
                    ) : (
                      <span>{artist.name.charAt(0)}</span>
                    )}
                  </div>

                  <div>
                    <h3>{artist.name}</h3>
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
            <h2>{musicPage.genres.title}</h2>
            <p>{musicPage.genres.description}</p>
          </div>

          <div className="genre-grid">
            {musicPage.genres.genres.map(
              (genre, index) => (
                <div className="genre-card" key={index}>
                  <h3>
                    {genre.emoji && (
                      <span className="genre-emoji">
                        {genre.emoji}
                      </span>
                    )}

                    {genre.name}
                  </h3>

                  <p>{genre.description}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Favorite Songs */}
        <section className="music-section">
          <div className="section-heading">
            <h2>{musicPage.favoriteSongs.title}</h2>
            <p>{musicPage.favoriteSongs.description}</p>
          </div>

          <div className="song-list">
            {musicPage.favoriteSongs.songs.map(
              (song, index) => {
                const isPlaying = playingSongIndex === index;
                const hasAudio = Boolean(song.audio);

                return (
                  <article
                    className={`song-item ${
                      isPlaying ? "song-item-playing" : ""
                    }`}
                    key={index}
                  >
                    <div className="song-play-container">
                      <button
                        className={`song-play-button ${
                          isPlaying
                            ? "song-play-button-playing"
                            : ""
                        }`}
                        type="button"
                        onClick={() => handlePlaySong(index)}
                        disabled={!hasAudio}
                        aria-label={
                          hasAudio
                            ? isPlaying
                              ? `Pause ${song.title}`
                              : `Play ${song.title}`
                            : `${song.title} has no audio preview`
                        }
                      >
                        {isPlaying ? (
                          <span
                            className="pause-icon"
                            aria-hidden="true"
                          >
                            <span />
                            <span />
                          </span>
                        ) : (
                          <span
                            className="play-icon"
                            aria-hidden="true"
                          >
                            ▶
                          </span>
                        )}
                      </button>
                    </div>

                    <div className="song-main">
                      <div className="song-info">
                        <h3>{song.title}</h3>
                        <p>
                          {song.artist} · {song.album}
                        </p>
                      </div>

                      {/* Only change: keep progress bar visible
                          while the loaded song is paused. */}
                      {(isPlaying || loadedSongIndex === index) &&
                        audioDuration > 0 && (
                          <div className="song-progress">
                            <input
                              type="range"
                              min="0"
                              max={audioDuration}
                              step="0.1"
                              value={currentTime}
                              onChange={handleSeek}
                              aria-label={`Seek through ${song.title}`}
                            />

                            <div className="song-progress-times">
                              <span>
                                {formatTime(currentTime)}
                              </span>

                              <span>
                                {formatTime(audioDuration)}
                              </span>
                            </div>
                          </div>
                        )}
                    </div>

                    <span className="song-duration">
                      {song.duration}
                    </span>
                  </article>
                );
              }
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

              <h2>{musicPage.personalStory.title}</h2>

              {musicPage.personalStory.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
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
          <h2>{musicPage.closing.title}</h2>
          <p>{musicPage.closing.description}</p>
        </section>
      </main>

      {/* Album Overlay */}
      {selectedAlbum && (
        <div
          className="album-overlay"
          onClick={() => setSelectedAlbum(null)}
          role="presentation"
        >
          <div
            className="album-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="album-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="album-modal-close"
              type="button"
              onClick={() => setSelectedAlbum(null)}
              aria-label="Close album"
            >
              ×
            </button>

            {/* Album Header */}
            <div className="album-modal-header">
              <div className="album-modal-cover">
                {selectedAlbum.cover ? (
                  <img
                    src={selectedAlbum.cover}
                    alt={`${selectedAlbum.title} album cover`}
                  />
                ) : (
                  <span>Album Cover</span>
                )}
              </div>

              <div className="album-modal-info">
                <span className="album-modal-label">
                  ALBUM
                </span>

                <h2 id="album-modal-title">
                  {selectedAlbum.title}
                </h2>

                <p>{selectedAlbum.artist}</p>
                <span>{selectedAlbum.year}</span>
              </div>
            </div>

            {/* Tracklist */}
            <div className="album-tracklist">
              <div className="album-tracklist-heading">
                <h3>Songs</h3>
                <span>
                  {selectedAlbum.songs.length} tracks
                </span>
              </div>

              <div className="album-tracks">
                {selectedAlbum.songs.map(
                  (song, index) => (
                    <div
                      className="album-track"
                      key={index}
                    >
                      <span className="album-track-title">
                        {song.title}
                      </span>

                      <span className="album-track-duration">
                        {song.duration}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;