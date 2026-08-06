// Change file as needed
// Start of ignore
export interface NavigationItem {
  title: string;
  path: string;
  children?: NavigationItem[];
}
export const navigation: NavigationItem[] = [
// End of ignore

  // This is the about page
  {
    title: "About",
    path: "/about",
  },

  // This is the engineering page with sub-pages
  {
    title: "Engineering",
    path: "/engineering",

    // These are the sub-pages for the engineering page
    children: [
      //The cad sub-page
      {
        title: "CAD",
        path: "/engineering/cad",
      },
      //The case wind sub-page
      {
        title: "Case Wind",
        path: "/engineering/casewind",
      },
      //The combat robotics sub-page
      {
        title: "Combat Robotics",
        path: "/engineering/combatrobotics",
      },
      //The research sub-page
      {
        title: "Research",
        path: "/engineering/research",
      },
      // Add more sub-pages as needed
    ],
  },

  // This is the projects page with sub-pages
  {
    title: "Projects",
    path: "/projects",

    // These are the sub-pages for the projects page
    children: [
      //The featured sub-page
      {
        title: "Featured",
        path: "/projects#featured",
      },
      //The research sub-page
      {
        title: "Research",
        path: "/projects#research",
      },
      //The personal sub-page
      {
        title: "Personal",
        path: "/projects#personal",
      },
      //The archive sub-page
      {
        title: "Archive",
        path: "/projects#archive",
      },
      // Add more sub-pages as needed
    ],
  },

  // This is the experience page with sub-pages
  {
    title: "Experience",
    path: "/experience",

    // These are the sub-pages for the experience page
    children: [
      {
        title: "Education",
        path: "/experience#education",
      },
      //The work sub-page
      {
        title: "Work",
        path: "/experience#work",
      },
      //The leadership sub-page
      {
        title: "Leadership",
        path: "/experience#leadership",
      },
      //The research sub-page
      {
        title: "Research",
        path: "/experience#research",
      },
      //The awards sub-page
      {
        title: "Awards",
        path: "/experience#awards",
      },
      // Add more sub-pages as needed
    ],
  },

  // This is the interests page with sub-pages
  {
    title: "Interests",
    path: "/interests",
    
    // These are the sub-pages for the interests page
    children: [
      //The photography sub-page
      {
        title: "Photography",
        path: "/interests#photography",
      },
      //The music sub-page
      {
        title: "Music",
        path: "/interests#music",
      },
      //The books sub-page
      {
        title: "Books",
        path: "/interests#books",
      },
      //The travel sub-page
      {
        title: "Travel",
        path: "/interests#travel",
      },
      //The learning sub-page
      {
        title: "Learning",
        path: "/interests#learning",
      },
      // Add more sub-pages as needed
    ],
  },

  // This is the contact page
  {
    title: "Contact",
    path: "/contact",
  },

];