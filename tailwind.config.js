/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('./assets/circle.png')",
        videoBg: "url('./assets/video-bg.png')",
        explore: "url('./assets/explore.png')",
      },
    },
  },
  plugins: [],
};
