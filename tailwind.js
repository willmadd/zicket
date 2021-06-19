module.exports = {
    purge: ["./resources/js/components/**/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
            fontFamily: {
                head: ["Montserrat, sans-serif"],
                body: ["Open Sans, sans-serif"],
            },
            fontSize: {
                h1: ["70px", { lineHeight: "60px" }],
                h2: ["50px", { lineHeight: "50px" }],
                h3: ["26px", { lineHeight: "26px" }],
                p: ["16px", { lineHeight: "30px" }],
            },
            width: {
                "57px":"57px",
                "738px": "738px",
                "350px":"350px"
            },
            maxWidth:{
              page:'1194px'
            },
            minWidth:{
              button: '57px'
            },
            minHeight:{
              button: '57px'
            },
            colors:{
              body:'#5A6488',
              blue:{
                '2':'#3B8EF9',
                '3':'#2A4789'
              },
              purple:{
                '1':'#7F3FD1',
              }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
