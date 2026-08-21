import cwruImage from "../../assets/cwru.jpg";

export interface Certificate {
  image: string;
  description?: string;
}

export interface Award {
  title: string;
  organization: string;
  dates: string[];
  description: string;
  image?: string;
  certificates?: Certificate[];
}

export const awards: Award[] = [
  {
    title: "Dean's High Honors",
    organization: "Case Western Reserve University",
    dates: ["Fall 2025", "Spring 2026"],
    description:
      "GPA of 3.750 or higher with a minimum of 12 credit hours and no Fs or NPs during the semester",
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Fall 2025",
      },
      {
        image: cwruImage,
        description: "Spring 2026",
      },
    ],
  },
  {
    title: "National Merit Scholarship Recipient",
    organization: "National Merit Scholarship Corporation",
    dates: ["June 2025"],
    description:
      `Awarded for outstanding academic performance and a high PSAT/NMSQT score, 
      placing among the top 0.5% of students nationally in the National Merit 
      Scholarship Program`,
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
  {
    title: "Lt. Ray Higgins Memorial Scholarship Recipient",
    organization: "Lt. Ray Higgins Memorial",
    dates: ["May 2025"],
    description:
      "",
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
  {
    title: "Midlands Place Scholarship Recipient",
    organization: "Midlands Place",
    dates: ["May 2025"],
    description:
      "",
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
  {
    title: "Offutt Officers' Spouses' Club Scholarship Recipient",
    organization: "Offutt Officers' Spouses' Club",
    dates: ["April 2025", "April 2026"],
    description:
      `Awarded to military/GS high school seniors, spouses of any rank/branch, 
      and dependents currently enrolled in a 
      college program who are affiliated with Offutt Air Force Base and in the 
      local Offutt Air Force Base metro`,
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
  {
    title: "AP Scholar with Distinction",
    organization: "College Board",
    dates: ["July 2024", "July 2025"],
    description:
      `The AP Scholar with Distinction Award is granted to students who receive an 
      average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher 
      on five or more of these exams`,
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
  {
    title: "Nebraska Young Artist Award",
    organization: "Hixson-Lied College of Fine & Performing Arts at The University of Nebraska-Lincoln",
    dates: ["May 2024"],
    description:
      `The Nebraska Young Artist Awards annually recognize Nebraska high school 
      juniors who are talented in art, music, dance, theatre, or film and emerging 
      media. Students have been selected based on the quality of their art and were 
      selected by our faculty to come to the University of Nebraska–Lincoln with their 
      families as guests for a day of activities and awards ceremony. They see the campus, 
      visit with UNL students and get information about what a career in some area of the 
      arts could be like.`,
    image: cwruImage,
    certificates: [
      {
        image: cwruImage,
        description: "Placeholder",
      },
    ],
  },
];