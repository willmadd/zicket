import Button from "../Button";
import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";

const InfoCard = ({ section, i }) => {
    const { title, text, overlaySrc, img, imgLeft, buttonLink, buttonText } =
        section;
    return (
        <section className="grid grid-cols-2">
            <div className={`${imgLeft ? `order-1` : `order-2`}`}>
                <Image src={img} overlaySrc={overlaySrc} />
            </div>
            <div
                className={`${
                    imgLeft ? `order-2` : `order-1`
                } flex flex-col justify-center`}
            >
                <div className="relative w-350px h-24 left-1/2 transform -translate-x-1/2">
                    <span className="absolute text-6xl opacity-10 font-head text-blue-2">
                        {`${i + 1}`.padStart(2, "0")}
                    </span>
                    <h3 className="absolute top-8 text-blue-3">{title}</h3>
                </div>
                <div className="w-350px mx-auto">
                    <p>{text}</p>
                    <div className="flex justify-items-start items-center">
                        <h5 className="text-blue-2 tracking-wider">
                            {buttonText}
                        </h5>
                        <Button to={buttonLink} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;

InfoCard.propTypes = {
    i: PropTypes.number.isRequired,
    pageSection: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        overlaySrc: PropTypes.string,
        img: PropTypes.string.isRequired,
        imgLeft: PropTypes.bool.isRequired,
        buttonLink: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
    }),
};
