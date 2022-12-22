import React from "react";
import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import "./home.scss";

const HomeScreen = () => {
  return (
    <>
      <div className="m-lg-2 home-container">
        <img
          src="images/hero.png"
          className="hero-img"
          alt="man smiling and looking in the bright future"
        />

        <div className="hero-text">
          <p>Hello!</p>
          <h1 className="hero-text_title">I am HRS Pathan </h1>
          <h1 className="hero-text-title">Creative UI/UX Designer</h1>
          <ol>
            <li>UI/UX designer</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>Front-end Design</li>
          </ol>
          <div className="hero-text-btns">
            <button className="btn btn-my-primary">Read More</button>
            <button className="btn btn-my-secondary">Contact Us</button>
            </div>
        </div>
      </div>
      <Comments />
      <Form />
    </>
  );
};

export default HomeScreen;
