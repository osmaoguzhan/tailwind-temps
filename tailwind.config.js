/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        cyanLight: "hsl(180, 66%, 69%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(220, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        darkViolet: "hsl(257, 27%, 26%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
