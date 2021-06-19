import Button from "../../Button";
import React from "react";
import Image from "../../Image";

const ContentSection = ({ section, i }) => {
    const { title, text, overlaySrc, img, imgLeft, buttonLink, buttonText } = section;
    return (
        <section className="grid grid-cols-2">
            <div className={`${imgLeft ? `order-1` : `order-2`}`}>
                <Image src={img} overlaySrc={overlaySrc} />
            </div>
            <div className={`${imgLeft ? `order-2` : `order-1`} flex flex-col justify-center`}>
                <div className="relative w-350px h-24 left-1/2 transform -translate-x-1/2">
                    <span className="absolute text-6xl opacity-10 font-head text-blue-2">
                        {`${i + 1}`.padStart(2, "0")}
                    </span>
                    <h3 className="absolute top-8 text-blue-3">{title}</h3>
                </div>
                <div className="w-350px mx-auto">
                <p>{text}</p>
                <Button to={buttonLink}/>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
