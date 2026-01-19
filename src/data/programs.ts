import type { Program } from "../types/program";

export const programs: Program[] = [
  // add programs here
  {
    id: "CRPG-203",
    name: "Computer Science",
    credential: "Degree",
    school: "School for Advanced Digital Technology",
    lengthInYears: 4,
    numberOfCredits: 120,
    deliveryMethod: "In-person",
    careerPaths: [
      "Software Developer",
      "Data Scientist",
      "Systems Analyst",
      "DevOps Engineer",
    ],
  },
  {
    id: "CPSY-200",
    name: "Web Development Bootcamp",
    credential: "Certificate",
    school: "School for Advanced Digital Technology",
    lengthInYears: 0.5,
    numberOfCredits: 24,
    deliveryMethod: "Online",
    careerPaths: ["Frontend Developer", "Full-Stack Developer", "Web Designer"],
    note: "Intensive 6-month accelerated program",
  },
  {
    id: "CPRG-231",
    name: "Networking",
    credential: "Diploma",
    school: "School for Advanced Digital Technology",
    lengthInYears: 2,
    numberOfCredits: 72,
    deliveryMethod: "Blended",
    careerPaths: ["IT", "Data Analyst", "Cybersecurity Specialist"],
  },
];
