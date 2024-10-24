import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // All source files
    './public/**/*.html', // HTML files in the public directory
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {}, // Extend default theme here
  },
  plugins: [], // Add any Tailwind plugins if needed
  purge: false,
};

export default config;
