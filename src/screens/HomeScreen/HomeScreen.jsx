import React, {  forwardRef } from "react";
import Comments from "../../components/Comments/Comments";
import "./home.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";

const HomeScreen = forwardRef((props, formRef) => {

  return (
    <>
      <Hero formRef={formRef} />
      <WhatWeDo />
      <Experience />
      <Comments ref={formRef} />
    </>
  );
});

export default HomeScreen;
