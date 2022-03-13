module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      red: "#DB0722",
      pink: "#DB6E7C",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontSize: {
      xs: ["16px", { letterSpacing: "0.5px" }],
      sm: ["24px", { letterSpacing: "0.1px" }],
      md: ["32px", { letterSpacing: "0px" }],
      lg: ["40px", { letterSpacing: "-0.1px" }],
      xl: ["48px", { letterSpacing: "-0.5px" }],
      title: ["64px", { letterSpacing: "-1px" }],
    },
    fontWeight: {
      ultrathin: "100",
      thin: "200",
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
