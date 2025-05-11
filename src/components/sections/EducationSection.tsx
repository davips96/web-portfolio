import { Education } from "@/types";

type EducationCardProps = {
  education: Education;
  delay: number;
};

const EducationCard = ({ education, delay }: EducationCardProps) => {
  return (
    <div 
      className="card p-8 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-lg font-semibold mb-2 text-[rgb(var(--accent-rgb))]">{education.school}</h3>
      <p className="text-gray-300 mb-1">{education.degree}</p>
      {education.period && (
        <p className="text-sm text-gray-500 mt-3">{education.period}</p>
      )}
    </div>
  );
};

type EducationSectionProps = {
  education: Education[];
};

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey at Concordia University.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {education.map((edu, index) => (
            <EducationCard 
              key={index} 
              education={edu} 
              delay={0.1 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 