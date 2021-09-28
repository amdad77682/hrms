// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    customForms: (theme) => ({
      default: {
        select: {
          borderRadius: theme("borderRadius.none"),
          borderColor: theme("colors.gray.400"),
          fontSize: theme("fontSize.sm"),
        },
        input: {
          borderRadius: theme("borderRadius.none"),
          borderColor: theme("colors.gray.400"),
          fontSize: theme("fontSize.sm"),
        },
      },
    }),
    extend: {
      screens: {
        xs: { max: "639px" },
        "mx-md": { max: "768px" }, // => @media (max-width: 767px) { ... }

        "mx-lg": { max: "1023px" }, // => @media (max-width: 1023px) { ... }

        "mx-xl": { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },

    colors: {
      ...colors,
      sideBarbg: "#0C1D32",
      sideBarItemhoverbg: "#1F2F42",
      primary: "#25262b",
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.2xl") },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") },
      });
    },
  ],
};
