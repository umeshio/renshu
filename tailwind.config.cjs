/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontSize: {
      xs: '1.4rem',
      sm: '1.6rem',
      base: '1.8rem',
      lg: '2rem',
      xl: '2.2rem'
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};

module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      pc: "800px",
    },
  },
  plugins: [],
};