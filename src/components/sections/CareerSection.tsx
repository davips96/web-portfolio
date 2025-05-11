import { Experience } from "@/types";

type ExperienceCardProps = {
  experience: Experience;
  delay: number;
};

const ExperienceCard = ({ experience, delay }: ExperienceCardProps) => {
  // Format period display
  const periodDisplay = experience.end 
    ? `${experience.start} - ${experience.end}` 
    : `Since ${experience.start}`;

  return (
    <div className="card animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Company Info */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold text-[rgb(var(--accent-rgb))]">{experience.title}</h3>
          <p className="text-[rgb(var(--muted-rgb))] mt-1 mb-1">{periodDisplay}</p>
          {experience.type && <p className="text-sm text-[rgb(var(--muted-rgb))] mt-1">{experience.type}</p>}
        </div>
        
        {/* Role Details */}
        <div className="md:w-3/4">
          {/* Primary Position */}
          {experience.position && (
            <h4 className="text-lg font-semibold mb-3">{experience.position}</h4>
          )}
          
          {/* Main Description (if exists and should be displayed) */}
          {experience.description && experience.description.length > 0 && (
            <div className="space-y-1.5 mb-6">
              {experience.description.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 bg-[rgb(var(--accent-rgb))]"></div>
                  <p className="text-[rgb(var(--foreground-rgb))] dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Render roles */}
          {experience.roles.map((role, roleIndex) => (
            <div key={roleIndex} className={roleIndex !== experience.roles.length - 1 ? "mb-6" : ""}>
              {/* If single role and no position defined at parent level, or if multiple roles */}
              {(experience.roles.length > 1 || (!experience.position && experience.roles.length === 1)) && (
                <>
                  <h4 className="text-lg font-semibold mb-1">{role.title}</h4>
                  <p className="text-[rgb(var(--muted-rgb))] mb-3">{role.start} - {role.end}</p>
                  {role.position && <p className="text-sm font-medium text-[rgb(var(--foreground-rgb))] dark:text-gray-300 mb-1">{role.position}</p>}
                  {role.type && <p className="text-sm text-[rgb(var(--muted-rgb))] mt-1 mb-3">{role.type}</p>}
                </>
              )}
              
              {role.description && role.description.length > 0 && (
                <div className="space-y-1.5 mb-4">
                  {role.description.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 bg-[rgb(var(--accent-rgb))]"></div>
                      <p className="text-[rgb(var(--foreground-rgb))] dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Tech Stack */}
          {experience.tech && experience.tech.length > 0 && (
            <div className="mt-5">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--muted-rgb))] mb-2">Technologies</h5>
              <div className="flex flex-wrap gap-0.5">
                {experience.tech.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type CareerSectionProps = {
  experiences: Experience[];
};

const CareerSection = ({ experiences }: CareerSectionProps) => {
  return (
    <section id="career" className="py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">My professional experience in software development and leadership.</p>
        
        <div className="space-y-12 mt-14">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp} 
              delay={0.1 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection; 