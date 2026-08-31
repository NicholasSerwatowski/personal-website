import cwruImage from "../../assets/experience/education/cwru.jpg";
export interface ResearchExperience {
  title: string;
  organization: string;
  advisor?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  skills?: string[];
  researchAreas?: string[];
  image?: string;
  gallery?: string[];
  publications?: string[];
}

export const researchExperience: ResearchExperience[] = [
  {
    title: "Position",
    organization: "Organization",
    advisor: "Advisor",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Location",

    description:
      `Description.`,

    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
    ],

    skills: [
      "Skill 1",
      "Skill 2",
    ],

    researchAreas: [
      "Research Area 1",
      "Research Area 2",
    ],

    image: cwruImage,

    gallery: [
      cwruImage,
      cwruImage,
    ],

    publications: [
      "Publication 1",
      "Publication 2",
    ],
  },
];