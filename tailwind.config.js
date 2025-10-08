/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/sass/*.{scss}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      fontSize: {
        'xxs': '11px',
        'xxxs': '10px',
      },
      colors: {
        primary: '#f42c37',
        //   primaryLight: 'rgba(9,96,90,0.05)',
        secondary: '#f42c37',
        brandYellow: '#fdc62e',
        brandGreen: '#2dc62e',
        brandBlue: '#1376f4',
        brandWhite: '#eeeeee',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      // boxShadow: {
      //   'custom': '0px 2px 5px rgba(0, 0, 0, 0.25)',
      //   'custom2': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      //   'posItem': '0px 1px 30px 0px rgba(0, 0, 0, 0.05)',
      //   'allSideShadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      // },
    },
    //   fontFamily: {
    //     Poppins: ['Poppins', 'sans-serif'],
    //     Nunito: ['Nunito Sans', 'sans-serif'],
    //     Atkin: ['Atkinson Hyperlegible', 'sans-serif'],
    //     Barlow: ['Barlow', 'sans-serif']
    //   }

  },
  plugins: [],
}