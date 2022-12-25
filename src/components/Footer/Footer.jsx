import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <Row className="footer">
      <Col className="text-center py-3">
        Copyright &copy; <a  target="_blank" href="https://misza777.github.io/portfolio_webpack_sass/">Mishiko</a> {" "}
        2022 - All Rights Reserved.
      </Col>
    </Row>
  );
};

export default Footer;
