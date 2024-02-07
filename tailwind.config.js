/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors:{
    //   'menu': "#81689D",
    //   'list': "#FFF3CF"
    // },
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {     
        "primary": "#df00ff",
        "secondary": "#00daff",
        "accent": "#ff9f00",
        "neutral": "#230c08",
        "base-100": "#212828",
        "info": "#00b3e1",
        "success": "#00902e",
        "warning": "#ff5600",   
        "error": "#ff8192",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}

