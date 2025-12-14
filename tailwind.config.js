/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Next.js 13+ app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',   // your blue
        secondary: '#2c3e50', // dark/navy
        accent: '#f8f9fa',    // light background
      },
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // nice text styling for blog posts
  ],
};
