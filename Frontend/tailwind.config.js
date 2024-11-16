/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: '#0E1135',
      secondary: '#3498DB',
      success: '#2ECC71',
      danger: '#E74C3C',
      neutral: {
        light: '#ECF0F1',
        DEFAULT: '#95A5A6',
        dark: '#2C3E50',
      },
    },},
  },
  plugins: [],
}



