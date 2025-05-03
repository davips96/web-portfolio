import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CareerSection from "@/components/sections/CareerSection";
import SkillsAndEducation from "@/components/sections/SkillsAndEducation";
import ViewsSection from "@/components/sections/ViewsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Divider from "@/components/layout/Divider";
import { experiences, skillGroups, education } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(var(--background-rgb))]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Career Section */}
      <CareerSection experiences={experiences} />

      <Divider />

      {/* Skills & Education Section */}
      <SkillsAndEducation skillGroups={skillGroups} education={education} />
      
      <Divider />

      {/* Views Section */}
      <ViewsSection />

      <Divider />

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
