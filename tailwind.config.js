/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        wad: "url('/src/assets/womananddog.png')",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-in-out forwards',
        fadeDown: 'fadeDown 0.5s ease-in-out forwards',
      },
    },
  },

  plugins: [],
}
