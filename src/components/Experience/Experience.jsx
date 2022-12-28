import React, { useState, useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import "./experience.scss";
import { FaBehanceSquare, FaBasketballBall, FaReact } from "react-icons/fa";
import axios from "axios";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: "",
      company: "",
      description: "",
      form: "",
      to: "",
    },
  ]);

  const fetchURLexp =
    "https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/experience";
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    const fetchExperiences = async () => {
      await axios
        .get(fetchURLexp, { cancelToken: cancelToken.token })
        .then((res) => {
          const response = res.data;
          if (response.length > 0) {
            const icons = [<FaBehanceSquare />, <FaBasketballBall />];
            const responseWithIcons = response.map((exp) => {
              return {
                ...exp,
                icon:
                  exp.company === "Behancer" ? (
                    <FaBehanceSquare />
                  ) : exp.company === "Dribbble" ? (
                    <FaBasketballBall />
                  ) : (
                    <FaReact />
                  ),
              };
            });
            setExperiences(responseWithIcons);
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <div className="container-exp-bcg">
        <Container>
          <Col
            className=" 
            py-sm-3
          py-md-4
          py-xl-5
          pb-xl-3
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
          <Row xs={1} md={2} className="g-2 px-md-4 px-xl-5 px-xxl-5 pb-lg-4">
            {experiences.map((exp) => (
              <Col key={exp.id}>
                <Card className="card-exp">
                  <Card.Header>
                    <div className="d-flex justify-content-start">
                      <div className="card-exp_icon">{exp?.icon}</div>
                      <div className="d-flex-column">
                        <h3 className="card-exp_position">{exp.company}</h3>
                        <div className="exp-card-time text-muted ">
                          {exp.from} - {exp.to}
                        </div>
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Body className="card-body_text">
                    <Card.Title className="card-body_text">
                      Web Designer & Developer
                    </Card.Title>
                    <Card.Text className="card-body_text">
                      {exp.description}
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
