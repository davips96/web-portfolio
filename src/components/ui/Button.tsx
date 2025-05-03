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
    primary: `bg-[rgb(var(--accent-rgb))] text-white hover:translate-y-[-2px] hover:shadow-md 
              hover:shadow-[rgba(var(--accent-rgb),0.3)] active:translate-y-0 active:shadow-none`,
    
    secondary: `bg-[rgba(var(--accent-rgb),0.1)] text-[rgb(var(--accent-rgb))] 
                hover:bg-[rgba(var(--accent-rgb),0.15)] active:bg-[rgba(var(--accent-rgb),0.2)]`,
    
    outline: `bg-transparent border border-[rgba(var(--accent-rgb),0.5)] text-[rgb(var(--accent-rgb))] 
              hover:border-[rgb(var(--accent-rgb))] hover:bg-[rgba(var(--accent-rgb),0.05)]`,
    
    text: `bg-transparent text-[rgb(var(--accent-rgb))] hover:bg-[rgba(var(--accent-rgb),0.05)] 
           px-2 py-1 rounded-md`
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