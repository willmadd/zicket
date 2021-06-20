import React from "react";
import Image from "../Image";
import Button from "../Button";
import RouteId from '../../routes/routeMap';

const Hero = ({ pageSection }) => {

    const { title, overlaySrc, background, text, buttonText } = pageSection;

    return (
        <section className="min-h-screen relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-738px text-center">
                <h1 className="uppercase text-transparent font-heading white-outline mb-5">{title}</h1>
                <p className="text-white mb-8">{text}</p>
                <Button to={RouteId.getStarted} label={buttonText} bgCol={'pink-1'}/>
            </div>
            <Image
                overlaySrc={overlaySrc}
                src={background}
                classNames="absolute w-full min-h-screen object-cover h-full"
            />
        </section>
    );
};

export default Hero;
