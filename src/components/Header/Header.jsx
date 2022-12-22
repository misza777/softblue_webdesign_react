import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="px-lg-4">
      <Container>
        <Nav.Link to="/">
          <Navbar.Brand className="navbar_brand pe-xs-2">
            <img
              alt="company logo"
              src="images/logo.jpg"
              // width="30"
              // height="30"
              className="d-inline-block"
            />
          </Navbar.Brand>

        </Nav.Link>
          <Navbar.Toggle className="" aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="clr-primary">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3 my-link" to="/home">
              Home
            </Nav.Link>

            <Nav.Link className="mx-3 my-link" to="/services">
              Link
            </Nav.Link>

            <Nav.Link className="mx-3 my-link" to="/experience">
              Experience
            </Nav.Link>

            <Button className="btn-my-primary px-4 ml-3">Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
