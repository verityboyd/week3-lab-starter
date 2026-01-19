import type { Staff } from "../types/staff";

export const staff: Staff[] = [
  {
    id: "STF-001",
    name: "Dr. Aris Thorne",
    role: "Advisor",
    school: "MacPhail School of Energy",
    officeLocation: "Room 101",
    emailAddress: "a.thorne@northside.edu",
    startYear: 2015,
    specialties: ["Educational Leadership", "Strategic Planning"],
    funFact: "I once climbed Mt. Kilimanjaro during a summer break.",
  },
  {
    id: "STF-042",
    name: "Sarah Jenkins",
    role: "Program Chair",
    school: "School for Advanced Digital Technology",
    officeLocation: "Math Wing, B-12",
    emailAddress: "s.jenkins@northside.edu",
    startYear: 2020,
    specialties: ["Algebra", "Calculus", "Geometry"],
    funFact: "I can recite the first 50 digits of pi.",
  },
  {
    id: "STF-109",
    name: "Marcus Chen",
    role: "Instructor",
    school: "School of Construction",
    specialties: ["Mental Health", "Career Coaching"],
    startYear: 2022,
  },
];
