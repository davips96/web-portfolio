import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
  return (
    <div className={className}>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionTitle; 