/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light-blue "Out of the Blue" palette — mirrored in src/index.css as CSS variables.
        sky: '#E8F4FB', // page background / light sections
        powder: '#BDE3F5', // soft fills, cards
        blue: '#4FB3E8', // primary accent / buttons
        azure: '#2D8FD4', // primary hover / links
        deep: '#0F4C81', // headings / footer / contrast text
        ink: '#12263A', // body text
        cloud: '#F7FBFE', // subtle alt background
        glow: '#7FD0FF', // highlights, focus rings
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 76, 129, 0.18)',
        card: '0 8px 24px -10px rgba(15, 76, 129, 0.22)',
        glow: '0 0 0 4px rgba(127, 208, 255, 0.45)',
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(160deg, #F7FBFE 0%, #E8F4FB 38%, #BDE3F5 100%)',
        'hero-gradient': 'linear-gradient(165deg, #E8F4FB 0%, #BDE3F5 55%, #7FD0FF 120%)',
        'deep-gradient': 'linear-gradient(160deg, #0F4C81 0%, #12263A 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
