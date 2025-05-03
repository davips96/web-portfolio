import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-lg font-semibold">
              David<span className="text-[rgb(var(--accent-rgb))]">.</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} David Bechara. All rights reserved.
            </p>
          </div>
          
          <p className="text-sm text-gray-500 text-center md:text-right">
            Designed and developed in collaboration with<br /> 
            Claude 3.7 Sonnet, an AI assistant.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 