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
                primaryDark: "#E46B0B",
                secondary: "#E0E0E0",
                secondaryDark: "#9E9E9E",
                info: "#8B58DF",
                infoDark: "#925DE8",
                white: "#FFFFFF",
                dark: "#31374A",
                warning: "#FF5E67",
            },
            screens: {
                mobile: "360px",
                tablet: "768px",
                laptop: "1280px",
                desktop: "1552px",
            },
        },
    },
    plugins: [],
}
