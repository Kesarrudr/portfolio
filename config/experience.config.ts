import type { Experience } from "@/types/index.types";

const ExperienceConfig: Experience[] = [
  {
    title: "Developer",
    employmentType: "Developer",
    company: {
      name: "Colaborative Board",
      url: "",
    },
    start: "June 2024",
    end: "Present",
    description: [
      "Collaborative, real-time whiteboard application.",
      "Features a real-time database for instant updates.",
      "Create from scratch with shapes like rectangles and ellipses.",
      "Includes sticky notes and pencil drawing tools.",
    ],
    location: {
      name: "Remote",
    },
  },
  {
    title: "Intership",
    employmentType: "Inter",
    company: {
      name: "IIT Jammu",
      url: "",
    },
    start: "May 2023",
    end: "July 2023",
    description: [
      "Training in programming languages like Python",
      "Usage of data manipulation tools and machine learning frameworks(e.g SQL,pandas,and scikit-learn",
    ],
    location: {
      name: "Onsite",
    },
  },
  {
    title: "Secretary of Club",
    employmentType: "Full-Time",
    company: {
      name: "GCET Coding Club",
      url: "",
    },
    start: "May 2022",
    end: "June 2024",
    description: [
      "Started and Managed the College Coding Club",
      "Supervised competitive programming Events",
    ],
    location: {
      name: "Onsite",
    },
  },
];

export default ExperienceConfig;
