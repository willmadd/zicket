export const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
