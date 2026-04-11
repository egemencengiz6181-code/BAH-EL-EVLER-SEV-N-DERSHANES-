import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E35205",
          light: "#FF9E7F",
          dark: "#A03500",
        },
        secondary: {
          DEFAULT: "#A03500",
          light: "#E35205",
          dark: "#7A2800",
        },
        accent: {
          DEFAULT: "#E35205",
          muted: "#1a0e08",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom right, #05010d, #0e1e2e)',
      },
    },
  },
  plugins: [],
};
export default config;
