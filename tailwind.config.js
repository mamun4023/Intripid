/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            readex_600: "readexPro",
            sans_400: "PlusJakartaSans-400",
            sans_500: "PlusJakartaSans-500",
         },
         colors: {
            primary: "#F47F22",
            white: "#fff",
            text: "#31374A",
         },
         screens: {
            mobile: "360",
            tablet: "768",
            laptop: "1280",
            desktop: "1552",
         },
      },
   },
   plugins: [],
};
