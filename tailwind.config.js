/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#131313", // Background
        nav: "#1C1C1C", // Secondary Background
        div: "#27272A", // Div color
        icon: "#93C5FD", // Custom icon color
      },
    },
  },
  plugins: [],
}

