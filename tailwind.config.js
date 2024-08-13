/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': "#19231F",
        'red': "#451515",
        'gold': "#BAA274",
        'menu': "rbga(186, 162, 116, 0.2)"
      }
    }
  },
  plugins: [],
};
