import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Form,
  FloatingLabel,
  Button,
  Pagination,
  Container,
} from "react-bootstrap";
// import Paginate from "../components/Paginate";
import "./comments.scss";
import axios from "axios";

const Comments = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [commentSent, setCommentSent] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const [comments, setComments] = useState([
    {
      name: "",
      email: "",
      content: "",
      createdAt: "",
      id: "",
    },
  ]);

  //form refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  //fetching data from mockapi
  const URLpage = `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments?page=${page}&limit=${limit}`;

  const URLcomments = `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments`;

  // good practice to cancel axios request
  const cancelToken1 = axios.CancelToken.source();
  const cancelToken2 = axios.CancelToken.source();

  useEffect(() => {
    const fetchComments = async () => {
      //zapytanie o pierwsza strone
      await axios
        .get(URLpage, { cancelToken: cancelToken1.token })
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });

      //zapytanie o wszystkie komentarze po to by policzyc ile jest stron
      await axios
        .get(URLcomments, { cancelToken: cancelToken2.token })
        .then((res) => {
          setAllComments(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchComments();
  }, [page, commentSent]);

  //pagination
  let active = page;
  let items = [];
  let totalPages = Math.ceil(allComments.length / 10);
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <Pagination.Item
        className="pagination__item"
        key={i}
        active={i === active}
        onClick={() => setPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  const handleNavClick = (e) => {
    if (e.target.innerText === "oldest") {
      page > 1 ? setPage((prevpage) => prevpage - 1) : null;
    } else if (e.target.innerText === "newest") {
      page < totalPages ? setPage((prevpage) => prevpage + 1) : null;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newComment = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      content: contentRef.current.value,
    };

    try {
      const response = await axios.post(URLcomments, newComment);
      console.log(response);
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
      <div className="comments-container">
        <Container>
          <Col md={6} className="mx-auto py-4">
            <div className="d-flex justify-content-between">
              <h2 className="text-center mb-5">Comments</h2>
              <p>
                <span className="comments-nav" onClick={handleNavClick}>
                  oldest
                </span>{" "}
                |{" "}
                <span className="comments-nav" onClick={handleNavClick}>
                  newest
                </span>
              </p>
            </div>
            <div className="comments">
              {comments.map((comment) => (
                <div key={crypto.randomUUID()} className="comment pb-3">
                  <div className="comment__content">
                    <div className="comment__content-dat pb-2">
                      {comment.date}
                    </div>
                    <div className="comment__content_title d-flex justify-content-start g-2 pb-2">
                      <h3 className="comment__content-name ">{comment.name}</h3>
                      <h3 className="comment__content-email px-3">
                        {comment.email}
                      </h3>
                    </div>
                    <p className="comment__content-text">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination className="mt-5">{items}</Pagination>
          </Col>
        </Container>
      </div>
      <div className="container-form-bcg">
        <Container>
          <Row className="justify-content-md-center py-5">
            <Col xs={12} md={6}>
              <h3 className="form-title mb-4">Add comment</h3>
              <Form onSubmit={submitHandler}>
                <Row className="mt-5">
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

                <Form.Group className="mt-4" controlId="Your Messages">
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
                <Button className="mt-4 btn-my-primary px-5" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Comments;
