export default {
  content: ['./src/index.html', './src/main.js'],
  theme: {
    screens: {
      sm: '720px',
      md: '940px',
      lg: '1200px',
    },
    extend: {
      keyframes: {
        loader: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(180deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'loader-inner': {
          '0%': { height: '0%' },
          '25%': { height: '0%' },
          '50%': { height: '100%' },
          '75%': { height: '100%' },
          '100%': { height: '0%' },
        },
      },
    },
  },
  plugins: [],
}
