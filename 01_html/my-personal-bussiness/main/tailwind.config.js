module.exports = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 20%': { transform: 'translateX(0%)' },
          '25%, 45%': { transform: 'translateX(-100%)' },
          '50%, 70%': { transform: 'translateX(-200%)' },
          '75%, 95%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        'slide-slow': 'slide 10s infinite',
      }
    }
  }
}