import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Form,
  FloatingLabel,
  Button,
  Pagination,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import CommentItems from "./CommentItems/CommentItems";
import "./comments.scss";
import axios from "axios";

const Comments = forwardRef((props, formRef) => {
  // comments state
  const [allComments, setAllComments] = useState([]);
  //form state
  const [commentSent, setCommentSent] = useState(false);
  //form toast state
  const [show, setShow] = useState(false);
  //form validation state
  const [validated, setValidated] = useState(false);

  //form refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const URLcomments = `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments`;

  // good practice to cancel axios request
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    const fetchComments = async () => {
      await axios
        .get(URLcomments, { cancelToken: cancelToken.token })
        .then((res) => {
          const sortedComments = res.data.reverse();
          setAllComments(sortedComments);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };
    //fetchig data
    fetchComments();
  }, [commentSent]);

  const submitHandler = async (e) => {
    //form validation
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (form.checkValidity() === true) {
      e.preventDefault();
      setValidated(false);

      const newComment = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        content: contentRef.current.value,
      };

      try {
        const response = await axios.post(URLcomments, newComment);
        if (response.status === 201) {
          setCommentSent(true);
          setShow(true);
        }
      } catch (error) {
        console.log(error);
      }

      //clear form
      e.target.reset();
    }
  };

  return (
    <>
      <CommentItems data={allComments} />
      <div className="container-form-bcg pb-2 position-relative">
        <Container>
          <Col xs={6}>
            <ToastContainer className="p-" position="top-center">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <img
                    src="/images/react.svg"
                    className="rounded me-auto"
                    alt="react app"
                  />
                </Toast.Header>
                <Toast.Body className="text-center bcg-secondary">
                  Thank You for your comment!
                  <br />
                  Your comment is now visible.
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Row className="justify-content-md-center py-2 ">
            <Col xs={12} md={5}>
              <h3 className="form-title">Add comment</h3>
              <Form
                onSubmit={submitHandler}
                noValidate
                validated={validated}
                ref={formRef}
              >
                <Row className="mt-4">
                  <Col>
                    <Form.Group controlId="validationCustomName">
                      <FloatingLabel label="Your Name">
                        <Form.Control
                          required
                          size="sm"
                          type="text"
                          aria-label="your name"
                          placeholder="Your Name"
                          ref={nameRef}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your name.
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="validationCustomEmail">
                      <FloatingLabel label="Your Email">
                        <Form.Control
                          required
                          type="email"
                          aria-label="your email"
                          placeholder="Your Email"
                          ref={emailRef}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your email.
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  className="mt-3"
                  controlId="validationCustomMessage"
                >
                  <FloatingLabel label="Your Message">
                    <Form.Control
                      required
                      as="textarea"
                      aria-label="your message"
                      placeholder="Your Message"
                      style={{ height: "100px" }}
                      ref={contentRef}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your Message.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button className="mt-3 btn-my-primary px-4" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
});

export default Comments;
