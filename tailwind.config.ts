import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bege:{
          100: '#E7D9CF'
        },
        branco:{
          100: '#FFF9F5'
        },
        marrom:{
          100: '#8C6F5B'
        },
        laranja:{
          100: '#ed7f32'
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slideInLogo": {
          '0%': { transform: 'translateX(100%) translateY(20%)', opacity: '0' }, 
          '100%': { transform: 'translateX(60%) translateY(20%)', opacity: '1' },
        },
        "slideInLogoBig": {
          '0%': { transform: 'translateX(250%) translateY(20%)', opacity: '0' }, 
          '100%': { transform: 'translateX(90%) translateY(20%)', opacity: '1' },
        },
        "slideInText": {
          '0%': { transform: 'translateX(100%) translateY(20%)', opacity: '0' }, 
          '100%': { transform: 'translateX(5%) translateY(20%)', opacity: '1' }, 
        },
        "slideInBT": {
          '0%': { transform: 'translateX(100%) translateY(100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(20%) translateY(100%)', opacity: '1' }, 
        },
      },
      fontFamily: {
        'jose' : ['Josefin Sans', 'sans-serif'],
        'century': ['Century Gothic', 'sans-serif']
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideInLogo": 'slideInLogo 1s ease-out forwards',
        "slideInLogoBig": 'slideInLogoBig 1s ease-out forwards',
        "slideInText": 'slideInText 1s ease-out forwards',
        "slideInBT": 'slideInBT 1s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config