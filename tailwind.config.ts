import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f8f8f8',
        card: '#1a1a1a',
        'card-foreground': '#f8f8f8',
        primary: '#3b82f6', // Electric Blue
        'primary-foreground': '#f8f8f8',
        secondary: '#a855f7', // Vibrant Purple
        'secondary-foreground': '#f8f8f8',
        muted: '#2a2a2a',
        'muted-foreground': '#a0a0a0',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.muted.foreground'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.foreground'),
            },
            h2: {
              color: theme('colors.foreground'),
            },
            h3: {
              color: theme('colors.foreground'),
            },
            strong: {
              color: theme('colors.foreground'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
