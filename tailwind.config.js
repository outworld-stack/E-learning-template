/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        'backGround-Dark': '#050004',
        'backGround-White': '#FFF5FB',
        'textMain' : '#FF73A6',
      },
      fontFamily: {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaBold" : "Morabba Bold",
        "MarcellusScRegular" : "MarcellusSc Regular",
        "RamblaBold" : "Rambla Bold"
      },
      container: {
        center:true,
        padding: {
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
        }
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *');
      addVariant('child-hover' , '& > *:hover');
      addVariant('child-active' , '& > *:active');
    }
  ],
}