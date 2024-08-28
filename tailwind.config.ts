import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#b7d1611b', // 0.1
          200: '#b7d1614c', // 0.3
          300: '#b7d16166', // 0.4
          400: '#b7d16199', // 0.6
          500: '#b7d161',
          600: '#8ba630', // 30% darker
        },
        secondary: {
          100: '#fa9b201b', // 0.1
          200: '#fa9b204c', // 0.3
          300: '#fa9b2066', // 0.4
          400: '#fa9b2099', // 0.6
          500: '#fa9b20',
          600: '#c16f04', // 30% darker
        },
        dark: {
          50: '#fff',
          200: '#ccc',
          700: '#22292e',
          800: '#0f2127',
          900: '#181818',
          950: '#111',
        },
      },
      fontFamily: {
        sans: ['var(--font-clear-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
