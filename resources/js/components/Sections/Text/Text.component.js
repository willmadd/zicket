import React from 'react';
import Image from '../../Image';

const Text = ({pageSection}) => {

    const {title, overlaySrc, background} = pageSection;
    // console.log(overlaySrc);

    const backgroundIsImage = !/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(background)

    return (
        <section className="min-h-screen">
            {/* {backgroundIsImage ? <img src={background} alt="hero"/>:<div className=""></div> } */}
            <h1>{title}</h1>
            <Image overlaySrc={overlaySrc} src={background} classNames="absolute w-full"/>
        </section>
    );
};

export default Text;