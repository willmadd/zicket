import React, { useRef } from "react";
import Slider from "react-slick";
import splitTitle from "../../utils/splitTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Image from "../Image";
import Button from "../Button";
import PropTypes from "prop-types";

const Carousel = ({ pageSection }) => {
    const slider = useRef(null);

    const {
        slides,
        title,
        text,
        ctaTitle,
        ctaButtonText,
        ctaButtonLink,
        ctaText,
    } = pageSection;

    const [head, tail] = splitTitle(title);

    const [ctaHead, ctaTail] = splitTitle(ctaTitle);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section className="linear-grad relative">
            <div className="w-0 h-0 border-solid border-tri"></div>
            <div className="grid grid-cols-2">
                <div className="w-355px ml-18vw mb-14">
                    <h2 className="uppercase mb-5">
                        <span className="text-transparent white-outline">
                            {head}
                        </span>{" "}
                        <span className="text-white">{tail}</span>
                    </h2>
                    <p className="text-white  mr-24">{text}</p>
                </div>
                <div className="w-355px mx-auto">
                    <div className="flex justify-center items-center h-full">
                        <button
                            className="mx-1 focus:outline-none w-14 h-14 border-white-opaque border-2 border-solid rounded-full flex justify-center items-center"
                            onClick={() => slider?.current?.slickPrev()}
                        >
                            <div className="bg-white-opaque rounded-full w-12 h-12 flex justify-center items-center">
                                <div className="w-3 h-3 border-white border border-l-0 border-t-0 border-white-full transform rotate-135"></div>
                            </div>
                        </button>
                        <button
                            className="mx-1 focus:outline-none w-14 h-14 border-white-opaque border-2 border-solid rounded-full flex justify-center items-center"
                            onClick={() => slider?.current?.slickNext()}
                        >
                            <div className="bg-white-opaque rounded-full w-12 h-12 flex justify-center items-center">
                                <div className="w-3 h-3 border-white border border-l-0 border-t-0 border-white-full transform -rotate-45"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-screen overflow-hidden p-6 ml-12vw">
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
            </div>
            <div className="flex justify-center items-center flex-col pb-20">
                <h2 className="uppercase mx-auto mt-14 w-fit-content mb-4">
                    <span className="text-transparent white-outline capitalize">
                        {ctaHead}
                    </span>{" "}
                    <span className="text-white capitalize">{ctaTail}</span>
                </h2>
                <p className="text-white mb-4 max-w-xs text-center">{ctaText}</p>
                <Button to={ctaButtonLink} label={ctaButtonText} />
            </div>
        </section>
    );
};

export default Carousel;

Carousel.propTypes = {
    pageSection: PropTypes.shape({
        slides: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        ctaTitle: PropTypes.string.isRequired,
        ctaButtonText: PropTypes.string.isRequired,
        ctaButtonLink: PropTypes.string.isRequired,
        ctaText: PropTypes.string.isRequired,
    }),
};
