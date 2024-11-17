import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-primary-color': {
          '@apply text-neutral-900 dark:text-neutral-50': '',
        },
        '.bg-primary-color': {
          '@apply bg-neutral-50 dark:bg-neutral-800': '',
        },
      });
    }),
  ],
};

export default config;
