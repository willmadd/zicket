import React from 'react';
import ContentSection from '../ContentSection';

const Text = ({pageSection,index}) => {
    const {sections, title, text} = pageSection;
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            {sections.map(section=><ContentSection key={section.title} section={section}/>)}
        </div>
    );
};

export default Text;