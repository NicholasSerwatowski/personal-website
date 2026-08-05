export interface NavigationItem {
  title: string;
  path: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Engineering",
    path: "/engineering",

    children: [
      {
        title: "Software",
        path: "/engineering#software",
      },
      {
        title: "Computer",
        path: "/engineering#computer",
      },
      {
        title: "Electrical",
        path: "/engineering#electrical",
      },
      {
        title: "Mechanical",
        path: "/engineering#mechanical",
      },
      {
        title: "Systems",
        path: "/engineering#systems",
      },
    ],
  },

  {
    title: "Projects",
    path: "/projects",

    children: [
      {
        title: "Featured",
        path: "/projects#featured",
      },
      {
        title: "Research",
        path: "/projects#research",
      },
      {
        title: "Personal",
        path: "/projects#personal",
      },
      {
        title: "Archive",
        path: "/projects#archive",
      },
    ],
  },

  {
    title: "Experience",
    path: "/experience",

    children: [
      {
        title: "Education",
        path: "/experience#education",
      },
      {
        title: "Work",
        path: "/experience#work",
      },
      {
        title: "Leadership",
        path: "/experience#leadership",
      },
      {
        title: "Research",
        path: "/experience#research",
      },
      {
        title: "Awards",
        path: "/experience#awards",
      },
    ],
  },

  {
    title: "Interests",
    path: "/interests",

    children: [
      {
        title: "Photography",
        path: "/interests#photography",
      },
      {
        title: "Music",
        path: "/interests#music",
      },
      {
        title: "Books",
        path: "/interests#books",
      },
      {
        title: "Travel",
        path: "/interests#travel",
      },
      {
        title: "Learning",
        path: "/interests#learning",
      },
    ],
  },

  {
    title: "Contact",
    path: "/contact",
  },

];