import React from "react";
import "./hero.scss";
import { Container, Row, Col } from "react-bootstrap";

const Hero = ({ formRef }) => {
  console.log(formRef);

  const handleScroll = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bcg-home">
        <Container>
          <div
            className="
          px-xs-1
          px-sm-3
          px-md-3 
          px-xl-5 
          px-xxl-5 
          home-container"
          >
            <Row>
              <Col sm={12} md={7} lg={7} xl={7} xxl={7} className="hero-text">
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
                  <button className="btn btn-my-primary px-3">Read More</button>
                  <button
                    className="btn btn-my-secondary mx-3 px-3"
                    onClick={handleScroll}
                  >
                    Contact Us
                  </button>
                </div>
                <img
                  src="images/Shape_waves_1.svg"
                  alt="decoration"
                  className="wave-decoration"
                />
              </Col>
              <Col
                sm={12}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className="d-none d-md-block d-lg-block object-fit-contain"
              >
                <img
                  src="images/heroFoto.png"
                  className="hero-img"
                  alt="man smiling and looking in the bright future"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
