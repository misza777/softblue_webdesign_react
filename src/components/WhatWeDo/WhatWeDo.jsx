import React, { useState, useEffect } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { BsHeadset, BsHeart, BsLaptop } from "react-icons/bs";
import axios from "axios";
import "./what.scss";

const WhatWeDo = () => {
  const [services, setServices] = useState([
    {
      id: "",
      name: "",
      description: "",
    },
  ]);

  const fetchURL =
    "https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/services";
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    const fetchServices = async () => {
      await axios
        .get(fetchURL, { cancelToken: cancelToken.token })
        .then((res) => {
          const response = res.data;
          if (response.length > 0) {
            const icons = [<BsLaptop />, <BsHeart />, <BsHeadset />];
            const responseWithIcons = response.map((service) => {
              return {
                ...service,
                icon: icons[service.id - 1],
              };
            });
            setServices(responseWithIcons);
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchServices();
  }, []);

  return (
    <div className="container-what-bcg ">
      <Container className="">
        <Col
          className="

          py-sm-3
          py-md-4
          py-xl-5
          pb-xl-3
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

          <Row xs={1} md={3} className="g-2 px-xl-4">
            {services.map((s) => (
              <Col className="mt-xs-4" key={s.id}>
                <Card className="card">
                  <div className="icon-container">
                    <div className="icon">{s.icon}</div>
                  </div>
                  <Card.Body>
                    <Card.Title className="card-title text-uppercase">
                      {s.name}
                    </Card.Title>
                    <Card.Text className="card-text">{s.description}</Card.Text>
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
