/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        150: "170px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        650: "650px",
        646: "646px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "48px",
        150: "148px",
        225: "225px",
        322: "322px",
        340: "340px",
        370: "370px",
        420: "420px",
        575: "575px",
        600: "600px",
        650: "650px",
        685: "685px",
        774: "774px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        firstcolor: "#E8DDF2",
        lineColor: "#CFD8DC",
        cartNumBg: "#e80013",
        NumBg: "rgba(175, 175, 175, 0.12)",
        textColor:"#393939",
        primary: "#2F1C40",
        cardOverlay: "#2FB087",
        lighttextGray: "#9ca0ab",
        card: "rgba(0, 0, 0, 0.5)",
        cartBg: "#222539",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        ourmission:"#279371"
      },
    },
  },
  plugins: [
  
  ],
};
