/**
 * References:
 * https://tailwindcss.com/docs/optimizing-for-production
 */

module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{html,js,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        'color-border-ready': {
          '0%': { 'border-color': 'rgb(232, 121, 249)' }, // fuchsia
          '99%': { 'border-color': 'rgb(232, 121, 249)' }, // fuchsia
          '100%': { 'border-color': 'rgb(22, 78, 99)' }, // cyan
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '99%': {
            transform: 'rotate(360deg)',
            'border-color': 'rgb(232, 121, 249)', // fuchsia
          },
          '100%': {
            transform: 'rotate(360deg)',
            'border-color': 'rgb(103, 232, 249)', // cyan
          },
        },
        'tune-out': {
          '0%': {
            opacity: '100%',
            visibility: 'visible',
          },
          '20%': { opacity: '60%' },
          '40%': { opacity: '80%' },
          '60%': { opacity: '40%' },
          '80%': { opacity: '60%' },
          '100%': {
            opacity: '0%',
            visibility: 'hidden',
          },
        },
      },
      animation: {
        'color-border-ready': 'color-border-ready 3s ease-out',
        'spin-slow': 'spin-slow 3s linear',
        'tune-out': 'tune-out 3s ease-in',
      },
      fontFamily: {
        'ubuntu-regular': ['ubuntu-regular', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'ubuntu-bold': ['ubuntu-bold', 'ubuntu-regular', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      fontSize: {
        'root': '18px',
      },
    },
  },
  plugins: [],
}
