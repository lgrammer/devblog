module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  presets: [require('./utils/tailwind-preset')],
  theme: {
    extend: {
      colors: {
        'blue-white': '#e0f4ff',
      },
    },
  },
};
