/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}', // All source files
  './public/**/*.html', // HTML files in the public directory
  './pages/**/*.{js,ts,jsx,tsx}', // Next.js pages directory
  './components/**/*.{js,ts,jsx,tsx}', // All components
];
export const theme = {
  extend: {}, // Customize Tailwind's default theme
};
export const plugins = [];
