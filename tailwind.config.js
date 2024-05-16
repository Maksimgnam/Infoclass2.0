/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "header": '10vh',
        "pages": '90vh',
        "news": '70vh',
        "loader": '95vh',
        '1px': '3px',
        'navigation': '100vh',
        "image":'75%',
        "slider-image":"86%"

      },
      minWidth: {
        "news-card": "37%",
        'home-text': '40%'
      },
      minHeight: {
        'home-card': '95%',
        'home-text': '105%',
        "footer": '25vh',
        "lessons-card": "40%",
        "gallery": "92vh"



      },
      maxWidth: {
        'home-text': '45%',
        'home-images': '50%',
        'home-card': '90%',
        'news-card': "40%"

      },
      backgroundColor: {
        "navigation": "#333"
      },
      textColor:{
        "green":"#61F5C6"
      },
      boxShadow:{
        input: "0 0 3px #ccc"
      }
      



    },
  },
  plugins: [],
}

