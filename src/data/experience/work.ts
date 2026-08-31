import CWRU from "../../assets/experience/education/cwru.jpg";
import CWRUBotix from "../../assets/experience/work/CWRUBotix.png";
import EWB from "../../assets/experience/work/EWB.jpg";
import Papillion from "../../assets/experience/work/Papillion.jpg";
import Runza from "../../assets/experience/work/Runza.jpg";
import SelfEmployed from "../../assets/experience/work/SelfEmployed.jpg";

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
    title: "Resident Assistant",
    organization: "Case Western Reserve University",
    startDate: "August 1, 2026",
    endDate: "Present",
    location: "Cleveland, OH",
    type: "Part Time",

    description:
      "",

    responsibilities: [
      `Supported ~50 residents by addressing daily concerns, fostering an inclusive 
      environment, and serving as a resource for resident needs`,
      `Coordinated with 9 RAs to support a ~450-resident community 
      through on-call rotations and community engagement initiatives`,
      `Planned resident programs while managing a $432 individual budget and 
      contributing to a $1,505 community budget each semester`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: CWRU,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

  {
    title: "Combat Team Member",
    organization: "CWRUBotix",
    startDate: "January 20, 2026",
    endDate: "Present",
    location: "Cleveland, OH",
    type: "",

    description:
      "",

    responsibilities: [
      `Collaborated with a multidisciplinary team to design and manufacture a 
      12-lb combat robot for competition`,
      `Optimized and iterated designs to meet strict NHRL weight constraints and 
      performance specifications`,
      `Developed hands-on experience in precision fabrication using a lathe, 
      milling machine, drill press, band saw, and waterjet cutting`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: CWRUBotix,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

{
    title: "Solar Squad Team Member",
    organization: "Engineers Without Borders",
    startDate: "January 16, 2026",
    endDate: "Present",
    location: "Cleveland, OH",
    type: "",

    description:
      "",

/*
    responsibilities: [
      `Supported ~50 residents by addressing daily concerns, fostering an inclusive 
      environment, and serving as a resource for resident needs`,
      `Coordinated with 9 RAs to support a ~450-resident community 
      through on-call rotations and community engagement initiatives`,
      `Planned resident programs while managing a $432 individual budget and 
      contributing to a $1,505 community budget each semester`,
    ],
*/

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: EWB,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

  {
    title: "SumTur Amphitheater Concessions Attendant",
    organization: "City of Papillion",
    startDate: "May 9, 2026",
    endDate: "August 1, 2026",
    location: "Papillion, NE",
    type: "Seasonal",

    description:
      "",

    responsibilities: [
      `Collaborated with a multidisciplinary team to prepare and deliver customer 
      food orders, including the safe handling and preparation of alcoholic beverages in 
      compliance with service standards`,
      `Operated the cash register by processing customer orders, communicating requests 
      clearly to team members, and ensuring orders were completed accurately and to a high 
      standard of customer service`,
      `Managed cash handling and reconciled daily funds with expected revenue totals, 
      utilizing spreadsheet software to maintain financial accuracy and organization`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: Papillion,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

  {
    title: "SumTur Amphitheater Facility Attendant",
    organization: "City of Papillion",
    startDate: "March 13, 2024",
    endDate: "August 17, 2025",
    location: "Papillion, NE",
    type: "Seasonal",

    description:
      "",

    responsibilities: [
      `Maintained venue cleanliness by keeping all customer areas spotless, ensuring a safe and 
      welcoming environment`,
      `Responded promptly to customer requests, contributing to a consistently positive event 
      experience`,
      `Monitored amphitheater grounds and audiences, proactively addressing safety concerns`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: Papillion,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

  {
    title: "Neighborhood Lawn Care",
    organization: "Self-Employed",
    startDate: "April 8, 2022",
    endDate: "August 1, 2026",
    location: "Papillion, NE",
    type: "Seasonal",

    description:
      "",

    responsibilities: [
      `Delivered high-quality lawn care services, including mowing, edging, and weed control, 
      tailored to clients`,
      `Performed seasonal maintenance tasks such as leaf removal and snow shoveling, 
      ensuring property upkeep`,
      `Built strong client relationships through reliable service, attention to detail, 
      and consistent communication`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: SelfEmployed,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },

  {
    title: "Crew Member",
    organization: "Runza Restaurants",
    startDate: "March 17, 2022",
    endDate: "August 14, 2022",
    location: "Papillion, NE",
    type: "Part Time",

    description:
      "",

    responsibilities: [
      `Provided fast, accurate order fulfillment and meal preparation to enhance 
      overall customer satisfaction`,
      `PMaintained a clean and safe workspace by regularly sanitizing dining areas 
      and managing spills efficiently`,
      `Assisted customers with inquiries and special requests, ensuring a professional 
      and accommodating experience`,
    ],

/*  
    skills: [
      "Skill 1",
      "Skill 2",
    ],
*/

    image: Runza,

/*
    gallery: [
      cwruImage,
      cwruImage,
    ],
*/
/*
    relatedProjects: [
      "",
    ],
*/
  },
];