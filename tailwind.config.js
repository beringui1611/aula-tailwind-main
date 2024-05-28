/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/src/uber/assets/bguber.png')",
        city: "url('/src/uber/assets/bg-city.png')",
        backgroundYellow: "url('/src/nike/assets/bg.png')",
        tenisNike: "url('/src/nike/assets/tenis.png')",
        fontFamily: {
          "sans": ["Montserrat"]
        },
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-8px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        floatUp: "floatUp 2s infinite",
      },
      colors: {
        primaria: "#ff00ff",
      },
    },
  },
  plugins: [],
};
