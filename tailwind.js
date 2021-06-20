module.exports = {
    purge: ["./resources/js/components/**/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                "-109px": "-109px",
                "12vw": "12vw",
                "18vw": "18vw",
            },
            fontFamily: {
                head: ["montserratbold, sans-serif"],
                body: ["open_sanslight, sans-serif"],
            },
            fontSize: {
                h1: ["70px", { lineHeight: "60px" }],
                h2: ["50px", { lineHeight: "50px" }],
                h3: ["26px", { lineHeight: "26px" }],
                h4: ["18px"],
                h5: ["14px", { letterSpacing: "4px" }],
                p: ["16px", { lineHeight: "30px" }],
            },
            width: {
                "57px": "57px",
                "738px": "738px",
                "350px": "350px",
                "355px": "355px",
                110: "110%",
                "fit-content":"fit-content"
            },
            maxWidth: {
                page: "1194px",
                "738px": "738px",
                "240px":"240px"
            },
            minWidth: {
                button: "57px",
            },
            minHeight: {
                button: "57px",
            },
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(var(--gradient-color-stops))",
            },
            rotate: {
                135: "135deg",
            },
            colors: {
                body: "#5A6488",
                blue: {
                    1: "#200D6F",
                    2: "#3B8EF9",
                    3: "#2A4789",
                },
                purple: {
                    1: "#7F3FD1",
                },
                pink: {
                    1: "#f93b84",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-gradients")],
};
