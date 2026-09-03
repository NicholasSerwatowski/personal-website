import DonQuixote from "../../assets/interests/books/DonQuixote.png";
import HarryPotter5 from "../../assets/interests/books/HarryPotter5.jpg";
import HungerGames1 from "../../assets/interests/books/HungerGames1.jpg";

export const booksPage = {
  title: "Books",

  description:
    "A collection of books I've read, am reading, and want to read. Reading is one of the ways I explore new ideas, perspectives, and subjects outside of my everyday work.",

  currentlyReading: [
    {
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      description:
        "",
      cover: DonQuixote,
    },
  ],

  favoriteBooks: [
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling",
      description:
        "",
      cover: HarryPotter5,
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      description:
        "",
      cover: HungerGames1,
    },
  ],

  recentlyRead: [
    {
      title: "The Library of Bable",
      author: "Jorge Luis Borges",
      genre: "",
      rating: "★★★★★",
      finished: "August 2026",
    },
  ],

  readingInterests: [
    "Engineering",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Philosophy",
    "Fiction",
  ],

  influentialBooks: [
    {
      title: "Mockingjay",
      author: "Suzanne Collins",
      reflection:
        `This book has shown me that anyone is capable of having a significant
        and positive impact on the entire world, regardless of background.
        I take that to heart with learning new skills and exposing myself to
        different perspectives that are intially out of my comfort zone, but
        eventually, turn me into a better version of myself.`,
    },
  ],
};