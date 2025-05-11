import { SkillGroup, SkillLevel } from "@/types";

type SkillBarProps = {
  name: string;
  level: SkillLevel;
  score: number;
};

const SkillBar = ({ name, level, score }: SkillBarProps) => {
  // Calculate width percentage based on skill score
  const getWidthPercentage = (score: number): string => {
    // Convert score (1-10) to percentage (10-100%)
    return `${Math.max(10, Math.min(100, score * 10))}%`;
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-content dark:text-gray-300">{name}</span>
        <span className="text-xs text-muted dark:text-gray-500">{level}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-300 dark:border-transparent">
        <div 
          className="h-full bg-primary dark:bg-primary-dark rounded-full" 
          style={{ width: getWidthPercentage(score) }}
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
  // Check if this group should span 2 columns (4+ skills and even number)
  const shouldSpanTwoColumns = group.skills.length >= 4 && group.skills.length % 2 === 0;
  
  return (
    <div 
      className={`animate-fade-in ${shouldSpanTwoColumns ? 'sm:col-span-2 lg:col-span-1' : ''}`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-lg font-semibold mb-6">{group.category}</h3>
      <div className={`${shouldSpanTwoColumns ? 'sm:grid sm:grid-cols-2 sm:gap-x-6 lg:block' : ''}`}>
        {group.skills.map((skill, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <SkillBar name={skill.name} level={skill.level} score={skill.score} />
          </div>
        ))}
      </div>
    </div>
  );
};

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

const SkillsSection = ({ skillGroups }: SkillsSectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical and soft skills I've mastered over the years.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillGroups.map((group, index) => (
            <SkillGroupComponent 
              key={index} 
              group={group} 
              delay={0.1 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 