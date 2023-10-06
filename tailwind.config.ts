import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3a359e',
          secondary: '#70e084',
          accent: '#fcc33f',
          neutral: '#2a2234',
          'base-100': '#fdfcfd',
          info: '#6497e3',
          success: '#48e08a',
          warning: '#e19f05',
          error: '#ea5353',
        },
      },
    ],
  },
};
export default config;
