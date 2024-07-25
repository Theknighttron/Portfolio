/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);'
            },
            keyframes: {
                typing: {
                    '0%': { width: '0%' },
                    '50%': { width: '100%' },
                    '100%': { width: '0%' }
                },
                blink: {
                    '0%': { borderColor: 'white' },
                    '50%': { borderColor: 'transparent' },
                    '100%': { borderColor: 'white' }
                }
            },
            animation: {
                typing: 'typing 8s steps(20) infinite, blink .8s step-end infinite'
            }
        },
    },
    plugins: [],
}
