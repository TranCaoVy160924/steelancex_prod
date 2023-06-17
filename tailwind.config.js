/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-cus-bt': '#FF1ED1',
        'pink-cus-bg': '#ffddf8',
        'pink-cus-tx': '#FF99EA',
        'gray-cus': '9D9D9D',
        'blue-cus': '#572760'
      },
      borderRadius: {
        '15': '15px',
        '50': '50px'
      },
      spacing: {
        '128': '32rem',
        'cus-1': '62rem',
        'cus-2': '50rem',
        'cus-3': '31rem',
        'cus-4': '34rem'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        greyqo: ['GreyQo-Regular', 'sans-serif'],
        poppin: ['Poppins-Medium', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
