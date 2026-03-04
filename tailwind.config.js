/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        encarta: {
          yellow: '#F5D000',
          'yellow-light': '#FFF176',
          orange: '#F5A623',
          'orange-dark': '#E65100',
          green: '#7CB342',
          'green-dark': '#558B2F',
          lime: '#C0D944',
          'text-dark': '#333333',
          'text-light': '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka One', 'cursive'],
      },
      borderRadius: {
        'encarta': '16px',
      },
      boxShadow: {
        'encarta': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'encarta-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'encarta-gradient': 'linear-gradient(180deg, #F5D000 0%, #F5A623 100%)',
        'encarta-gradient-radial': 'radial-gradient(circle at center, #F5D000 0%, #F5A623 70%, #E65100 100%)',
      },
    },
  },
  plugins: [],
}
