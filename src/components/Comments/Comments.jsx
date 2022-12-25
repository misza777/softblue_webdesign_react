import React from "react";
import { Col, Pagination, Container } from "react-bootstrap";
import "./comments.scss";

const Comments = () => {
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

  const comments = [
    {
      id: 1,
      name: "John Doe",
      date: "Jun 13, 2017",
      email: "jon@example.com",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptates quas voluptatibus quibusdam quidem nesciunt.",
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "Jun 13, 2017",
      email: "jane@example.com",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptates quas voluptatibus quibusdam quidem nesciunt.",
    },
    {
      id: 3,
      name: "Misha Doe",
      date: "Jun 13, 2017",
      email: "misza@example.com",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptates quas voluptatibus quibusdam quidem nesciunt.",
    },
  ];

  return (
    <div className="comments-container">
      <Container>
        <Col md={7} className="mx-auto p-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="text-center mb-5">Comments</h2>
            <div>oldest | newest</div>
          </div>
          {comments.map((comment) => (
            <div className="comments pb-5">
              <div className="comment">
                <div className="comment__content">
                  <div className="comment__content-date">{comment.date}</div>
                  <div className="d-inline-flex">
                    <h3 className="comment__content-name">{comment.name}</h3>{" "}
                    <h3 className="comment__content-email">{comment.email}</h3>
                  </div>
                  <p className="comment__content-text">{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
          <Pagination className="mt-5">{items}</Pagination>
        </Col>
      </Container>
    </div>
  );
};

export default Comments;
