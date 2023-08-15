/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-black': '0px 6px 8px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'dark-gray': '#1A1A1A',
        'text-color': '#E5E5E5',
        fg: '#F2F2F2',
        fc: '#A0A0A0',
      },
      fontSize: {
        sub: '0.8125rem',
      },
    },
  },
  plugins: [],
};
