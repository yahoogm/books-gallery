/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {},

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6750A4',
          secondary: '#625B71',
          accent: '#7E5260',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#BA1A1A',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
