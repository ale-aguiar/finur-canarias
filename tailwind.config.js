/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'finur-50': '#f3faeb',
        'finur-100': '#e4f3d4',
        'finur-200': '#cbe8ae',
        'finur-300': '#a8d87e',
        'finur-400': '#89c655',
        'finur-500': '#6eb139',
        'finur-600': '#508828',
        'finur-700': '#3f6823',
        'finur-800': '#355321',
        'finur-900': '#2e481f',
        'finur-950': '#16270c',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}