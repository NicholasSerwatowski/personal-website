import CollegeBoard from "../../assets/experience/awards/AP/CollegeBoard.png";
  import AP_2024 from "../../assets/experience/awards/AP/AP_2024.png";
  import AP_2025 from "../../assets/experience/awards/AP/AP_2025.png";
import CWRU from "../../assets/experience/education/cwru.jpg";
  import DHH_Fall2025 from "../../assets/experience/awards/DHH/DHH_Fall2025.png";
  import DHH_Spring2026 from "../../assets/experience/awards/DHH/DHH_Spring2026.png";
import Midlands_Place from "../../assets/experience/awards/Midlands/Midlands_Place.png";
  import Midlands_Place_Winners from "../../assets/experience/awards/Midlands/Midlands_Place_Winners.jpg";
import NMSC from "../../assets/experience/awards/NM/NMSC.jpg";
  import National_Merit from "../../assets/experience/awards/NM/National_Merit.png";
  import Semifinalist_Recognition from "../../assets/experience/awards/NM/Semifinalist_Recognition.jpg";
import UNL from "../../assets/experience/awards/NYAA/UNL.png";
  import Nebraska_Young_Artist_Award from "../../assets/experience/awards/NYAA/Nebraska_Young_Artist_Award.png";
  import NYAA_1 from "../../assets/experience/awards/NYAA/NYAA_1.jpg";
  import NYAA_2 from "../../assets/experience/awards/NYAA/NYAA_2.jpg";
import OOSC from "../../assets/experience/awards/OOSC/OOSC.jpg";
  import OOSC_2025 from "../../assets/experience/awards/OOSC/OOSC_2025.png";
  import OOSC_2026 from "../../assets/experience/awards/OOSC/OOSC_2026.png";
import PLCS_Foundation from "../../assets/experience/awards/RAY/PLCS_Foundation.jpg";
  import Ray_Higgins_Scholarship_1 from "../../assets/experience/awards/RAY/Ray_Higgins_Scholarship_1.jpg";
  import Ray_Higgins_Scholarship_2 from "../../assets/experience/awards/RAY/Ray_Higgins_Scholarship_2.jpg";

export interface Certificate {
  image: string;
  url?: string;
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
    image: CWRU,
    certificates: [
      {
        image: DHH_Fall2025,
        url: undefined,
        description: "Fall 2025 Award",
      },
      {
        image: DHH_Spring2026,
        url: undefined,
        description: "Spring 2026 Award",
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
    image: NMSC,
    certificates: [
      {
        image: National_Merit,
        url: undefined,
        description: "Scholarship Offer",
      },
      {
        image: Semifinalist_Recognition,
        url: undefined,
        description: "Semifinalist Recognition",
      },
    ],
  },
  {
    title: "Lt. Ray Higgins Memorial Scholarship Recipient",
    organization: "Lt. Ray Higgins Memorial",
    dates: ["May 2025"],
    description:
      "",
    image: PLCS_Foundation,
    certificates: [
      {
        image: Ray_Higgins_Scholarship_1,
        url: undefined,
        description: "Scholarship Winner Photo",
      },
      {
        image: Ray_Higgins_Scholarship_2,
        url: undefined,
        description: "Family of Lt. Ray Higgins",
      },
    ],
  },
  {
    title: "Midlands Place Scholarship Recipient",
    organization: "Midlands Place",
    dates: ["May 2025"],
    description:
      "",
    image: Midlands_Place,
    certificates: [
      {
        image: Midlands_Place_Winners,
        url: "https://www.facebook.com/midlandsplace/posts/congratulations-to-the-2025-midlandsplace-scholarship-recipients-we-are-incredib/1273679361266725/",
        description: "Post about the Winners",
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
    image: OOSC,
    certificates: [
      {
        image: OOSC_2026,
        url: undefined,
        description: "2026 Winners",
      },
      {
        image: OOSC_2025,
        url: undefined,
        description: "2025 Winners",
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
    image: CollegeBoard,
    certificates: [
      {
        image: AP_2025,
        url: undefined,
        description: "2025 Award",
      },
      {
        image: AP_2024,
        url: undefined,
        description: "2024 Award",
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
    image: UNL,
    certificates: [
      {
        image: Nebraska_Young_Artist_Award,
        url: "https://newsroom.unl.edu/announce/artsatunl/17025/94012",
        description: "List of Winners",
      },
      {
        image: NYAA_1,
        url: undefined,
        description: `Photo with Music Department Chair and Dean of the Hixson Lied 
        College of Fine and Performing Arts`,
      },
      {
        image: NYAA_2,
        url: undefined,
        description: "",
      },
    ],
  },
];