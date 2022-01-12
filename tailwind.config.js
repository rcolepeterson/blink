module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['"VT323"', "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
