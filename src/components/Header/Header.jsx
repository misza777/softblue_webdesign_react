import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./header.scss";

const Header = ({ formRef }) => {
  const handleScroll = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Navbar
        expand="md"
        variant="dark"
        className="header-bcg px-sm-3 px-md-4 px-lg-4 px-xl-5 px-xxl-5"
      >
        {/* /softblue_webdesign_react */}
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
        {/* softblue_webdesign_react */}
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link
                active={true}
                className="mx-md-1 mx-lg-2 my-link"
                aria-current="page"
                to="/"
              >
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services">
              <Nav.Link className="mx-md-1 mx-lg-2 my-link" to="/services">
                Services
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link className="mx-md-1 mx-lg-2 my-link" to="/experience">
                Experience
              </Nav.Link>
            </LinkContainer>

            <Button className="btn-my-primary px-3" onClick={handleScroll}>
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
