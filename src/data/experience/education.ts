import cwruImage from "../../assets/experience/education/cwru.jpg";
import plhsImage from "../../assets/experience/education/plhs.png";
import ocmImage from "../../assets/experience/education/ocm.png";

// Use to add or change school information on education page

export interface Activity {
  name: string;
  role?: string;
  years?: string;
  description?: string;
}

export interface Course {
  code: string;
  name: string;
  semester: string;
  grade?: string;
}

export interface SchoolYear {
  label: string;
  courses: Course[];
}

export interface Award {
  name: string;
  date?: string;
  description?: string;
}

export interface School {
  id: string;
  name: string;
  degree: string;
  years: string;
  location: string;
  image: string;
  description: string;
  link: string;

  // School-specific information
  activities?: Activity[];
  classYears?: SchoolYear[];
  awards?: Award[];
}

// List of schools

export const schools: School[] = [
  {
    id: "cwru",
    name: "Case Western Reserve University",
    degree: "B.S.E. Mechanical & Aerospace Engineering",
    years: "2025 – Present",
    location: "Cleveland, OH",
    image: cwruImage,
    link: "/personal-website/experience/education/cwru",
    description:
      ``,

    activities: [
      {
        name: "CWRUBotix",
        role: "Combat Robotics Team Member",
        years: "2026 – Present",
        description:
          `CWRUBotix as a whole is a robotics club, where we design 
          and build robots for a variety of robotics competitions, and 
          engage with the local STEM community. For the competitions, 
          CWRUBotix has a couple of subteams, where CAD modeling, circuit 
          design, programming, and manufacturing are used throughout the 
          process. My involvement pertains to the combat team, where we 
          are building a robot to be taken out to the NHRL Combat Robotics 
          Competition to fight against other robots. I learned how to use 
          certain machinery when making this such as the metal lathe, mill, 
          drill press, and band saw.`,
      },
      {
        name: "Case Wind",
        role: "Co-Founder",
        years: "2026 – Present",
        description:
          `Launched a new student engineering team with two others 
          focusing on competing in the Collegiate Wind Competition. We are 
          transforming an initial club idea into a structured and 
          achievable project within an existing robotics organization at 
          our university (CWRUBotix). After evaluating the timeline and 
          feasibility of creating a new club through the Undergraduate 
          Student Government, I proposed an alternative approach: forming 
          a competition-focused sub team within CWRUBotix. This strategy 
          leveraged the organization’s existing funding structure, leadership 
          support, and operational framework to accelerate development toward 
          the Spring 2027 competition. Developed a detailed planning document 
          outlining the steps required to establish the team, including pitching the 
          concept to CWRUBotix leadership, securing funding, and organizing 
          responsibilities across the competition timeline. I also helped initiate the 
          team by contacting organizational leadership, creating shared planning 
          resources in Google Drive, and establishing a Discord server for team 
          communication. Within the first couple of weeks of organizing the initiative, 
          we successfully held an initial interest meeting and assembled a committed 
          group of students interested in participating in the project. This experience 
          strengthened my skills in strategic planning, organizational development, and 
          collaborative leadership while helping transform a concept into an active 
          engineering initiative.`,
      },
      {
        name: "Math Club",
        role: "Member",
        years: "2025",
        description:
          `A mathematics club that promotes thoughtful discussions and friendship 
          through mathematics. Provides interested students with transportation to 
          and from national mathematics conferences and competitions such as the Putnam.`,
      },
      {
        name: "Amistad Spanish Conversation Club",
        role: "Member",
        years: "2025",
        description:
          `A Spanish club that builds fluency in 
          Spanish through conversation.`,
      },
      {
        name: "Engineers without Borders",
        role: "Solar Squad Team Member",
        years: "2026 – Present",
        description:
          `Utilizes engineering skills to better the local and international 
          community by providing access to clean water, power, sanitation, 
          and education. My team in particular is a local team that focuses on 
          providing power and energy to our university by establishing solar panel 
          charging stations and light sources in places that are dark at night.`,
      },
      {
        name: "Spartan Pep Band",
        role: "Percussionist",
        years: "2025 – Present",
        description:
          `A musical group that plays music and spreads spirit at events 
          including basketball and hockey games. I play the snare drum for this. 
          We even had the amazing opportunity to perform for our university’s 
          200 anniversary birthday celebration.`,
      },
      {
        name: "Quantum Computing Club",
        role: "Member",
        years: "2025",
        description:
          `A group that educates members on quantum computing and provides 
          transportation to and from quantum computing competitions such as the 
          MIT iQuHack.`,
      },
      {
        name: "Collaborative Coding Club",
        role: "Member",
        years: "2025",
        description:
          `A club that allows students to develop their coding skills through 
          collaborative and real-world projects. My project in particular involved 
          me building an app that allows for students to find tutors or study resources 
          for a specific class. Some languages I had to use were JavaScript React, 
          Firebase Console, Git, and JavaScript.`,
      },
      {
        name: "Spartan Marching Band",
        role: "Drumline",
        years: "2025 – Present",
        description:
          `I was a member of the drumline as a bass drum player. I had to march on a 
          field while playing at the same time. We often prepared shows to be 
          performed for football game halftime periods, but every now and then, we 
          went out into the Cleveland community to perform our shows.`,
      },
    ],

    classYears: [
      {
        label: "2025-2026",
        courses: [
          {
            code: "MATH 124",
            name: "Calculus II",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "MUEN 384",
            name: "Spartan Marching Band",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "PHIL 201",
            name: "Introduction to Logic",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "PHYS 123",
            name: "Physics and Frontiers I",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "HSTY 100",
            name: "Intro to History",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "ENGR 130",
            name: "Foundation Eng & Programming",
            semester: "Fall 2025",
            grade: "A",
          },
          {
            code: "CHEM 111",
            name: "Princ Chem for Engineers",
            semester: "Spring 2026",
            grade: "A",
          },
          {
            code: "PHYS 122",
            name: "General Physics II-Elec & Mag",
            semester: "Spring 2026",
            grade: "A",
          },
          {
            code: "MATH 223",
            name: "Calc for Science & Engr III",
            semester: "Spring 2026",
            grade: "A",
          },
          {
            code: "SPAN 101",
            name: "Elementary Spanish I",
            semester: "Spring 2026",
            grade: "A",
          },
          {
            code: "AIQS 100",
            name: "Academic Inquiry Seminar: Writing Math",
            semester: "Spring 2026",
            grade: "A",
          },
        ],
      },

      {
        label: "2026-2027",
        courses: [
          {
            code: "MATH 224",
            name: "Elem Differential Equations",
            semester: "Fall 2026",
            grade: "In Progress",
          },
          {
            code: "ENGR 145",
            name: "Chemistry of Materials",
            semester: "Fall 2026",
            grade: "In Progress",
          },
          {
            code: "ENGR 200",
            name: "Statics & Strengh Materials",
            semester: "Fall 2026",
            grade: "In Progress",
          },
          {
            code: "WLIT 212",
            name: "World Literature II",
            semester: "Fall 2026",
            grade: "In Progress",
          },
          {
            code: "EMAE 160",
            name: "Mechanical Manufacturing",
            semester: "Fall 2026",
            grade: "In Progress",
          },
          {
            code: "MUEN 384",
            name: "Spartan Marching Band",
            semester: "Fall 2026",
            grade: "In Progress",
          },
        ],
      },
    ],

awards: [
  {
    name: "Dean's High Honors List",
    date: "Fall 2025, Spring 2026",
    description:
      `GPA of 3.750 or higher with a minimum of 12 credit hours and 
      no Fs or NPs during the semester`,
  },
],
},

  {
    id: "plhs",
    name: "Papillion La Vista High School",
    degree: "High School Diploma",
    years: "2021–2025",
    location: "Papillion, NE",
    image: plhsImage,
    link: "/personal-website/experience/education/plhs",
    description: "",

    activities: [      
      {
        name: "Monarch Marching Band",
        role: "Pit Ensemble Captain",
        years: "2021 – 2024",
        description:
          `Placeholder`,
      },
      {
        name: "Monarch Jazz Band",
        role: "Piano and Vibraphone",
        years: "2021 – 2025",
        description:
          `Placeholder`,
      },
      {
        name: "Pit Ensemble",
        role: "Lead Pianist",
        years: "2023 – 2025",
        description:
          `Placeholder`,
      },
      {
        name: "National Honor Society",
        role: "Member",
        years: "2023 – 2025",
        description:
          `Placeholder`,
      },
      {
        name: "PLV Media",
        role: "Graphics Producer and App Developer",
        years: "2021 – 2025",
        description:
          `Placeholder`,
      },
      {
        name: "Tri-M Music Honor Society",
        role: "Member",
        years: "2023 – 2025",
        description:
          `Placeholder`,
      },
      {
        name: "Spanish Club",
        role: "Member",
        years: "2021 – 2025",
        description:
          `Placeholder`,
      },
    ],

    classYears: [
      {
        label: "2021-2022",
        courses: [
          {
            code: "",
            name: "Media Studies 1",
            semester: "Fall 2021",
            grade: "A+",
          },
          {
            code: "",
            name: "Media Studies 2",
            semester: "Spring 2022",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Geometry",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Biology",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors U.S. History",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors English 9",
            semester: "Whole Year",
            grade: "A",
          },
          {
            code: "",
            name: "Spanish 1",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Freshman Band",
            semester: "Whole Year",
            grade: "A+",
          },
        ],
      },
      {
        label: "2022-2023",
        courses: [
          {
            code: "",
            name: "Honors English 10",
            semester: "Whole year",
            grade: "A+",
          },
          {
            code: "",
            name: "Symphonic Band",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Algebra 2",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Spanish 2",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Media Production 1",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Chemistry",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP World History: Modern",
            semester: "Whole Year",
            grade: "A+",
          },
        ],
      },
      {
        label: "2023-2024",
        courses: [
          {
            code: "",
            name: "Honors Precalculus with Trigonometry",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Symphonic Band",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Physics 1",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP U.S. Government and Politics",
            semester: "Fall 2023",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Comparative Government and Politics",
            semester: "Spring 2024",
            grade: "A+",
          },
          {
            code: "",
            name: "Media Production 2",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Language and Composition",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Spanish 3",
            semester: "Whole Year",
            grade: "A+",
          },
        ],
      },
      {
        label: "2024-2025",
        courses: [
          {
            code: "",
            name: "AP Literature and Composition",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Physics 2",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Symphonic Band",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Media Production 2",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Calculus AB",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "Honors Spanish 4",
            semester: "Whole Year",
            grade: "A+",
          },
          {
            code: "",
            name: "AP Psychology",
            semester: "Whole Year",
            grade: "A+",
          },
        ],
      },
    ],

    awards: [
      {
        name: "Summa Cum Laude",
        date: "Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024, Spring 2025",
        description:
          `Weighted GPA of 4.25 or higher for a given semester. Highest Cum Laude award possible.`,
      },
      {
        name: "Distingushed Honor Roll",
        date: "Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024, Spring 2025",
        description:
          `Unweighted GPA between 3.90 - 4.00 for a given semester. Highest level on the honor roll possible.`,
      },
    ],
  },

{
    id: "ocm",
    name: "Omaha Conservatory of Music",
    degree: "",
    years: "2011-2025",
    location: "Omaha, NE",
    image: ocmImage,
    link: "/personal-website/experience/education/ocm",
    description: "",

    activities: [
      {
        name: "Not Applicable",
        role: "",
        years: "",
        description:
          ``,
      },    
    ],

    classYears: [
    {
        label: "",
        courses: [
          {
            code: "",
            name: "Violin with Shuang Liang",
            semester: "2011-2014",
            grade: "",
          },
          {
            code: "",
            name: "Piano with Stacey Barelos",
            semester: "2014-2025",
            grade: "",
          },
        ],
      },
    ],

    awards: [
      {
        name: "Level 10",
        date: "May 2025",
        description:
          `The highest proficiency level, in advanced music theory and repertoire`,
      },
    ],
  },
];