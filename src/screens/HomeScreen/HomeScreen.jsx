import React from "react";
import Comments from "../../components/Comments/Comments";
import "./home.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Experience from "../../components/Experience/Experience";
import Hero from '../../components/Hero/Hero'

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Experience />
      <Comments />
    </>
  );
};

export default HomeScreen;
