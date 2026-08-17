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
}

// List of schools
export const schools: School[] = [
  {
    id: "cwru",
    name: "Case Western Reserve University",
    degree: "B.S. Mechanical & Aerospace Engineering",
    years: "2023 – Present",
    location: "Cleveland, OH",
    image: cwruImage,
    description:
      "Currently pursuing a bachelor's degree while participating in Combat Robotics and co-founding Case Wind."
  }
];