module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FE6441',
        secondary: '#6DBFB3',
        tertiary: '#7A7A78',
        dark: "#0f172a"
      },
      screens: {
        '2xl': '1320px'
      }
    },
    
  },
  plugins: [],
}
