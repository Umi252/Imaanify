// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-up-delay-150': 'fade-in-up 1s ease-out 0.15s forwards',
        'fade-in-up-delay-300': 'fade-in-up 1s ease-out 0.3s forwards',
        'fade-in-up-delay-450': 'fade-in-up 1s ease-out 0.45s forwards',
      },
      backgroundImage: {
        'custom-background': "url('/src/assets/aboutus.jpg')",
      }
      
    },
  },
  plugins: [],
};
