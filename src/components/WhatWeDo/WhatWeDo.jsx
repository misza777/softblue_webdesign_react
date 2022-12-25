import React from "react";
import { Col, Button, Row, Card, Container } from "react-bootstrap";
import { BsHeadset, BsHeart, BsLaptop } from "react-icons/bs";
import "./what.scss";

const WhatWeDo = () => {
  const cardsInfo = [
    {
      id: 1,
      title: "FULLY RESPONSIVE",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      icon: <BsLaptop />,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      icon: <BsHeart />,
    },
    {
      id: 3,
      title: "24/7 Support",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      icon: <BsHeadset />,
    },
  ];

  return (
    <div className="container-what-bcg">
      <Container>
        <Col
          className="
    px-md-5 
    text-center"
        >
          <h3 className="text-uppercase clr-secondary">What we do</h3>
          <h2>Better Services For You</h2>
          <p className="description p-md-4 p-lg-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has
          </p>

          <Row xs={1} md={3} className="g-3 px-xl-4">
            {cardsInfo.map((c, idx) => (
              <Col className="mt-xs-4" key={idx}>
                <Card className="card">
                  {/* <Card.Img variant="top" src={c.image} /> */}
                  <div className="icon-container">
                    <div className="icon">{c.icon}</div>
                  </div>
                  <Card.Body>
                    <Card.Title className="card-title">{c.title}</Card.Title>
                    <Card.Text className="card-text">{c.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default WhatWeDo;