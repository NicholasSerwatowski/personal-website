import PLVMedia from "../../../assets/projects/PLVMediaApp/PLVMedia.jpg";

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

export const PLVMediaApp: ProjectData = {
  id: "plv-media-app",

  title: "PLV Media App",

  category: "Archive",

  description: "",

  image: PLVMedia,

  path: "/personal-website/projects/archive/plvmediaapp",

  meta: {
    type: "Senior Capstone",
    date: "August 14, 2024 - May 9, 2025",
    role: "Lead App Developer",
    organization: "Case Wind",
  },

  overview: [
    `Led a senior capstone project within my high school’s Media Academy to 
    organize and modernize the program’s media equipment inventory.`,
    `This system was designed to allow students to reserve and track equipment 
    digitally, improving efficiency and long-term usability for the program.
    The project also involved leading a small team of students and communicating 
    a clear implementation vision.`,
  ],

  contributions: [
    `I designed and implemented a structured cataloging system to track 
    cameras, audio gear, and production equipment, improving accessibility 
    and organization for students.`,

    `I developed the project timeline and classification structure, which 
    required critical thinking to determine how to categorize diverse 
    equipment types and manage incomplete information.`,

    `After establishing the 
    inventory system, I expanded the project by researching and beginning 
    development of a concept for an equipment checkout and reservation app.`,
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
    `Through this experience, I strengthened my 
    skills in problem-solving, self-directed learning, and project leadership 
    while exploring software development concepts outside my prior experience.`,
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