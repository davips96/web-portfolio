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
        className="p-2 rounded-md text-content dark:text-content-dark hover:text-primary dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-5">
            <button
              className="p-2 rounded-md text-content-dark hover:text-primary-dark hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-2xl font-medium text-content-dark hover:text-primary-dark transition-colors py-4"
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