/** @type {import('tailwindcss').Config} */
const { space } = require('postcss/lib/list');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container:{
        center:true,
        padding:'2rem',
      },
      fontFamily:{
        vazir: ['Vazir'],
      },
    extend:{
      spacing:{
        '30':'7.5rem',
        '34':'8.5rem',
        '26':'6.5rem',
        '22':'5.5rem',
      },
      animation:['hover'],
      boxShadow:{
        glass: 'inset 0 2px 22px 0 rgba(255, 255 , 255, 0.6);',
      },
      colors:{
        'gray':colors.gray
      },
      padding:{
      '88':'22rem',
      },
      height:{
        '88':'22rem',
      },
      inset:{
        '18':'4.5rem',
      },
      width:{
      '22':'5.5rem',
      },
    },
  },
  variants: {
    extend:{},
  },
  plugins: [    require('@tailwindcss/aspect-ratio'),
                require('@tailwindcss/line-clamp'),
  ],
}

