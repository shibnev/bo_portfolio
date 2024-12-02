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
        'dark': '#1E2D3D',
        'primary': '#011627',
        'primaryLight': '#607B96',
        'secondary': '#43D9AD',
        'danger': '#E99287',
        'success': '#4D5BCE',

        background: "var(--black)",
        foreground: "var(--white)",

      },
    },
  },
  plugins: [],
} satisfies Config;
