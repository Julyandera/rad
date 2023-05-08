/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                book: ["var(--font-gentiumBookPlus)"],
                mono: ["var(--font-ibmPlexMono)"],
            },
            screens: {
                lg: "1025px", // => @media (min-width: 1025px) { ... }
            },
            colors: {
                "primary-black": "#0e1012",
                "primary-gray": "#E6E6E6",
                "secondary-gray": "#F0F0F0",
                "primary-sand": "#E2DCC9",
            },
        },
    },
    plugins: [],
};
