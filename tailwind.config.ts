import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'dark-primary': 'var(--dark-primary)',
        'light-primary': 'var(--light-primary)',
        'button-primary': 'var(--button-color)',
        border: 'var(--border-color)',
      },
      backgroundImage: {
        'gradient-main':
          'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)',
      },
      boxShadow: {
        primary: 'var(--shadow-primary)',
        secondary: 'var(--shadow-secondary)',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  plugins: [],
};
export default config;
