"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileMenu from "@/components/ui/MobileMenu";
import { motion } from "framer-motion";

type NavLink = {
  href: string;
  label: string;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const links: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#career", label: "Career" },
    { href: "#views", label: "Views" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-5 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-[rgb(var(--accent-rgb))] transition-colors">
          David<span className="text-[rgb(var(--accent-rgb))]">.</span>
        </a>
        <div className="flex items-center gap-7">
          <div className="hidden md:flex items-center gap-7">
            {links.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                className="text-sm font-medium relative text-[rgb(var(--muted-rgb))] hover:text-[rgb(var(--accent-rgb))] transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[rgb(var(--accent-rgb))] transform scale-x-0 transition-transform duration-300 ease-out origin-bottom-left hover:scale-x-100" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 