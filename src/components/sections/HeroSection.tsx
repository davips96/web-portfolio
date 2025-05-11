import { FiChevronRight, FiMail } from "react-icons/fi";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>

      <div className="container mx-auto px-5 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-2/3 animate-fade-in">
            <div className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-primary/30 dark:border-primary-dark/30 text-primary dark:text-primary-dark mb-6">
              Senior Software Engineer @ Sonder
            </div>
            <h1 className="hero-title mb-6">
              Hi, I'm <span className="text-primary dark:text-primary-dark">David Bechara</span>
            </h1>
            <p className="text-body-lg text-muted dark:text-muted-dark mb-8 max-w-2xl">
              Enthusiastic and dynamic developer with 6 years of professional experience. Currently seeking a fresh
              start to grow into a director of software.
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
              <div className="absolute w-full h-full rounded-lg rotate-6 bg-secondary/10 dark:bg-secondary-dark/10 border border-secondary/20 dark:border-secondary-dark/20"></div>
              <div className="absolute w-full h-full rounded-lg -rotate-6 bg-tertiary/10 dark:bg-tertiary-dark/10 border border-tertiary/20 dark:border-tertiary-dark/20"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-primary/20 dark:border-primary-dark/20 bg-card dark:bg-card-dark shadow-lg z-10">
                <Image
                  src="https://davidbechara--web-portfolio.s3.us-east-1.amazonaws.com/profile.jpeg"
                  alt="David Bechara"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 0%" }}
                  priority
                  className="rounded-lg scale-[1.3]"
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
