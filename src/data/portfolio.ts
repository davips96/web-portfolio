import { Experience, Education, SkillGroup } from "@/types";

// Experience data
export const experiences: Experience[] = [
  {
    company: "The Aldo Group",
    period: "Since Nov 2022",
    type: "Fashion Retailer",
    position: "Lead Frontend Developer",
    description: [
      "Launched a new website for the company&apos;s new brand: Sperry.",
      "Lead a team of 9 developers and contractors in the development of features and enhancements on a legacy (7 years) monorepo codebase.",
      "Abide by the agile scrum methodology and optimize the team&apos;s schedule to reduce meetings for the developers.",
      "Plan and execute strategy for removal of technical debt.",
      "Align on the team&apos;s progress, team goals, capacity plan with the Product Owner.",
      "Collaborate with the QA team to incrementally improve workflow across teams.",
      "Reviewed the designs provided by UX as part of feature planning.",
      "Participate in meetings with stakeholders to set appropriate expectations of the team&apos;s output."
    ],
    tech: ["React", "TypeScript", "Redux", "Sass", "Lerna", "Chai", "Enzyme", "React Testing Library", "NodeJS", "Contentful CMS", "Docker", "AWS", "Atlassian Suite"]
  },
  {
    company: "BrainFinance",
    period: "May 2021 - Nov 2022",
    type: "FinTech Startup",
    position: ["Lead Frontend Developer", "Frontend Developer"],
    description: [
      "Collaborate with the Principle Software Engineer on the software architecture for all projects.",
      "Oversee the implementation of best practices related to software development.",
      "Mentor and guide team members in their technical development.",
      "Motivate team members and create an inspiring team environment with an open communication culture.",
      "Identify the hiring needs and participate in the hiring process.",
      "Maintain, assess, and create websites using React with TypeScript.",
      "Build reusable cross-platform components and frontend libraries for future use.",
      "Translate designs and wireframes into high-quality code.",
      "Offer constructive and respectful feedback via code reviews on Bitbucket."
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "GatsbyJS", "Contentful CMS", "GraphQL", "Docker", "GCP", "CloudFlare", "Atlassian Suite"]
  },
  {
    company: "The Croo Group",
    period: "Jan 2020 - May 2021",
    type: "VoIP Telecom Startup",
    position: "Full Stack Developer",
    description: [
      "Build full stack features for web applications in React with TypeScript, Python, and MySQL.",
      "Develop a desktop application on Electron from the ground up.",
      "Maintain websites and third-party integrations in the backend.",
      "Contribute to the architectural definitions of new projects.",
      "Review code and oversee internal testing sessions.",
      "Keep track of the development team&apos;s tickets, performance, and backlog."
    ],
    tech: ["React", "TypeScript", "Apollo Client", "GraphQL", "Electron", "Python", "Flask", "ElasticSearch", "MySQL", "AWS Lambda", "AWS S3", "AWS AppSync", "DynamoDB", "Trello", "BitBucket", "TeamGantt"]
  }
];

// Skills grouped by category
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "TailwindCSS", level: "Expert" },
      { name: "Redux", level: "Advanced" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Python", level: "Proficient" }
    ]
  },
  {
    category: "Leadership",
    skills: [
      { name: "Team Management", level: "Expert" },
      { name: "Agile Methodology", level: "Expert" },
      { name: "Communication", level: "Expert" }
    ]
  }
];

// Education
export const education: Education[] = [
  {
    school: "Concordia University",
    degree: "B.Eng. in Software Engineering"
  },
  {
    school: "Concordia University",
    degree: "Certificate in Science and Technology"
  }
]; 