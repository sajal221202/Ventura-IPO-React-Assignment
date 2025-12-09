export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#6EE7B7'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        card: '1.5rem'
      },
      keyframes: {
        softPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(16,185,129,0.4)'
          },
          '50%': {
            transform: 'scale(1.02)',
            boxShadow: '0 0 0 14px rgba(16,185,129,0)'
          }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        softPulse: 'softPulse 2.4s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.4s ease-out both'
      }
    }
  },
  plugins: []
};


