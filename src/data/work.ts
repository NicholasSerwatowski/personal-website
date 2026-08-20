import cwruImage from "../assets/cwru.jpg";

export interface WorkExperience {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  location?: string;
  type?: string;
  description: string;
  responsibilities?: string[];
  skills?: string[];
  image?: string;
  gallery?: string[];
  relatedProjects?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: "Job Position",
    organization: "Company",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Location",
    type: "Type of Job",

    description:
      "Description",

    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
    ],

    skills: [
      "Skill 1",
      "Skill 2",
    ],

    image: cwruImage,

    gallery: [
      cwruImage,
      cwruImage,
    ],

    relatedProjects: [
      "Example Project",
    ],
  },
];