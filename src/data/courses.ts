import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "1",
    courseCode: "CPRG303",
    courseTitle: "Mobile App Development",
    courseDescription: "Learn TS and React Native etc.",
    credits: 3,
    termNumber: 3,
    deliveryMethod: "In-person",
    preReq: ["CPRG201", "CPRG250"],
    note: "Requires strong JavaScript fundamentals.",
  },
  {
    id: "2",
    courseCode: "CPRG304",
    courseTitle: "Web Development 2",
    courseDescription: "Follows on from Web Development 1.",
    credits: 2,
    termNumber: 2,
    deliveryMethod: "Blended",
    preReq: ["CPRG204"],
    note: "Javascript fundamentals.",
  },
  {
    id: "3",
    courseCode: "CPSY200",
    courseTitle: "Intro to Networking",
    courseDescription: "This class is the worst class in the world.",
    credits: 1,
    termNumber: 1,
    deliveryMethod: "In-person",
    preReq: ["None"],
    note: "Do not take this class.",
  },
];
