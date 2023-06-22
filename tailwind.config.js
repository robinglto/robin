/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
