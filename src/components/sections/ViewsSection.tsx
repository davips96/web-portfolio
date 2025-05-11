import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const ViewsSection = () => {
  return (
    <section id="views" className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionTitle 
          title="My Views" 
          subtitle="Thoughts on technology and society in the modern world." 
        />
        
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {/* AI and Software Development */}
          <div className="card animate-fade-in">
            <h3 className="text-xl font-bold text-[rgb(var(--accent-rgb))] mb-6">AI and Software Development</h3>
            <div className="space-y-4 text-[rgb(var(--foreground-rgb))] dark:text-gray-300">
              <p>
                The advent of AI is transforming software development rapidly. This very website was written by an AI agent under my supervision, demonstrating the collaborative future I envision for our industry.
              </p>
              <p>
                I believe developers who embrace AI tools will gain incredible productivity advantages. Instead of replacing developers, AI will elevate us to focus on higher-level architecture, design, and creativity while handling repetitive coding tasks.
              </p>
              <p>
                This collaborative approach between human creativity and AI assistance represents the next evolution of our craft. The most successful developers will be those who learn to effectively co-create with AI systems, guiding and refining their output to achieve superior results.
              </p>
            </div>
          </div>
          
          {/* Social and Economic Justice */}
          <div className="card animate-fade-in delay-100">
            <h3 className="text-xl font-bold text-[rgb(var(--accent-rgb))] mb-6">Social and Economic Justice</h3>
            <div className="space-y-4 text-[rgb(var(--foreground-rgb))] dark:text-gray-300">
              <p>
                I believe strongly in human rights and social justice as foundational principles for a functioning society. The ongoing Gaza conflict has escalated into a humanitarian crisis that demands international attention and action.
              </p>
              <p>
                I'm concerned about the rise of right-wing politics that claim to support working people while implementing policies that primarily benefit large corporations and wealthy individuals. As a proponent of Keynesian economics, I believe government spending during economic downturns can stimulate growth and provide essential services.
              </p>
              <p>
                Governments must be held accountable for providing robust social services, healthcare, education, and infrastructure that benefit all citizens, not just the privileged few. Economic policies should reduce inequality rather than exacerbate it.
              </p>
              <p>
                Technology should be developed with ethical considerations at the forefront, ensuring advances benefit humanity broadly rather than concentrating power in the hands of a few.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewsSection; 