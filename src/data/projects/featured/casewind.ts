import CW from "../../../assets/projects/CaseWind/CaseWind.png";
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

export const CaseWind: ProjectData = {
  id: "case-wind",

  title: "Case Wind",

  category: "Featured",

  description: "",

  image: CW,

  path: "/personal-website/projects/featured/casewind",

  meta: {
    type: "Organization Creation",
    date: "February 8, 2026 - Present",
    role: "Co-Founder",
    organization: "Case Wind",
  },

  overview: [
    `Launched a new student engineering team with two others focusing on 
    competing in the Collegiate Wind Competition. We are transforming an initial club 
    idea into a structured and achievable project within an existing robotics organization 
    at our university (CWRUBotix).`,
    "",
  ],

  contributions: [
    `After evaluating the timeline and feasibility of creating a new club through 
    the Undergraduate Student Government, I proposed an alternative approach: forming a 
    competition-focused sub team within CWRUBotix.`,

    `This strategy leveraged the organization’s existing funding structure, leadership 
    support, and operational framework to accelerate development toward the Spring 2027 
    competition.`,

    `Developed a detailed planning document outlining the steps required to 
    establish the team, including pitching the concept to CWRUBotix leadership, securing 
    funding, and organizing responsibilities across the competition timeline.`,

    `I also helped initiate the team by contacting organizational leadership, 
    creating shared planning resources in Google Drive, and establishing a Discord server 
    for team communication.`,
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
    `Within the first couple of weeks of organizing the initiative, we 
    successfully held an initial interest meeting and assembled a committed group 
    of students interested in participating in the project.`,

    `This experience strengthened my skills in strategic planning, organizational 
    development, and collaborative leadership while helping transform a 
    concept into an active engineering initiative.`,
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