/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      colors: {
        emtechBlue: '#1165F6',
        emtechSecondary: '#00215B',
        emtechThird: '#25C7D9',
        gradientStart: '#1165F6',
        gradientEnd: '#25C7D9',
      },
      backgroundImage: {
        'blur-gradient': 'linear-gradient(135deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.1) 50%, rgba(18, 18, 18, 0.2) 100%)',
      },
    },
  },
  plugins: [],
}
