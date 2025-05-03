import { FiChevronRight, FiMail } from "react-icons/fi";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      
      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-2/3 animate-fade-in">
            <div className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-[rgba(var(--accent-rgb),0.3)] text-[rgb(var(--accent-rgb))] mb-6">
              Lead Frontend Developer
            </div>
            <h1 className="hero-title mb-6">
              Hi, I&apos;m <span className="text-[rgb(var(--accent-rgb))]">David Bechara</span>
            </h1>
            <p className="text-body-lg text-[rgb(var(--muted-rgb))] mb-8 max-w-2xl">
              Enthusiastic and dynamic dev lead with 6 years of professional experience. 
              Currently seeking a fresh start to grow into a director of software.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#career" variant="primary">
                Explore my work
                <FiChevronRight />
              </Button>
              <Button href="#contact" variant="secondary">
                Get in touch
                <FiMail className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Social links */}
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center md:justify-end animate-fade-in delay-200 mt-8 md:mt-0">
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              <div className="absolute w-full h-full rounded-lg rotate-6 bg-[rgba(var(--secondary-rgb),0.1)] border border-[rgba(var(--secondary-rgb),0.2)]"></div>
              <div className="absolute w-full h-full rounded-lg -rotate-6 bg-[rgba(var(--tertiary-rgb),0.1)] border border-[rgba(var(--tertiary-rgb),0.2)]"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[rgba(var(--accent-rgb),0.2)] bg-[rgb(var(--card-rgb))] shadow-lg z-10">
                <Image
                  src="/profile.jpeg"
                  alt="David Bechara"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 