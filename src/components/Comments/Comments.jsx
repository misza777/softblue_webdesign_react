import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Form,
  FloatingLabel,
  Button,
  Pagination,
  Container,
} from "react-bootstrap";
import CommentItems from "./CommentItems/CommentItems";
import "./comments.scss";
import axios from "axios";

const Comments = forwardRef((props, formRef) => {
  // comments state
  const [allComments, setAllComments] = useState([]);
  //form state
  const [commentSent, setCommentSent] = useState(false);

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
    e.preventDefault();

    const newComment = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      content: contentRef.current.value,
    };

    try {
      const response = await axios.post(URLcomments, newComment);
      if (response.status === 201) {
        alert("Comment added!");
        setCommentSent(true);
      }
    } catch (error) {
      console.log(error);
    }

    //clear form
    e.target.reset();
  };

  return (
    <>
    <CommentItems data={allComments} />
      <div className="container-form-bcg pb-2">
        <Container>
          <Row className="justify-content-md-center py-4">
            <Col xs={12} md={5}>
              <h3 className="form-title">Add comment</h3>
              <Form onSubmit={submitHandler} ref={formRef}>
                <Row className="mt-4">
                  <Col>
                    <Form.Group controlId="Your name">
                      <FloatingLabel label="Your Name">
                        <Form.Control
                          size="sm"
                          type="text"
                          aria-label="your name"
                          placeholder="Your Name"
                          ref={nameRef}
                        ></Form.Control>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="Email">
                      <FloatingLabel label="Your Email">
                        <Form.Control
                          type="email"
                          aria-label="your email"
                          placeholder="Your Email"
                          ref={emailRef}
                        ></Form.Control>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mt-3" controlId="Your Messages">
                  <FloatingLabel label="Your Messages">
                    <Form.Control
                      as="textarea"
                      aria-label="your message"
                      placeholder="Your Messages"
                      style={{ height: "100px" }}
                      ref={contentRef}
                    ></Form.Control>
                  </FloatingLabel>
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
