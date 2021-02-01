module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        blue: {
          100: '#2094f3',
          200: '#152935',
        },
        gray: {
          100: '#f9f9fb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
