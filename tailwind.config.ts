import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // All source files
    './public/**/*.html', // HTML files in the public directory
  ],
  theme: {
    extend: {}, // Extend default theme here
  },
  plugins: [], // Add any Tailwind plugins if needed
};

export default config;
