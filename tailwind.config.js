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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#00b3aa', // Convert RGB 0,179,170 to hex
          dark: '#00c7be',    // Dark mode variant
        },
        secondary: {
          DEFAULT: '#7c3aed', // Convert RGB 124,58,237 to hex
          dark: '#8a5cf6',    // Dark mode variant
        },
        tertiary: {
          DEFAULT: '#f05200', // Convert RGB 240,82,0 to hex
          dark: '#ff7a00',    // Dark mode variant
        },
        content: {
          DEFAULT: '#1e1e1e', // Light mode text
          dark: '#e6e6e6',    // Dark mode text
        },
        background: {
          DEFAULT: '#fafafa', // Light mode background
          dark: '#0a0a0a',    // Dark mode background
        },
        muted: {
          DEFAULT: '#4b5563', // Light mode muted text
          dark: '#a3a3a3',    // Dark mode muted text
        },
        card: {
          DEFAULT: '#ffffff', // Light mode card bg
          dark: '#121212',    // Dark mode card bg
        },
        border: {
          DEFAULT: '#d1d5db', // Light mode border
          dark: '#262626',    // Dark mode border
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 