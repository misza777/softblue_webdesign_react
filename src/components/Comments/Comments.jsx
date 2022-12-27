import React, { useState, useEffect } from "react";
import { Col, Pagination, Container } from "react-bootstrap";
// import Paginate from "../components/Paginate";
import "./comments.scss";
import axios from "axios";

const Comments = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
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

  console.log(`page: ${page}, limit: ${limit}`);

  //fetching data from mockapi
  const fetchURLpage = `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments?page=${page}&limit=${limit}`;

  const fetchURLall = `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments`;

  // good practice to cancel axios request
  const cancelToken1 = axios.CancelToken.source();
  const cancelToken2 = axios.CancelToken.source();
  // console.log(cancelToken1);
  // console.log(cancelToken2);

  useEffect(() => {
    const fetchComments = async () => {
      //zapytanie o pierwsza strone
      await axios
        .get(fetchURLpage, { cancelToken: cancelToken1.token })
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
        .get(fetchURLall, { cancelToken: cancelToken2.token })
        .then((res) => {
          setAllComments(res.data);
          setTotalPages(Math.ceil(allComments.length / 10));
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchComments();
  }, [page]);

  //pagination
  let active = page;
  let items = [];
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
      page <= totalPages ? setPage((prevpage) => prevpage + 1) : null;
    }
  };

  return (
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
  );
};

export default Comments;
