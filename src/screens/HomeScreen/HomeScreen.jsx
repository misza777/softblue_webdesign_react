import React from "react";
import { Container } from "react-bootstrap";
import Comments from "../../components/Comments/Comments";
import MessageForm from "../../components/MessageForm/MessageForm";
import "./home.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Experience from "../../components/Experience/Experience";

const HomeScreen = () => {
  return (
    <>
      <div className="bcg-home">
        <Container>
          <div className=" px-xl-4 home-container">
            <img
              src="images/hero.png"
              className="hero-img"
              alt="man smiling and looking in the bright future"
            />

            <div className="hero-text">
              <p>Hello!</p>
              <h1 className="hero-text_title">
                I am <span className="clr-secondary">HRS</span> Pathan
              </h1>
              <h1 className="hero-text-title">Creative UI/UX Designer</h1>
              <ol>
                <li>UI/UX designer</li>
                <li>Product Design</li>
                <li>Web Design</li>
                <li>Front-end Design</li>
              </ol>
              <div className="d-flex hero-text-btns">
                <button className="btn btn-my-primary px-4">Read More</button>
                <button className="btn btn-my-secondary mx-3 px-4">
                  Contact Us
                </button>
              </div>
            </div>
            <img
              src="images/Shape_waves_1.svg"
              alt="decoration"
              className="wave-decoration"
            />
          </div>
        </Container>
      </div>
      <WhatWeDo />
      <Experience />
      <Comments />
      <MessageForm />
    </>
  );
};

export default HomeScreen;
