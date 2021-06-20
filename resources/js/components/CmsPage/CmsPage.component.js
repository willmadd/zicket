import React from "react";
import Sections from "../Sections/Sections";
import Carousel from "../Sections/Carousel";
import Newsletter from "../Sections/Newsletter";
import Hero from "../Sections/Hero";
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

    return (
        <div className="flex flex-col">
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
        </div>
    );
};

export default CmsPage;

CmsPage.propTypes = {
  cmsPage: PropTypes.array.isRequired,
};
