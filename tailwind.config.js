/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      content: {
        link: 'url("/src/Images/arrow.svg")',
      },

      fontFamily: {
        barwlow: ["Barlow", "sans-serif"],
        "cst-clash-semibold": ["ClashDisplay-Semibold"],
        "cst-clash-extralight": ["ClashDisplay-Extralight"],
        "cst-clash-light": ["ClashDisplay-Light"],
        "cst-clash-regular": ["ClashDisplay-Regular"],
        "cst-clash-medium": ["ClashDisplay-Medium"],
        "cst-clash-bold": ["ClashDisplay-Bold"],

        montserrat: ["Montserrat", "sans"],
        "cst-montserrat-regular": ["Montserrat", "sans-serif", "400"],
        "cst-montserrat-semibold": ["Montserrat", "sans-serif", "600"],
        "cst-montserrat-bold": ["Montserrat", "sans-serif", "700"],
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "860px",
        // => @media (min-width: 768px) { ... }

        semiLarge: "900px",

        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }

        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }

        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },

      backgroundImage: {
        "hero-pattern": "url('/src/Images/Desktop_/heroman.png')",
        winnercups: "url('/src/Images/Desktop_/world star.png')",
      },
      // backgroundImage: {
      //   'hero-pattern': "url('Images/Desktop_/man-wearing-smart-glasses-touching-virtual-screen 1.png)",
      //   'footer-texture': "url('../src/img/footer-texture.png')",
      // },
      //  colors djhd
      colors: {
        ' vibrant pink': "#FF26B9",
        'saturated purple': "#D434FE",
        'cst-body-color': "rgb(21,14,40)",
  
      },

      font: {
        "clash-display": "ClashDisplay-Semibold",
      },

      gridTemplateColumns: {
        "desktop-grid": "1fr repeat(10, minmax(min-content, 7.875rem)) 1fr", // Custom 12-column grid
        "custom-3": "repeat(3, minmax(0, 7.875))",
      },
    },
  },
  plugins: [],
};
