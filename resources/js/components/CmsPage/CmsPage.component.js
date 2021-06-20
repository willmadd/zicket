import React from "react";
import Sections from "../Sections";
import Carousel from "../Carousel";
import Newsletter from "../Newsletter";
import Hero from "../Hero";
import PropTypes from "prop-types";

const CmsPage = ({ cmsPage }) => {
    const TYPE = {
        NEWSLETTER: "newsletter",
        CAROUSEL: "carousel",
        SECTIONS: "sections",
        HERO: "hero",
    };

    const typeMap = {
        [TYPE.NEWSLETTER]: Newsletter,
        [TYPE.SECTIONS]: Sections,
        [TYPE.CAROUSEL]: Carousel,
        [TYPE.HERO]: Hero,
    };

// this component loops thorugh the data received by the API call, and determines which component 
// to display each data in
    return (
        <main className="flex flex-col">
            {cmsPage.map((pageSection, i) => {
                const { type } = pageSection;
                const SectionComponent = typeMap[type];
                return (
                    <SectionComponent
                        key={pageSection.name}
                        pageSection={pageSection}
                        index={i}
                    />
                );
            })}
        </main>
    );
};

export default CmsPage;

CmsPage.propTypes = {
  cmsPage: PropTypes.array.isRequired,
};
