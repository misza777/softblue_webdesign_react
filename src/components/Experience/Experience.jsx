import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { BsHeadset, BsHeart, BsLaptop } from "react-icons/bs";
import "./experience.scss";
import { FaBehanceSquare, FaBasketballBall } from "react-icons/fa";

const Experience = () => {
  const cardExpInfo = [
    {
      id: 1,
      position: "Behancer",
      time: "January 2015 - August 2018",
      title: "Print & Web Designer",
      text: "There are many varations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      icon: <FaBehanceSquare />,
    },
    {
      id: 2,
      position: "Dribble",
      time: "January 2015 - August 2018",
      title: "UI/UX Designer & Front-end Developer",
      text: "There are many varations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      icon: <FaBasketballBall />,
    },
    {
      id: 3,
      position: "Themforest",
      time: "January 2015 - August 2018",
      title: "Web Designer & Developer",
      text: "There are many varations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      icon: <FaBehanceSquare />,
    },
    {
      id: 4,
      position: "Behancer",
      time: "January 2015 - August 2018",
      title: "Web Designer & Developer",
      text: "There are many varations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      icon: <FaBehanceSquare />,
    },
  ];
  return (
    <>
      <div className="container-exp-bcg">
        <Container>
          <Col
            className=" 
    px-md-5 
    text-center"
          >
            <h3 className="text-uppercase clr-secondary">Qualifications</h3>
            <h2>My Experience</h2>
            <p className="description py-md-4 py-lg-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has
            </p>
          </Col>
          <Row xs={1} md={2} className="g-4 px-xl-5">
            {cardExpInfo.map((card) => (
              <Col key={card.id}>
                <Card className="card-exp">
                  <Card.Header>
                    <div className="d-flex justify-content-start">
                      <div className="card-exp_icon">{card.icon}</div>
                      <div className="d-flex-column">
                        <h3 className="card-exp_position">{card.position}</h3>
                        <div className="exp-card-time text-muted ">
                          {card.time}
                        </div>
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Body className="card-body_text">
                    <Card.Title className="card-body_text">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="card-body_text">
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Experience;
