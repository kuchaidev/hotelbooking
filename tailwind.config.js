/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#003857',
        'primary-blue-light': '#217FEB',
        'secondary-blue': '#0B67BA',
        'secondary-blue-dark': '#025188',
        'tertiary-blue': '#BED1FF',
        'primary-orange': '#EB9A3D',
        'primary-orange-dark': '#BA661B', 
      },
      fontFamily: {
        display: ["Georama"],
      },
    },
  },  
  plugins: [],
}

