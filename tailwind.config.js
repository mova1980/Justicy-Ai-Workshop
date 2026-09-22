/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'persian-blue': {
          50:  '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0055FF',
          600: '#0044CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        'persian-navy': {
          50:  '#f2f5f9',
          100: '#d4e0ed',
          200: '#a8c1db',
          300: '#7ca2c9',
          400: '#5083b7',
          500: '#2464a5',
          600: '#1d5084',
          700: '#163c63',
          800: '#0f2842',
          900: '#081421',
        },
        'gold-accent': {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans:  ['Modam', 'IRANSansX', 'IRANSans', 'Vazirmatn', 'Plus Jakarta Sans', 'sans-serif'],
        latin: ['Plus Jakarta Sans', 'Vazirmatn', 'sans-serif'],
      },
      animation: {
        'earth-spin': 'earth-spin 120s linear infinite',
        gradient: 'gradient 15s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'earth-spin': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
