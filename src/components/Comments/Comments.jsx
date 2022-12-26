import React, { useState, useEffect } from "react";
import { Col, Pagination, Container } from "react-bootstrap";
import "./comments.scss";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      name: "",
      email: "",
      content: "",
      createdAt: "",
      id: "",
    },
  ]);
  //fetching data from mockapi
  const fetchURL =
    "https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments";

  // good practice to cancel axios request
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    const fetchComments = async () => {
      await axios
        .get(fetchURL, { cancelToken: cancelToken.token })
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchComments();
  }, []);

  //pagination
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        className="pagination__item"
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="comments-container">
      <Container>
        <Col md={6} className="mx-auto py-4">
          <div className="d-flex justify-content-between">
            <h2 className="text-center mb-5">Comments</h2>
            <p>oldest | newest</p>
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
  );
};

export default Comments;
