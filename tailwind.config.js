module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      fontFamily: {
        body: 'system-ui, -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, Oxygen, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        sans: 'system-ui, -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, Oxygen, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      colors: {
        primary: {
          '50': '#f3fdff',
          '100': '#e7fbfe',
          '200': '#c3f4fd',
          '300': '#9fedfc',
          '400': '#56e0f9',
          '500': '#0ED2F7',
          '600': '#0dbdde',
          '700': '#0b9eb9',
          '800': '#087e94',
          '900': '#076779'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
