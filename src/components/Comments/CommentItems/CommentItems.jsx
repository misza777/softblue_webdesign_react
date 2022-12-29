import React, { useEffect, useState } from "react";
import { Col, Pagination, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import moment from "moment";
import "./commnetItems.scss";

const CommentItems = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handleNavClick = (e) => {
    if (e.target.innerText === "oldest") {
      setItemOffset(data.length - 5);
    } else if (e.target.innerText === "newest") {
        setItemOffset(0);
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
    </>
  );
};

export default CommentItems;
