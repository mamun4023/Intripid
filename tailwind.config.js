/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      screens: {
         mobile: 360,
         tablet: 768,
         laptop: 1280,
         desktop: 1440,
         lageDesktop: 2560,
      },
      extend: {
         fontFamily: {
            readex_600: ["readex-600"],
            sans_400: ["jakarta_sans-400"],
            sans_500: ["jakarta_sans-500"],
         },
      },
      colors: {
         primary: "#F47F22",
         white: "#fff",
         dark: "#31374A",
      },
   },
   plugins: [],
};
