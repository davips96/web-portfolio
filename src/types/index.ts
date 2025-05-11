// Experience type definition
export type Experience = {
  company: string;
  period: string;
  type: string;
  position: string | string[];
  description: string[];
  tech: string[];
  duration?: {
    start: string;
    end: string;
  };
  previousRole?: {
    title: string;
    start: string;
    end: string;
    description: string[];
  };
};

// Skill type definitions
export type SkillLevel = "Advanced" | "Proficient" | "Expert";

export type Skill = {
  name: string;
  level: SkillLevel;
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