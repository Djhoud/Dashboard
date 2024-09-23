/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-primary': {
          '@apply inline-flex items-center gap-x-2 py-2 px-4 bg-gradient-to-r from-primary to-fuchsia-700 font-medium text-sm text-white rounded-full focus:outline-none': {},
        },
        '.button-secondary': {
          '@apply inline-flex items-center gap-x-2 py-2 px-4 bg-gray-200 text-gray-800 rounded-full focus:outline-none': {},
        },
      });
    },
  ],
  darkMode: "class",
};