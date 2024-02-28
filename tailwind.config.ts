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
        transparentWhite: 'rgba(249,249,249,0.7)',
        transparentBlack: 'rgba(51,51,51,0.7)',
        lightestBlack: '#3b3c36!',
        lighterBlack: '#343434',
        lightBlack: '#333333',
        black: '#000000',
        white: '#f9f9f9',
        lightGray: '#ECECEC',
        midLightBlue: '#97D4E9',
        midDarkGreen: '#1D8790',
        darkDarkGreen: '#216569',
        darkerDarkGreen: '#005051',
        darkestDarkGreen: '#0D2A2A',
        darkLime: '#A2F434',
        darkerLime: '#74C30B',
      },
      fontFamily: {
        notoSansMono: ['var(--font-noto-sans-mono)'],
        lora: ['var(--font-lora)'],
        archivo: ['var(--font-archivo)'],
        archivoNarrow: ['var(--font-archivo-narrow)'],
      },
    },
  },
  plugins: [],
};
export default config;
