module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08182F", // Dark blue background
        secondary: "#00A3FF", // Neon electric blue
        accent: "#E5E5E5", // White/Gray for contrast
      },
    },
  },

  plugins: [],
}
