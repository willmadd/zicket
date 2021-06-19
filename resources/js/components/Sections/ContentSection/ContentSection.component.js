import  Button  from '../../Button';
import React from 'react';
import Image from '../../Image';

const ContentSection = ({section}) => {
    const {title, content, overlaySrc, img} = section;
    return (
        <div className="grid grid-cols-2">
            <Image src={img} overlaySrc={overlaySrc} className=""/>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                {/* <Button /> */}
            </div>
        </div>
    );
};

export default ContentSection;