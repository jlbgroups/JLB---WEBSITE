/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1F3D2B',
        sage:   '#6E8F7B',
        accent: '#3FA26E',
        gold:   '#C8A96A',
        bg:     '#F7F8F6',
        card:   '#FFFFFF',
        border: '#E6E8E6',
        textPrimary:   '#1A1A1A',
        textSecondary: '#6B6F6C',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
