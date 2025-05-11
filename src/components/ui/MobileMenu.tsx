import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

type NavLink = {
  href: string;
  label: string;
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#career", label: "Career" },
    { href: "#views", label: "Views" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="md:hidden">
      <button
        className="text-gray-400 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-5">
            <button
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-2xl font-medium text-gray-300 hover:text-primary-dark transition-colors py-4"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 