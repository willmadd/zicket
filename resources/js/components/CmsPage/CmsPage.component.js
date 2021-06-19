import React from "react";
import Text from "../Sections/Text";
import Sections from "../Sections/Sections";
import Carousel from "../Sections/Carousel";
import Newsletter from "../Sections/Newsletter";

const CmsPage = ({ cmsPage }) => {
    
  const TYPE = {
    TEXT: "text",
    NEWSLETTER: "newsletter",
    CAROUSEL: "carousel",
    SECTIONS: "sections",
  };

  const typeMap = {
    [TYPE.TEXT]: Text,
    [TYPE.NEWSLETTER]: Newsletter,
    [TYPE.SECTIONS]: Sections,
    [TYPE.CAROUSEL]: Carousel,
  };

  return (
    <div className="flex flex-col">
      {cmsPage.map((pageSection, i) => {
        const { type } = pageSection;
        const SectionComponent = typeMap[type];
        return <SectionComponent key={pageSection.name} pageSection={pageSection} index={i}/>
      })}
    </div>
  );
};

export default CmsPage;
