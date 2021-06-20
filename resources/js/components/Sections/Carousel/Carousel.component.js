import React, { useRef } from "react";
import Slider from "react-slick";
import splitTitle from "../../../utils/splitTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Image from "../../Image";
import Button from "../../Button";

const Carousel = ({ pageSection }) => {

    const slider = useRef(null);

    const { slides, title, ctaTitle, ctaButtonText, ctaButtonLink } = pageSection;

    const [head, tail] = splitTitle(title);

    const [ctaHead, ctaTail] = splitTitle(ctaTitle);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <section className="bg-gradient-to-r from-purple-1 to-blue-2 -rotate-12 relative pt-36">
            <div className="absolute bg-white transform rotate-12 w-110 h-56 -top-109px -left-14 z-20"></div>
            <div>
                <h2 className="uppercase w-350px mx-auto">
                    <span className="text-transparent white-outline">
                        {head}
                    </span>{" "}
                    <span className="text-white">{tail}</span>
                </h2>
                <button onClick={() => slider?.current?.slickPrev()}>
                    {'<'}
                </button>
                <button onClick={() => slider?.current?.slickNext()}>
                {'>'}
                </button>
            </div>

            <Slider ref={slider} {...settings}>
                {slides.map((slide) => {
                    const { image, link, title, text } = slide;
                    return (
                        <Link key={image} to={link}>
                            <div key={image}>
                                <h5>{title}</h5>
                                <Image src={image} />
                                <h4>{text}</h4>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
            <h2 className="uppercase w-350px mx-auto">
                    <span className="text-transparent white-outline">
                        {ctaHead}
                    </span>{" "}
                    <span className="text-white">{ctaTail}</span>
                </h2>
                <Button to={ctaButtonLink} label={ctaButtonText}/>
        </section>
    );
};

export default Carousel;
