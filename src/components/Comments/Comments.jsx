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
import ReactPaginate from "react-paginate";
import "./comments.scss";
import axios from "axios";
import moment from "moment";

const Comments = forwardRef((props, formRef) => {
  // comments state
  const [allComments, setAllComments] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

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

    //pagination
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(allComments.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allComments.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, commentSent]);

  //pagination
  //     <Pagination.Item
  //       className="pagination__item"

  const handleNavClick = (e) => {
    if (e.target.innerText === "oldest") {
      page > 1 ? setPage((prevpage) => prevpage - 1) : null;
    } else if (e.target.innerText === "newest") {
      page < totalPages ? setPage((prevpage) => prevpage + 1) : null;
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allComments.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
          <Col
            md={5}
            className="mx-auto py-sm-3
          py-md-4
          py-xl-4"
          >
            <div className="d-flex justify-content-between">
              <h2 className="text-center mb-4">Comments</h2>
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
              {currentItems?.map((comment) => (
                <div key={crypto.randomUUID()} className="comment pb-3">
                  <div className="comment__content">
                    <div className="comment__content-date pb-1">
                      {moment(comment.createdAt).format("MMM DD, YYYY")}
                    </div>
                    <div className="comment__content_title d-flex justify-content-start g-2 pb-1">
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
            {/* <Pagination className="mt-3">{items}</Pagination> */}
            <ReactPaginate
              pageClassName="page-item"
              pageLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="last-items"
              previousLabel="<<<"
              previousClassName="d-none"
              previousLinkClassName="page-link"
              nextLabel=">>>"
              nextClassName="d-none"
              nextLinkClassName="page-link"
              onPageChange={handlePageClick}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              activeClassName="active"
            />
          </Col>
        </Container>
      </div>
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
