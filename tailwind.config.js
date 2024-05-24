/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        zoom: 'zoom 3s ease-in-out infinite',
        slide: 'slide 15s linear infinite',
      },
      boxShadow: {
        'light-blue-gray': '0 7px 8px rgba(173, 216, 230, 0.7)', // Example shadow
      },
    },
    // colors: {
    //   orange: 'rgba(255, 187, 122, 1)',
    // },
  },
  plugins: [],
};
