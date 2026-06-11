/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark-blue "Out of the Blue" palette — mirrored in src/index.css.
        navy: '#0A1B30', // page background (deep navy)
        navyAlt: '#0E2440', // alternating section background
        panel: '#13294B', // cards / surfaces
        line: '#1E3A5F', // borders / dividers
        blue: '#3B9EE5', // primary accent / buttons
        azure: '#74BBEE', // links / hover
        glow: '#9BD3FF', // highlights / focus rings
        light: '#E8F0F8', // primary text
        muted: '#9DB2C9', // secondary text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '10px',
        '2xl': '14px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
