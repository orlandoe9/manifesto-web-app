/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        montserrat: ['var(--font-montserrat)'],
        openSans: ['var(--font-open-sans)'],
        oldStandardTT: ['var(--font-old-standard-tt)'],
        inter: ['var(--font-inter)'],
        colors: {
          bgColor: '#19192e',
          headerColor: '#1f1f39',
          logocolor: '#eea86c',
          bgsignIncolor: '#9393aa',
          bg2signIncolor: '#f5f5f5',
          linescolor: '#979797',
          signUpBoxcolor: '#1f1f39',
          errorColor: '#c01313',
        },
        backgroundImage: {
          manifestoMobile: "url('public/img/Manifesto.svg')",
          manifestoMobile2: "url('public/img/BgBottom.svg')",
        },
      },
    },
  },
  plugins: [],
};
