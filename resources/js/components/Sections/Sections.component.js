import React from "react";
import splitTitle from "../../utils/splitTitle";
import InfoCard from "../InfoCard";
import PropTypes from "prop-types";

const Sections = ({ pageSection }) => {
    const { sections, title, text } = pageSection;

    const [head, tail] = splitTitle(title);
   
    return (
        <div className="max-w-page mx-auto py-32">
            <div className="grid grid-cols-2">
                <h2 className="uppercase w-350px mx-auto"><span className="text-transparent blue-outline">{head}</span> <span className="text-blue-2">{tail}</span></h2>
                <p className="w-350px mx-auto">{text}</p>
            </div>
            {sections.map((section, i) => (
                <InfoCard key={section.title} section={section} i={i}/>
            ))}
        </div>
    );
};

export default Sections;

Sections.propTypes={
    pageSection: PropTypes.shape({
        sections: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}