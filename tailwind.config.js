// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   darkMode: "class",
// //   theme: {
// //     extend: {
// //       keyframes: {
// //         zoom: {
// //           '0%, 100%': { transform: 'scale(1)' },
// //           '50%': { transform: 'scale(1.1)' },
// //         },
// //         slide: {
// //           '0%': { transform: 'translateX(0)' },
// //           '100%': { transform: 'translateX(-50%)' },
// //         },
// //       },
// //       animation: {
// //         zoom: 'zoom 3s ease-in-out infinite',
// //         slide: 'slide 15s linear infinite',
// //       },
// //       boxShadow: {
// //         'light-blue-gray': '0 7px 8px rgba(173, 216, 230, 0.7)', // Example shadow
// //       },
// //       backgroundImage: theme => ({
// //         'custom-yellow-gradient': 'linear-gradient(rgb(250 204 21 / 0.5), #ffd233)',
// //       }),
// //     },
// //     // colors: {
// //     //   orange: 'rgba(255, 187, 122, 1)',
// //     // },
// //   },
// //   plugins: [],
// // };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       keyframes: {
//         zoom: {
//           '0%, 100%': { transform: 'scale(1)' },
//           '50%': { transform: 'scale(1.1)' },
//         },
//         slide: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       animation: {
//         zoom: 'zoom 3s ease-in-out infinite',
//         slide: 'slide 15s linear infinite',
//       },
//       boxShadow: {
//         'light-blue-gray': '0 7px 8px rgba(173, 216, 230, 0.7)', // Example shadow
//       },
//       backgroundImage: theme => ({
//         'custom-yellow-gradient': 'linear-gradient(rgb(250 204 21 / 0.5), #ffd233)',
//       }),
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FFFF99', // Light yellow color
        'light-theme-yellow': '#ffd233',
        'dark-yellow': '#b8860b',  // Dark yellow color
        'sky-500': colors.sky[500], // Tailwind sky color
      },
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
      backgroundImage: theme => ({
        'custom-yellow-gradient': 'linear-gradient(rgb(250 204 21 / 0.5), #ffd233)',
      }),
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
