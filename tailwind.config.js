/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        martwall: {
          azul: '#0071dc',
          oscuro: '#004f9a',
          marino: '#041e42',
          amarillo: '#ffc220',
          fondo: '#eef5fc',
          borde: '#d3e3f5',
          gris: '#5b6f86',
        },
      },
    },
  },
  plugins: [],
}
