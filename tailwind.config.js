/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#000',
        textColor: '#FFF',
        button: '#8257E5',
        border: '#29292E',
        borderMenuMobile: '#A8A8B3',
        textColorMenuMobile: '#E1E1E6',
      },
      fontFamily: {
        sans: ['Manrope', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize:{
        sm: '12px',
      },
      blur:{
        xs: '200px',
      },
      spacing: {
        '90%': '65%',
        rightMenu: '17.5rem',
        leftMenu: '10.125rem',
        margin: '0px auto',
      },
    },
  },
  plugins: [],
}
