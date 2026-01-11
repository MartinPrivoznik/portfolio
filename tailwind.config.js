const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
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
            bgColor: "#000000",
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
            bgColor: "#ffffff",
            focus: "#BEF264",
            contrastColor: "#000000",
          },
        },
      },
    }),
  ],
};
