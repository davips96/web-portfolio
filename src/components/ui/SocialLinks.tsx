import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLinks = () => {
  const links: SocialLink[] = [
    {
      href: "https://github.com",
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com",
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://twitter.com",
      icon: <FiTwitter className="w-5 h-5" />,
      label: "Twitter"
    }
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-[rgb(var(--accent-rgb))] transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 