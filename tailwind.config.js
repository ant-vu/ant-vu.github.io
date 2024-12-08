/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'Arial', 'sans-serif'],
                Outfit: ['Outfit', 'Arial', 'sans-serif'],
                DMMono: ['DM Mono', 'monospace'],
            },
            colors: {
                'da_green':'#BFF47B',
            },
        },
    },
    plugins: [],
}