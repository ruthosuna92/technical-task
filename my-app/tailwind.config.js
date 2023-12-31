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
        'stroke-medium': '#DDDAD0',
        'accent-dark-blue': '#425DB6',
        'accent-green-light': '#ECF2D5',
        'gray': '#D0D5DD',
        'stroke-cards': '#F1F1F1',
        'stroke-dark': '#8A8987',
        'gray-300-c' : '#D0D5DD'
      },
      animation: {
        "scroll": "scroll 10s linear"
      },
      keyframes: {
        "scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }
    },
    fontSize: {
      sm: '0.748rem',
      smb: '0.875rem',
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

      'sm': {'min': '361px','max': '1440px'},
     
      'md': {'min': '1441px'},

    }
  },
  plugins: [],
}

