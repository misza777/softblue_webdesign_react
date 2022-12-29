import React, { forwardRef } from "react";
import Hero from "../../components/Hero/Hero";
import ExperienceDesc from "../../components/ExperienceDesc/ExperienceDesc";
import Comments from "../../components/Comments/Comments";

const Experience = forwardRef((props, formRef) => {
  return (
    <>
      <Hero formRef={formRef} />
      <ExperienceDesc />
      <Comments ref={formRef} />
    </>
  );
});

export default Experience;
