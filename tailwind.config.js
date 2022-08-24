/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,scss}", "./src/global-styles/styles.scss"],
  theme: {
    extend: {
      fontFamily: {
        prim: ["Jost", "sans-serif"],
      },
      colors: {
        bgClr: "#444",
        bgClr: "#f7f8fd",
        darkBlue: "#4661E6",
        darkBlueHover: "#7C91F9",
        mediumBlue: "#CFD7FF",
        lightBlue: "#f0f2ff",
        darkGreyBlue: "#3A4374",
        darkGreyBlueHover: "#656EA3",
        lightGrey: "#8C92B3",
        mediumGrey: "#647196",
        darkGrey: "#373f68",
        redHover: "#E98888",
        primaryBtn: "#ad1fea",
        primaryBtnHover: "#C75AF6",
        plannedClr: "#f49f85",
        inProgressClr: "#ad1fea",
        liveClr: "#62bcfa",
        suggestionClr: "#1feaad",
      },
      screens: {
        maxmd: { max: "767px" },
        maxxs: { max: "578px" },
        md: "767px",
        xs: "578px",
      },
    },
  },
  plugins: [],
};
