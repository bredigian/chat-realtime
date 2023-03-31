/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      width: {
        fit: "fit-content",
        "4/5": "80%",
        full: "100%",
      },
      height: {
        mid: "50vh",
        80: "82.5vh",
        full: "100vh",
        screen: "100%",
        loader: "400px",
      },
      maxWidth: {
        form: "400px",
        message: "200px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    textColor: {
      primary: "#C4C4D4",
      secondary: "#272635",
      input: "#C4C4D460",
    },
    placeholderColor: {
      primary: "#C4C4D460",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "2rem",
      "3xl": "3rem",
    },
    borderColor: {
      transparent: "transparent",
      primary: "#C4C4D4",
      input: "#C4C4D4",
    },
    backgroundColor: {
      transparent: "transparent",
      primary: "#272635",
      secondary: "#46455F",
    },
  },
  plugins: [],
}
