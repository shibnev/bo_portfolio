import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ['"Fira Code"', "sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'white': '#ffffff',
        'black': '#000000',
        'dark': '#1e2d3d',
        'primary': '#011627',
        'primaryLight': '#607b96',
        'primaryDark': '#1c2b3a',
        'secondary': '#43d9ad',
        'danger': '#e99287',
        'success': '#4d5bce',
        'warning': '#fea55f',

        background: "var(--black)",
        foreground: "var(--white)",

      },
    },
  },
  plugins: [],
} satisfies Config;
