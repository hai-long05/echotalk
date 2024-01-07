/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'bg-white-color': 'var(--bg-white-color)',
        'primary-color': 'var(--primary-color)'
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)',

          }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        wave: {
          '0%': {
            marginLeft: '0'
          },
          '100%': {
            marginLeft: '-1600px'
          }
        }
      },
      animation: {
        'slide-right': 'slideRight 1s ease forwards',
        'slide-left': 'slideLeft 1s ease forwards',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

