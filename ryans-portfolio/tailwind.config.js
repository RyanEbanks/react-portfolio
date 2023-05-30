/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        customBackground: {
          DEFAULT: 'rgb(56, 59, 83)',
          gradient: 'linear-gradient(90deg, rgba(56, 59, 83, 1) 0%, rgba(78, 83, 116, 1) 100%)',
        },
        transparent: "transparent",
        space: "#383B53",
        white: "#FFFFFF",
        teal: "#008080",
        coral: "#E56B70"
      }
    },
  },
  plugins: [],
}