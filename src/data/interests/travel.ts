import HungerGames1 from "../../assets/interests/books/HungerGames1.jpg";

export interface TravelLocation {
  id: string;

  name: string;
  region: string;
  country: string;

  latitude: number;
  longitude: number;

  date: string;

  image: string | null;

  description: string;

  story: string[];

  photos: string[];
}

export const travelPage = {
  title: "Travel",

  description:
    "A collection of places I've visited and the experiences I've had along the way.",

  locations: [
    {
      id: "cleveland-ohio",

      name: "Cleveland",
      region: "Ohio",
      country: "United States",

      latitude: 41.4993,
      longitude: -81.6944,

      date: "2024 — Present",

      image: HungerGames1,

      description:
        "Cleveland has become an important place in my life while studying at Case Western Reserve University.",

      story: [
        "Cleveland has become an important part of my life while studying at Case Western Reserve University.",

        "I've spent time exploring different parts of the city, discovering restaurants, visiting museums, and getting to know the area around campus.",

        "What started as a place I moved to for school has gradually become a place that feels familiar."
      ],

      photos: [
        HungerGames1,
      ]
    }

    /*
     * ADD NEW LOCATIONS HERE
     *
     * Example:
     *
     * {
     *   id: "chicago-illinois",
     *
     *   name: "Chicago",
     *   region: "Illinois",
     *   country: "United States",
     *
     *   latitude: 41.8781,
     *   longitude: -87.6298,
     *
     *   date: "July 2025",
     *
     *   image: chicagoImage,
     *
     *   description:
     *     "A short description of my experience in Chicago.",
     *
     *   story: [
     *     "The first paragraph about my time here.",
     *
     *     "The second paragraph about what I did or
     *      what made the trip memorable."
     *   ],
     *
     *   photos: [
     *     chicagoPhoto1,
     *     chicagoPhoto2
     *   ]
     * }
     */
  ] satisfies TravelLocation[]
};