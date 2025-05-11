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
        
        <div className="card max-w-3xl mx-auto mt-16 animate-fade-in rounded-xl p-8">
          <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">David Bechara</h3>
          
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:flex-1">
              <div className="grid gap-0 text-content dark:text-gray-300">
                <div className="leading-none">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-muted-dark mr-2">Email:</span> 
                  <a href="mailto:davbechara96@gmail.com" className="text-primary dark:text-primary-dark hover:underline">
                    davbechara96@gmail.com
                  </a>
                </div>
                <div className="leading-none mt-1.5">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-muted-dark mr-2">Phone:</span> 
                  <a href="tel:+15149619291" className="text-primary dark:text-primary-dark hover:underline">
                    514 961 9291
                  </a>
                </div>
                <div className="leading-none mt-1.5">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-muted-dark mr-2">Location:</span> 
                  <span>Montreal, QC</span>
                </div>
                <div className="leading-none mt-1.5">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-muted-dark mr-2">Languages:</span> 
                  <span>English, French</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 md:ml-8 flex flex-row md:flex-col gap-4">
              <Button 
                href="mailto:davbechara96@gmail.com" 
                variant="primary"
                className="flex-1 md:flex-auto"
              >
                <FiMail className="w-5 h-5" />
                Email Me
              </Button>
              <Button 
                href="/david-bechara-vcard.vcf" 
                variant="secondary"
                download
                className="flex-1 md:flex-auto"
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