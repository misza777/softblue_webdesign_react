import React, { forwardRef } from "react";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import ServicesDesc from "../../components/ServicesDesc/ServicesDesc";

const ServicesScreen = forwardRef((props, formRef) => {
  return (
    <>
      <Hero formRef={formRef} />
      <ServicesDesc />
      <Comments ref={formRef} />
    </>
  );
});

export default ServicesScreen;
