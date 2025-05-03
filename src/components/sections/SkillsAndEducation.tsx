import { SkillGroup, Education, SkillLevel } from "@/types";

type SkillBarProps = {
  name: string;
  level: SkillLevel;
};

const SkillBar = ({ name, level }: SkillBarProps) => {
  // Calculate width percentage based on skill level
  const getWidthPercentage = (level: SkillLevel): string => {
    switch (level) {
      case "Expert": return "95%";
      case "Advanced": return "85%";
      case "Proficient": return "75%";
      default: return "70%";
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[rgb(var(--accent-rgb))] rounded-full" 
          style={{ width: getWidthPercentage(level) }}
        ></div>
      </div>
    </div>
  );
};

type SkillGroupComponentProps = {
  group: SkillGroup;
  delay: number;
};

const SkillGroupComponent = ({ group, delay }: SkillGroupComponentProps) => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <h3 className="text-lg font-semibold mb-6">{group.category}</h3>
      <div className="space-y-6">
        {group.skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

type EducationCardProps = {
  education: Education;
  delay: number;
};

const EducationCard = ({ education, delay }: EducationCardProps) => {
  return (
    <div className="card card-hover p-8 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <h3 className="text-lg font-semibold mb-2">{education.school}</h3>
      <p className="text-gray-300 mb-1">{education.degree}</p>
      {education.period && <p className="text-sm text-gray-500">{education.period}</p>}
    </div>
  );
};

type SkillsAndEducationProps = {
  skillGroups: SkillGroup[];
  education: Education[];
};

const SkillsAndEducation = ({ skillGroups, education }: SkillsAndEducationProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technical and soft skills I&apos;ve mastered over the years.</p>
            
            <div className="space-y-12 mt-12">
              {skillGroups.map((group, index) => (
                <SkillGroupComponent 
                  key={index} 
                  group={group} 
                  delay={0.1 + index * 0.1} 
                />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic background and qualifications.</p>
            
            <div className="space-y-8 mt-12">
              {education.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  education={edu} 
                  delay={0.3 + index * 0.1} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndEducation; 