/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '380px' },
    },
    extend: {
      colors: {
        green: '#008037',
        'pr-black': '#121113',
        'lg-text-c': '#87888D',
      },
    },
  },
  plugins: [],
};
