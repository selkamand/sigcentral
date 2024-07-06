/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sc-blue": "#152630ff",
        "sc-white": "#e0ddcfff",
        "sc-green": "#568259ff",
        "sc-pink": "#c78283ff",
        "sc-red": "#6d1a36ff",
      },
    },
  },
  plugins: [],
}

