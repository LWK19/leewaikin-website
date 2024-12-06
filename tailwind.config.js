/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ['Tw Cen Mt Std', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "black": '#07060D',
        "bg-main": "#161426",
        "bg-elevate": "#363440",
        "accent1": "#4D87F5",
        "white": "#F2EFF1"
      },
      
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require("tailwindcss-view-transitions"),

  ],
}

