/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A3E615',
        'primary-dark': '#8BC811',
        dark: '#09090B',
        surface: '#18181B',
        elevated: '#27272A',
        'text-main': '#FAFAFA',
        'text-muted': '#A1A1AA',
        success: '#22C55E',
      },
      fontFamily: { inter: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
