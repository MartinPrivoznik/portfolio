import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#b249f8",
              foreground: "#000000",
            },
            focus: "#BEF264",
            contrastColor: "#ffffff",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#00d2ff",
              foreground: "#ffffff",
            },
            focus: "#BEF264",
            contrastColor: "#000000",
          },
        },
      },
    }),
  ],
};
