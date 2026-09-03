import HungerGames1 from "../../assets/interests/books/HungerGames1.jpg";

export const photographyPage = {
  title: "Photography",

  description:
    "Photography is a way for me to slow down, pay attention to my surroundings, and capture moments that I find interesting.",

  featured: {
    title: "Featured",
    description: "A selection of photographs I've taken.",

    photos: [
      {
        id: "featured-1",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: HungerGames1,
        featured: true,
      },
      {
        id: "featured-2",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: null,
        featured: false,
      },
      {
        id: "featured-3",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: null,
        featured: false,
      },
      {
        id: "featured-4",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: null,
        featured: false,
      },
      {
        id: "featured-5",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: null,
        featured: false,
      },
    ],
  },

  collections: {
    title: "Collections",

    description:
      "Groups of photographs organized around a place, subject, or experience.",

    items: [
      {
        id: "cleveland",
        title: "Cleveland",
        description:
          "Architecture, streets, landmarks, and everyday moments from around Cleveland.",
        count: 4,
        image: HungerGames1,

        photos: [
          {
            id: "cleveland-1",
            title: "Cleveland Photograph 1",
            location: "Cleveland, Ohio",
            date: "Date",
            image: HungerGames1,
          },
          {
            id: "cleveland-2",
            title: "Cleveland Photograph 2",
            location: "Cleveland, Ohio",
            date: "Date",
            image: null,
          },
          {
            id: "cleveland-3",
            title: "Cleveland Photograph 3",
            location: "Cleveland, Ohio",
            date: "Date",
            image: null,
          },
          {
            id: "cleveland-4",
            title: "Cleveland Photograph 4",
            location: "Cleveland, Ohio",
            date: "Date",
            image: null,
          },
        ],
      },

      {
        id: "travel",
        title: "Travel",
        description:
          "Photographs from places I've visited and experiences along the way.",
        count: 0,
        image: null,
        photos: [],
      },

      {
        id: "nature",
        title: "Nature",
        description:
          "Landscapes, wildlife, weather, and other moments found outdoors.",
        count: 0,
        image: null,
        photos: [],
      },

      {
        id: "architecture",
        title: "Architecture",
        description:
          "Buildings, structures, and interesting examples of design and construction.",
        count: 0,
        image: null,
        photos: [],
      },
    ],
  },

  behindThePhotograph: {
    title: "Behind the Photograph",

    description:
      "A closer look at some of my favorite photographs and the stories behind them.",

    photos: [
      {
        id: "behind-1",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: HungerGames1,
        story:
          "This photograph was taken because something about the scene caught my attention. This space can be used to explain what made the photograph interesting, what was happening when it was taken, or why it has become meaningful to me.",
      },
      {
        id: "behind-2",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: HungerGames1,
        story:
          "The story behind this photograph can go here. You can explain what you noticed, where you were, what was happening, or why you decided to capture the moment.",
      },
      {
        id: "behind-3",
        title: "Photograph Title",
        location: "Location",
        date: "Date",
        image: HungerGames1,
        story:
          "Another photograph and its story can go here. Each photograph can have its own description without needing any photography equipment information.",
      },
    ],
  },
};