/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          soft: "rgb(var(--surface-soft) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--text-primary) / <alpha-value>)",
          foreground: "rgb(var(--background) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--text-secondary) / <alpha-value>)",
          foreground: "rgb(var(--text-primary) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--text-muted) / <alpha-value>)",
          foreground: "rgb(var(--text-secondary) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scaleIn: 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
