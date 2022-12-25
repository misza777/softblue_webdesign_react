import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar
      expand="md"
      variant="dark"
      className="header-bcg px-sm-2 px-lg-5"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar_brand pe-xs-2">
            <img
              alt="company logo"
              src="images/new_logo.png"
              // width="30"
              // height="30"
              className="d-inline-block"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="clr-primary">
          <Nav className="ms-auto">
            <LinkContainer to="/" active>
              <Nav.Link
                active
                className="mx-3 my-link"
                aria-current="page"
                to="/home"
              >
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services">
              <Nav.Link className="mx-3 my-link" to="/services">
                Services
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link className="mx-3 my-link" to="/experience">
                Experience
              </Nav.Link>
            </LinkContainer>

            <Button className="btn-my-primary px-4 ml-3">Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
