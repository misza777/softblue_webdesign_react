import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar_brand">
          <img
            alt="logo"
            src="images/logo.jpg"
            // width="30"
            // height="30"
            className="d-inline-block"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
