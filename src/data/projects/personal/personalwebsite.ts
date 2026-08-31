import Logo from "../../../assets/projects/PersonalWebsite/Website.png";
/*import FirstMeeting from "../../../assets/projects/CaseWind/FirstMeeting.png";*/

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  path: string;

  meta?: {
    type?: string;
    date?: string;
    role?: string;
    organization?: string;
  };

  overview?: string[];

  contributions?: string[];

  details?: {
    paragraphs?: string[];

    subsections?: {
      title?: string;
      description?: string;
    }[];
  };

  results?: string[];

  gallery?: {
    src: string;
    title: string;
    description: string;
  }[];

  skills?: string[];
}

export const PersonalWebsite: ProjectData = {
  id: "personal-website",

  title: "Personal Website",

  category: "Personal",

  description: "",

  image: Logo,

  path: "/personal-website/projects/personal/personalwebsite",

  meta: {
    type: "Website Development",
    date: "August 3, 2026",
    role: "Lone Developer",
    organization: "N/A",
  },

  overview: [
    ``,
    "",
  ],

  contributions: [
    ``,

    ``,

    ``,

    ``,
  ],

/*
  details: {
    paragraphs: [
      "Specific Details",
      "Specific Details Extended",
    ],

    subsections: [
      {
        title: "Project Step 1",
        description: "Description",
      },
      {
        title: "Project Step 2",
        description: "Description",
      },
      {
        title: "Project Step 3",
        description: "Description",
      },
    ],
  },
*/

  results: [
    ``,

    ``,
  ],

/*
  gallery: [
    {
      src: FirstMeeting,
      title: "First Meeting Preview",
      description: "",
    },
  ],
*/

/*
  skills: [
    "R&D",
    "Presentation Skills",
  ],
*/
};