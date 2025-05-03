import { Experience } from "@/types";

type ExperienceCardProps = {
  experience: Experience;
  delay: number;
};

const ExperienceCard = ({ experience, delay }: ExperienceCardProps) => {
  return (
    <div className="card card-hover animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Company Info */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold text-[rgb(var(--accent-rgb))]">{experience.company}</h3>
          <p className="text-gray-500 mt-1 mb-2">{experience.period}</p>
          <p className="text-sm text-gray-400">{experience.type}</p>
        </div>
        
        {/* Role Details */}
        <div className="md:w-3/4">
          {/* Position */}
          {Array.isArray(experience.position) ? (
            experience.position.map((pos, idx) => (
              <h4 key={idx} className="text-lg font-semibold mb-2">{pos}</h4>
            ))
          ) : (
            <h4 className="text-lg font-semibold mb-3">{experience.position}</h4>
          )}
          
          {/* Responsibilities */}
          <div className="space-y-4 mb-8">
            {experience.description.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 bg-[rgb(var(--accent-rgb))]"></div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Technologies</h5>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type OtherExperienceProps = {
  title: string;
  period: string;
  description: string;
  role: string;
};

const OtherExperienceItem = ({ title, period, description, role }: OtherExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/4">
        <p className="text-gray-500">{period}</p>
      </div>
      <div className="md:w-3/4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-400 mb-2">{description}</p>
        <p className="text-sm text-gray-300">{role}</p>
      </div>
    </div>
  );
};

type CareerSectionProps = {
  experiences: Experience[];
};

const CareerSection = ({ experiences }: CareerSectionProps) => {
  return (
    <section id="career" className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">My professional experience in software development and leadership.</p>
        
        <div className="space-y-16 mt-20">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp} 
              delay={0.1 + index * 0.1} 
            />
          ))}
          
          {/* Other Experience */}
          <div className="card card-hover animate-fade-in delay-300">
            <h3 className="text-xl font-bold text-[rgb(var(--accent-rgb))] mb-8">Other Experience</h3>
            
            <div className="space-y-12">
              <OtherExperienceItem
                title="Nuance"
                period="Sep 2019 - Apr 2020"
                description="Software Solutions (Capstone Project)"
                role="Full Stack Developer"
              />
              
              <OtherExperienceItem
                title="CTC Vision Inc."
                period="Feb 2019 - Aug 2019"
                description="Eyewear Laboratory"
                role="Full Stack Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection; 