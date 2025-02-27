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
     
    },
    extend: {
      colors: {
        bege:{
          100: '#E7D9CF',
          500: '#C0A59A'
        },
        branco:{
          100: '#FFF9F5'
        },
        marrom:{
          100: '#8C6F5B',
          500: '#4D2B26'
        },
        laranja:{
          100: '#ed7f32',
          500: '#C79A69'
        },
        oliva:{
          500: '#C0B391'
        },
        rosa:{
          100: '#FFE6F7'
        }
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
          '0%': { transform: 'translateX(100%) translateY(10%)', opacity: '0' }, 
          '100%': { transform: 'translateX(60%) translateY(10%)', opacity: '1' },
        },
        "slideInLogoBig": {
          '0%': { transform: 'translateX(250%) translateY(20%)', opacity: '0' }, 
          '100%': { transform: 'translateX(150%) translateY(20%)', opacity: '1' },
        },
        "slideInText": {
          '0%': { transform: 'translateX(100%) ', opacity: '0' }, 
          '100%': { transform: 'translateX(10%) ', opacity: '1' }, 
        },
        "slideInBT": {
          '0%': { transform: 'translateX(100%) ', opacity: '0' }, 
          '100%': { transform: 'translateX(10%) ', opacity: '1' }, 
        },
        "slideInBTBig": {
          '0%': { transform: 'translateX(100%) translateY(100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(40%) translateY(100%)', opacity: '1' }, 
        },
      },
      fontFamily: {
        'jose' : ['Josefin Sans', 'sans-serif'],
        'century': ['Century Gothic', 'sans-serif'],
        'cocosharp' : ['CocoSharp Trial', 'sans-serif']
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideInLogo": 'slideInLogo 1.5s ease-out forwards',
        "slideInLogoBig": 'slideInLogoBig 1.5s ease-out forwards',
        "slideInText": 'slideInText 2s ease-out forwards',
        "slideInBT": 'slideInBT 2.5s ease-out forwards',
        "slideInBTBig": 'slideInBTBig 2.5s ease-out forwards',
      },
      screens: {
        "3xl": "2500px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")],
} satisfies Config

export default config