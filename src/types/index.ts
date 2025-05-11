// Experience type definition
export type Experience = {
  title: string;
  start: string;
  end?: string;
  type?: string;
  position?: string;
  description?: string[];
  tech?: string[];
  roles: {
    title: string;
    start: string;
    type?: string;
    position?: string;
    end: string;
    description?: string[];
  }[];
};

// Skill type definitions
export type SkillLevel = "Advanced" | "Proficient" | "Expert";

export type Skill = {
  name: string;
  level: SkillLevel;
  score: number; // Score from 1-10 for more granular representation
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

// Education type definition
export type Education = {
  school: string;
  degree: string;
  period?: string;
}; 