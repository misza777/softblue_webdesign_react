import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "./form.scss";

const MessageForm = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="container-form-bcg">
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col xs={12} md={6}>
            <h3 className="form-title mb-4">Add comment</h3>
            <Form onSubmit={submitHandler}>
            <Row className="mt-5">
            <Col>
              <Form.Group  controlId="name">
                <Form.Control
                  type="text"
                  aria-label="your name"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  aria-label="your email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            </Row>

              <Form.Group className="mt-4" controlId="comment">
                <Form.Control
                  as="textarea"
                  rows="3"
                  aria-label="your message"
                  placeholder="Your Messages"
                  onChange={(e) => setComment(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button className="mt-4 btn-my-primary px-5" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessageForm;
