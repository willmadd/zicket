import React, { useState } from "react";

const Image = ({ overlaySrc, src, classNames }) => {
    
    //progressive loading image component. Inline base64 image is loaded instantly
    //and dispalyed while the fullsize image is fetched. Only when image is loaded
    //do the images swap out with a nice smooth transition

    const [imageHasLoaded, setImageHasLoaded] = useState(false);

    return (
        <div className="relative">
            {overlaySrc && (
                <img
                    src={overlaySrc}
                    className={` ${classNames} inset-0 filter blur-sm transition-opacity duration-250 ${
                        imageHasLoaded ? "opacity-0" : "opacity-100"
                    }`}
                    alt='overlay'
                    loading='lazy'
                />
            )}
            <img
                src={src}
                onLoad={() => setImageHasLoaded(true)}
                className={`${classNames} inset-0 filter transition-opacity duration-250 ${
                    imageHasLoaded ? "opacity-100" : "opacity-0"
                }`}
                alt='overlay'
                loading='lazy'
            />
        </div>
    );
};

export default Image;
