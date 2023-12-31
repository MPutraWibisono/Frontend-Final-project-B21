/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        padding: "padding",
      },
      colors: {
        darkGrayish: "#55423d", //buat Bg (warna gelap keabu-abuan)
        paleWhite: "#fffffe", //headline (warna pucat dominan putih)
        paleOrange: "#fff3ec", //paragrap & main (warna pucat dominan orange)
        pinkTone: "#ffc0ad", // button
        darkRed: "#271c19", // buttonText
        darkRed01: "#140d0b", //
        pink: "#e78fb3", //highlight (soft pink)
        paleRed: "#ffc0ad", // secondary
        darkMagenta: "#9656a1", //tertiary

        // other colors
        customGreen01: "#86efac",
        customLime01: "#ecfccb",
        customEmerald01: "#10b981",
        darkBlue05: "#6148FF",
        darkBlue04: "#6148FF57",
        darkBlue03: "#489CFF",
        darkBlue02: "#D0B7E6",
        darkBlue01: "#E2D4F0",
        creame05: "#AA9B87",
        creame04: "#D4C2A8",
        creame03: "#FFE9CA",
        creame02: "#FFF0DC",
        creame01: "#FFF8ED",
        alertRed: "#FF0000",
        alertYellow: "#F9CC00",
        alertGreen: "#73CA5C",
        neutral05: "#151515",
        neutral04: "#3C3C3C",
        neutral03: "#8A8A8A",
        neutral02: "#D0D0D0",
        neutral01: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
