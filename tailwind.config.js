/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FD9602",
        "secondary": "#FD9602",
        "tertiary": "#4260C1",
        "regular": "#393939",
        regular2: 'rgba(66, 96, 193, 0.2)',
        regular3: 'rgba(253, 150, 2, 0.2)',
        newgray: 'rgba(57, 57, 57, 1)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.3)',
        'none': 'none',
      },
      screens: {
        '1xl': '1280px',
        '2xl': '1440px',
      },
      maxWidth: {
        'screen-2xl': '1440px',
        'screen-1xl': '1280px',
      },
      lineHeight: {
        'extra-tight': '1.1px',
        'extra-loose': '110px',
      },
      fontFamily: {
        meutasRegular: ['Meutas Regular', 'sans-serif'],
        meutasLight: ['Meutas Light', 'sans-serif'],
        meutasThin: ['Meutas Thin', 'sans-serif'],
        meutasBold: ['Meutas Bold', 'sans-serif'],
        meutasBlack: ['Meutas Black', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      ringColor: ['focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.body-fixed': {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          overflow: 'hidden',
        },
      });
    },
  ],
}
