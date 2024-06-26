/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-preto': "url('public/bg.png')",
      },
      aspectRatio: {
        '9/10': '9/10',
      },
      container: {
        center: true,
        screens: {
          default: '768px',
        },
      },
      colors: {
        'azul-ancora': '#023a5d',
        'vermelho-ancora': '#d02131',
        fundo: 'rgba(252, 252, 255, 0.95)',
        'azul-ancora-muted': 'rgba(2, 58,93, 0.3)',
        muted: '#656565',
        'astronaut-blue': {
          20: '#FCFCFF',
          50: '#eff9ff',
          100: '#ddf4ff',
          200: '#b4e9ff',
          300: '#71d9ff',
          400: '#25c7ff',
          500: '#00b1fe',
          600: '#008dda',
          700: '#0070b0',
          800: '#005f91',
          900: '#034f77',
          950: '#023a5d',
        },
      },
    },
  },
  plugins: [],
};
