import HungerGames1 from "../../assets/interests/books/HungerGames1.jpg";
import test from "../../assets/interests/music/test.mp3";

export const musicPage = {
  title: "Music",

  description:
    "Music has always been a part of how I spend my time, whether I'm listening to something new, returning to an old favorite, or simply putting something on in the background while I work.",

  currentlyListening: {
    title: "Currently Listening",
    description: "A few things that have been in rotation lately.",

    albums: [
      {
        title: "Album Name",
        artist: "Artist Name",
        year: "2026",
        cover: HungerGames1,

        songs: [
          {
            title: "Song One",
            duration: "3:42",
          },
          {
            title: "Song Two",
            duration: "4:15",
          },
          {
            title: "Song Three",
            duration: "3:28",
          },
          {
            title: "Song Four",
            duration: "5:01",
          },
          {
            title: "Song Five",
            duration: "2:57",
          },
          {
            title: "Song Five",
            duration: "2:57",
          },
          {
            title: "Song Five",
            duration: "2:57",
          },
          {
            title: "Song Five",
            duration: "2:57",
          },
        ],
      },

      {
        title: "Album Name",
        artist: "Artist Name",
        year: "2026",
        cover: null,

        songs: [
          {
            title: "Song One",
            duration: "3:42",
          },
          {
            title: "Song Two",
            duration: "4:15",
          },
          {
            title: "Song Three",
            duration: "3:28",
          },
          {
            title: "Song Four",
            duration: "5:01",
          },
        ],
      },

      {
        title: "Album Name",
        artist: "Artist Name",
        year: "2026",
        cover: null,

        songs: [
          {
            title: "Song One",
            duration: "3:42",
          },
          {
            title: "Song Two",
            duration: "4:15",
          },
          {
            title: "Song Three",
            duration: "3:28",
          },
          {
            title: "Song Four",
            duration: "5:01",
          },
          {
            title: "Song Five",
            duration: "2:57",
          },
        ],
      },

      {
        title: "Album Name",
        artist: "Artist Name",
        year: "2026",
        cover: null,

        songs: [
          {
            title: "Song One",
            duration: "3:42",
          },
          {
            title: "Song Two",
            duration: "4:15",
          },
          {
            title: "Song Three",
            duration: "3:28",
          },
          {
            title: "Song Four",
            duration: "5:01",
          },
        ],
      },
    ],
  },

  favoriteArtists: {
    title: "Favorite Artists",
    description:
      "Artists and bands whose music I keep coming back to.",

    artists: [
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
      {
        name: "Artist Name",
        genre: "Genre",
        favoriteSong: "Favorite song",
        image: null,
      },
    ],
  },

  genres: {
    title: "What I Listen To",
    description:
      "My taste is pretty broad, but these are some of the styles I tend to gravitate toward.",

    genres: [
      {
        name: "Rock",
        description: "Classic and modern rock.",
        emoji: "🎸",
      },
      {
        name: "Alternative",
        description: "Alternative and indie music.",
        emoji: "🎶",
      },
      {
        name: "Electronic",
        description: "Electronic music and experimental sounds.",
        emoji: "🎧",
      },
      {
        name: "Classical",
        description: "Orchestral and instrumental music.",
        emoji: "🎻",
      },
      {
        name: "Jazz",
        description: "Jazz and improvisational music.",
        emoji: "🎷",
      },
      {
        name: "Other",
        description:
          "Anything interesting enough to catch my attention.",
        emoji: "✨",
      },
    ],
  },

  favoriteSongs: {
    title: "Favorite Songs",
    description:
      "Individual songs that have stuck with me for one reason or another.",

    songs: [
      {
        title: "Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:42",
        audio: test,
      },
      {
        title: "Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "4:15",
        audio: "/personal-website/audio/song-two.mp3",
      },
      {
        title: "Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:28",
      },
      {
        title: "Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "5:01",
      },
      {
        title: "Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "2:57",
      },
    ],
  },

  personalStory: {
    label: "PERSONAL",

    title: "Music in My Life",

    paragraphs: [
      "Music has been a constant part of my life. I enjoy discovering new artists and genres, but I also appreciate having a handful of familiar songs and albums that I can always return to.",

      "This section could eventually become a more personal story about how I got into music, memorable concerts, learning an instrument, making music, or the role music plays in my everyday life.",
    ],

    image: null,

    imagePlaceholder: "Photo / Concert / Instrument",
  },

  closing: {
    title: "Always Looking for Something New",
    description:
      "My music taste is constantly changing. There's always another artist, album, or song worth discovering.",
  },
};