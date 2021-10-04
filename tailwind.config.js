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
          300: '#3d70b2',
          400: '#5596e6',
        },
        gray: {
          100: '#f9f9fb',
          200: '#f4f7fb',
        },
      },
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
