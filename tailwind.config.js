/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      //   colors: {
      //     primary: "#ff7043",
      //     secondary: "#9ccc65",
      //     black: "#000000",
      //     notif: "#63cfff",
      //   },
      //   fontFamily: {
      //     pthin: ["Poppins-Thin", "sans-serif"],
      //     pextralight: ["Poppins-ExtraLight", "sans-serif"],
      //     plight: ["Poppins-Light", "sans-serif"],
      //     pregular: ["Poppins-Regular", "sans-serif"],
      //     pmedium: ["Poppins-Medium", "sans-serif"],
      //     psemibold: ["Poppins-SemiBold", "sans-serif"],
      //     pbold: ["Poppins-Bold", "sans-serif"],
      //     pextrabold: ["Poppins-ExtraBold", "sans-serif"],
      //     pblack: ["Poppins-Black", "sans-serif"],
      //   },
    },
  },
  plugins: [],
};
