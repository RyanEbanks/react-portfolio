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
        coral: "#E56B70",
        git: "#F05032",
        bootstrap: "#7952B3",
        tailwind: "#38B2AC",
        api: "#007BFF",
        jquery: "#0769AD",
        json: "#F90",
        nodejs: "#339933",
        expressjs: "#000000",
        sequelize: "#4E73DF",
        pwa: "#007BFF",
        react: "#61DAFB",
        mongo: "#47A248",
        graphql: "#E535AB",
        colorHtml: "#E34F26",
        colorCSS: "#1572B6",
        colorJS: "#F7DF1E",
        colorMySQL: "#4479A1",
      },
      spacing: {
        '23': '6rem',
        '28': '7rem',
        '32': '8rem', 
        
      },
    },
  },
  plugins: [],
}