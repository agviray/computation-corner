import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      height: {
        navbarHeight: '4rem',
      },
      padding: {
        offsetNavbarHeight: '4rem',
      },
      colors: {
        black: '#333333',
        white: '#f9f9f9',
        transparentWhite: 'rgba(249,249,249,0.7)',
        transparentBlack: 'rgba(51,51,51,0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
