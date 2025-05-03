/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        // Define text size utilities that were missing
        'xs': '0.75rem',     // text-xs
        'sm': '0.875rem',    // text-sm
        'base': '1rem',      // text-base
        'lg': '1.125rem',    // text-lg
        'xl': '1.25rem',     // text-xl
        '2xl': '1.5rem',     // text-2xl
        '3xl': '1.875rem',   // text-3xl
        '4xl': '2.25rem',    // text-4xl
        '5xl': '3rem',       // text-5xl
        '6xl': '3.75rem',    // text-6xl
        '7xl': '4.5rem',     // text-7xl
      },
      screens: {
        // Define responsive breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontWeight: {
        // Define font weight utilities
        'thin': '100',
        'extralight': '200',
        'light': '300', 
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      borderRadius: {
        // Define border radius utilities
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 