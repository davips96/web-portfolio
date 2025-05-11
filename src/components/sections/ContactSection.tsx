import React from 'react';
import { FiMail, FiDownload } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Interested in working together? Let's connect." 
        />
        
        <div className="card max-w-3xl mx-auto mt-16 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-6">David Bechara</h3>
              <div className="space-y-4 text-content dark:text-gray-300">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-content dark:text-gray-200">Email:</span> 
                  <a href="mailto:davbechara96@gmail.com" className="text-primary dark:text-primary-dark hover:underline">
                    davbechara96@gmail.com
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-content dark:text-gray-200">Phone:</span> 
                  <a href="tel:+15149619291" className="text-primary dark:text-primary-dark hover:underline">
                    514 961 9291
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-content dark:text-gray-200">Location:</span> 
                  <span>Montreal, QC</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-content dark:text-gray-200">Languages:</span> 
                  <span>English, French</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button 
                href="mailto:davbechara96@gmail.com" 
                variant="primary"
              >
                <FiMail className="w-5 h-5" />
                Email Me
              </Button>
              <Button 
                href="/david-bechara-vcard.vcf" 
                variant="secondary"
                download
              >
                <FiDownload className="w-5 h-5" />
                Download Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 