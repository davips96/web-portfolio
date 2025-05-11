import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  download?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ 
  children, 
  href, 
  variant = 'primary',
  size = 'md',
  className = '', 
  onClick,
  download,
  type = 'button'
}: ButtonProps) => {
  // Base styles common to all buttons
  const baseStyles = "inline-flex items-center gap-2 font-medium transition-all duration-300 rounded-lg";
  
  // Size variations
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-5 py-3"
  };
  
  // Variant styles
  const variantStyles = {
    primary: `bg-primary dark:bg-primary-dark text-white hover:translate-y-[-2px] hover:shadow-md 
              hover:shadow-primary/30 dark:hover:shadow-primary-dark/30 active:translate-y-0 active:shadow-none
              border border-primary/70 dark:border-primary-dark/70`,
    
    secondary: `bg-primary/15 dark:bg-primary-dark/15 text-content dark:text-content-dark 
                hover:bg-primary/20 dark:hover:bg-primary-dark/20 active:bg-primary/25 dark:active:bg-primary-dark/25
                border border-primary/30 dark:border-primary-dark/30`,
    
    outline: `bg-transparent border border-primary/60 dark:border-primary-dark/60 text-content dark:text-content-dark 
              hover:border-primary dark:hover:border-primary-dark hover:bg-primary/5 dark:hover:bg-primary-dark/5`,
    
    text: `bg-transparent text-content dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 
           px-2 py-1 rounded-md border-b border-primary/30 dark:border-primary-dark/30`
  };
  
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        onClick={onClick}
        download={download}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button; 