// import React from "react";
// import { useState, useRef } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FloatingLabel,
// } from "react-bootstrap";
// import axios from "axios";
// import "./form.scss";

// const MessageForm = () => {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const contentRef = useRef(null);

//   const url = "https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments";

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const newComment = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//       content: contentRef.current.value,
//     };

//     try {
//       const response = await axios.post(url, newComment);
//       console.log(response);
//       if (response.status === 201) {
//         alert("Comment added");
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     //clear form
//     e.target.reset();
//   };

//   return (
//     <div className="container-form-bcg">
//       <Container>
//         <Row className="justify-content-md-center py-5">
//           <Col xs={12} md={6}>
//             <h3 className="form-title mb-4">Add comment</h3>
//             <Form onSubmit={submitHandler}>
//               <Row className="mt-5">
//                 <Col>
//                   <Form.Group controlId="Your name">
//                     <FloatingLabel label="Your Name">
//                       <Form.Control
//                         size="sm"
//                         type="text"
//                         aria-label="your name"
//                         placeholder="Your Name"
//                         ref={nameRef}
//                       ></Form.Control>
//                     </FloatingLabel>
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group controlId="Email">
//                     <FloatingLabel label="Your Email">
//                       <Form.Control
//                         type="email"
//                         aria-label="your email"
//                         placeholder="Your Email"
//                         ref={emailRef}
//                       ></Form.Control>
//                     </FloatingLabel>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mt-4" controlId="Your Messages">
//                 <FloatingLabel label="Your Messages">
//                   <Form.Control
//                     as="textarea"
//                     aria-label="your message"
//                     placeholder="Your Messages"
//                     style={{ height: "100px" }}
//                     ref={contentRef}
//                   ></Form.Control>
//                 </FloatingLabel>
//               </Form.Group>
//               <Button className="mt-4 btn-my-primary px-5" type="submit">
//                 Send
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default MessageForm;
