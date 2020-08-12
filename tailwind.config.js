const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 0%)",
        "navy-darker": "hsl(210, 50%, 9%)",
        "navy-dark": "hsl(210, 49%, 15%)",
        navy: "hsl(210, 47%, 19%)",
        "navy-light": "hsl(210, 22%, 48%)",
        "navy-lighter": "hsl(210, 22%, 77%)",
        white: "hsl(0, 0%, 100%)",

        "yellow-dark": "hsl(42, 100%, 36%)",
        yellow: "hsl(42, 97%, 66%)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
