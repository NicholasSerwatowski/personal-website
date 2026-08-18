// Use to add or change school information on education page

import cwruImage from "../assets/cwru.jpg";

export interface School {
  id: string;
  name: string;
  degree: string;
  years: string;
  location: string;
  image: string;
  description: string;
  link: string;
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
      "Currently pursuing a bachelor's degree while participating in Combat Robotics and co-founding Case Wind."
  },

  {
    id: "plhs",
    name: "Papillion La Vista High School",
    degree: "High School Diploma",
    years: "2021-2025",
    location: "Papillion, NE",
    image: cwruImage,
    link: "/personal-website/experience/education/plhs",
    description:
      "Placeholder"
  }
];