module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        paddingTop: '4rem',
      },
      colors:{
        'Navy-blue': 'hsl(240, 76%, 5%)',
        'color--luminous-vivid-amber': '#fcb900',
        'd': '#ffcc00',
        'mypurple': '#330325',
        'd-light': '#fbf3c4' 
      },
      fontFamily:{
        "poppins-Regular": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "outfit-ExtraBold": ['Outfit-ExtraBold'],
        "inter-Bold": ['inter-Bold'],
        "inter-Medium'": ['inter-Medium']
      },
    },
  },
  plugins: [],
}
