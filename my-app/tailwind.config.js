/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
      colors: {
        'accent-green': '#BFD962',
        'primary-dark': '#203136',
        'stroke-medium': '#DDAD0'
      },
    },
    fontSize: {
      sm: '0.748rem',
      base: '1rem',
      'md': '1.125rem',
      xl: '1.25rem',
      '1.5xl': '1.383rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'xs': {'max': '360px'},

      'sm': {'max': '1439px'},
     
      'md': {'min': '1440px', 'max': '1919px'},

      'lg': {'min': '1920px'}
    }
  },
  plugins: [],
}

