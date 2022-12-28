import React from "react";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import ServicesDesc from "../../components/ServicesDesc/ServicesDesc";

const ServicesScreen = () => {
  return (
    <>
      <Hero />
      <ServicesDesc />
      <Comments
      //  ref={formRef}
      />
    </>
  );
};

export default ServicesScreen;
