import cwruImage from "../../../assets/cwru.jpg";

export const sampleA = {
  id: "sample-a",

  title: "Project Name",

  category: "Archive",

  description: "Project Description",

  image: cwruImage,

  path: "/personal-website/projects/archive/samplea",

  meta: {
    type: "Project Type",
    date: "Date",
    role: "Role",
    organization: "Organization",
  },

  overview: [
    "Project Overview",
    "Project Overview Extended",
  ],

  contributions: [
    "Contribution 1",
    "Contribution 2",
    "Contribution 3",
    "Contribution 4",
  ],

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

  results: [
    "Description",
    "Description Extended",
  ],

  gallery: [
    {
      src: cwruImage,
      title: "Title",
      description: "Description",
    },
    {
      src: cwruImage,
      title: "Title",
      description: "Description",
    },
    {
      src: cwruImage,
      title: "Title",
      description: "Description",
    },
  ],

  skills: [
    "Skill 1",
    "Skill 2",
  ],
};