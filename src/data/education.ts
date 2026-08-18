export interface EducationItem {
  type: 'college' | '12th' | '10th';
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  details: string[];
}

export const educationData: EducationItem[] = [
  {
    type: 'college',
    institution: "Uttaranchal University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2022 - 2026",
    grade: "8.75 CGPA",
    details: [
      "Specialized in Software Engineering, Full-Stack Web Development, and Distributed Systems.",
      "Hands-on experience in building performant systems using React, TypeScript, and Node.js.",
      "Completed projects on web architecture, REST APIs, and database indexing optimizations.",
      "Active participant in college coding clubs, technical symposiums, and local hackathons."
    ]
  },
  {
    type: '12th',
    institution: "Gulab Memorial College, Bettiah",
    degree: "Class XII (BSEB - Non-Medical / Science)",
    duration: "2019 - 2021",
    grade: "86.6%",
    details: [
      "Core subjects: Physics, Chemistry, Mathematics, and Computer Science.",
      "Gained foundational training in C++ programming, data handling, and logical reasoning.",
      "Represented school in state-level science exhibitions."
    ]
  },
  {
    type: '10th',
    institution: "Delhi Public School",
    degree: "Class X (CBSE)",
    duration: "2018 - 2019",
    grade: "86.6%",
    details: [
      "Core subjects: Mathematics, Science, Social Sciences, Languages.",
      "Awarded School Certificate of Merit for academic excellence."
    ]
  }
];
