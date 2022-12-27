import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar expand="md" variant="dark" className="header-bcg px-sm-2 px-lg-5">
      <Container>
        <LinkContainer to="/softblue_webdesign_react/">
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
            <LinkContainer to="softblue_webdesign_react/" active>
              <Nav.Link
                active
                className="mx-3 my-link"
                aria-current="page"
                to="softblue_webdesign_react/"
              >
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="softblue_webdesign_react/services">
              <Nav.Link className="mx-3 my-link" to="/services">
                Services
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="softblue_webdesign_react/experience">
              <Nav.Link
                className="mx-3 my-link"
                to="softblue_webdesign_react/experience"
              >
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
