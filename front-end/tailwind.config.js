/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrayish: "#55423d", //buat Bg (warna gelap keabu-abuan)
        paleWhite: "#fffffe", //headline (warna pucat dominan putih)
        paleOrange: "#fff3ec", //paragrap & main (warna pucat dominan orange)
        pinkTone: "#ffc0ad", // button
        darkRed: "#271c19", // buttonText
        darkRed01: "##140d0b", //
        pink: "#e78fb3", //highlight (soft pink)
        paleRed: "#ffc0ad", // secondary
        darkMagenta: "#9656a1", //tertiary
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};