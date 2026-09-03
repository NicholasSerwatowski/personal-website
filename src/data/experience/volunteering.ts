// Volunteering Experience
import BellevueTogether from "../../assets/experience/volunteering/BellevueTogether.png";
import Diaper from "../../assets/experience/volunteering//Diaper/Diaper.jpg";
  import Diaper_1 from "../../assets/experience/volunteering//Diaper/Diaper_1.jpg";
  import Diaper_2 from "../../assets/experience/volunteering//Diaper/Diaper_2.jpg";
import Election from "../../assets/experience/volunteering/Election.png";
import HopeLodge from "../../assets/experience/volunteering/HopeLodge.png";
import KYN from "../../assets/experience/volunteering/KYN.jpg";
import Neighborgood from "../../assets/experience/volunteering/Neighborgood.png";
import SHP from "../../assets/experience/volunteering/SHP.png";
import Thanksgiving from "../../assets/experience/volunteering/Thanksgiving.png";

// Volunteering Experience

export interface VolunteeringExperience {
  title: string;
  organization: string;

  image?: string;

  startDate: string;
  endDate: string;

  location?: string;
  type?: string;

  description: string;

  responsibilities?: string[];
  skills?: string[];
  impact?: string[];

  gallery?: {
    image: string;
    description?: string;
  }[];

  links?: {
    title: string;
    url: string;
  }[];
}

export const volunteeringExperience: VolunteeringExperience[] = [
 {
    title: "Tech Team Member",
    organization: "Thanksgiving Lutheran Church",

    // Optional organization logo/photo
    image: Thanksgiving,

    startDate: "January 2020",
    endDate: "August, 2026",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Contributed to live service production by managing 
      presentation slides, operating cameras, and coordinating 
      video switching to ensure a seamless broadcast`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Senior Center Worship Music Pianist",
    organization: "Thanksgiving Lutheran Church",

    // Optional organization logo/photo
    image: Thanksgiving,

    startDate: "June 2023",
    endDate: "August, 2023",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Provided weekly piano performances of worship music for 
      residents at a local retirement home through church outreach 
      initiatives`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Christmas Cantata Percussionist",
    organization: "Thanksgiving Lutheran Church",

    // Optional organization logo/photo
    image: Thanksgiving,

    startDate: "December 2021",
    endDate: "December, 2024",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Contributed to annual church Christmas instrumental 
      performances as a percussion ensemble member, collaborating 
      in a coordinated musical production`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Yard Care Worker",
    organization: "Thanksgiving Lutheran Church",

    // Optional organization logo/photo
    image: Thanksgiving,

    startDate: "June 2023",
    endDate: "August, 2023",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Ensured upkeep of church grounds through consistent weekly 
      maintenance, including mowing, trimming, and weed management`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Vacation Bible School Volunteer",
    organization: "Thanksgiving Lutheran Church",

    // Optional organization logo/photo
    image: Thanksgiving,

    startDate: "June 2021",
    endDate: "June, 2023",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Led slideshow presentation operations for the annual Vacation 
      Bible School event, supporting a seamless and engaging experience for 
      attendees`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Diaper Wrapping Volunteer",
    organization: "Nebraska Diaper Bank",

    // Optional organization logo/photo
    image: Diaper,

    startDate: "June 2026",
    endDate: "June, 2026",

    location: "Omaha, NE",
    type: "Community Service",

    description:
      `Collaborated with a team to package and prepare 19,020 diapers for 
      distribution, supporting the monthly needs of 316 infants`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

    gallery: [
      {
        image: Diaper_1,
        description: "Whole Team",
      },
      {
        image: Diaper_2,
        description: "My Station",
      },
    ],

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Food Organization Management",
    organization: "NeighborGood Food Pantry",

    // Optional organization logo/photo
    image: Neighborgood,

    startDate: "May 2026",
    endDate: "August, 2026",

    location: "Papillion, NE",
    type: "Community Service",

    description:
      `Organized and stocked inventory shelves, sorted and prepared 
      food donations for distribution, and maintained clean and efficient 
      storage and work areas`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Assistant Ballot Collector",
    organization: "Sarpy County Election Commission",

    // Optional organization logo/photo
    image: Election,

    startDate: "May 2026",
    endDate: "May, 2026",

    location: "Papillion, NE",
    type: "Community Service",

    description:
      `Supported Nebraska primary election operations by traveling throughout 
      Sarpy County to assist with ballot collection, secure sealing procedures, 
      and transportation of 20,000+ ballots to the Election Commission from 
      multiple polling locations`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Community Cleanup",
    organization: "Know Your Neighbors",

    // Optional organization logo/photo
    image: KYN,

    startDate: "November 2025",
    endDate: "November, 2025",

    location: "Cleveland, OH",
    type: "Community Service",

    description:
      `Contributed to environmental cleanup efforts by removing over 
      100 pounds of roadside litter at Forest Hill Park in Cleveland Ohio`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

 {
    title: "Back to School Preparation Volunteer",
    organization: "Bellevue Together",

    // Optional organization logo/photo
    image: BellevueTogether,

    startDate: "August 2022",
    endDate: "August, 2023",

    location: "Bellevue, NE",
    type: "Community Service",

    description:
      `Organized logistics for the shipment of school supplies, 
      ensuring delivery to low-income households in need of educational 
      resources`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

  {
    title: "Christmas Decorator",
    organization: "Hope Lodge Volunteer Partnership",

    // Optional organization logo/photo
    image: HopeLodge,

    startDate: "December 2025",
    endDate: "December, 2025",

    location: "Cleveland, OH",
    type: "Community Service",

    description:
      `Partnered with students and residents at Hope Lodge to create and 
      decorate ornaments for a community holiday tree, helping foster a 
      positive and uplifting environment for residents`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

  {
    title: "Bunk Bed Frame Builder",
    organization: "Sleep in Heavenly Peace",

    // Optional organization logo/photo
    image: SHP,

    startDate: "September 2023",
    endDate: "September, 2023",

    location: "Papillion, NE",
    type: "Community Service",

    description:
      `Facilitated the construction of 30+ bunk bed frames for children in 
      need by performing precision sanding and cutting of wood materials`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },

  {
    title: "Veterans Memorial Park Clean Up",
    organization: "",

    // Optional organization logo/photo
    // image: cwruLogo,

    startDate: "May 2026",
    endDate: "June, 2026",

    location: "Papillion, NE",
    type: "Community Service",

    description:
      `Assisted in environmental cleanup by collecting and removing more 
      than 50 pounds of litter at Veterans Memorial Park in Downtown Papillion`,
/*
    responsibilities: [
      "Responsibility one.",
      "Responsibility two.",
      "Responsibility three.",
    ],
*/

/*
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
    ],
*/

/*
    impact: [
      "Impact statement one.",
      "Impact statement two.",
    ],
*/

/*
    gallery: [
      {
        image: cwruLogo,
        description: "Description of the first photo.",
      },
      {
        image: cwruLogo,
        description: "Description of the second photo.",
      },
    ],
*/

/*
    links: [
      {
        title: "Organization Website",
        url: "https://example.com",
      },
    ],
*/
  },
];