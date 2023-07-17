/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "Open Sans, sans-serif",
        "source-sans-pro": "Source Sans Pro, sans-serif",
      },
    },
  },
};
