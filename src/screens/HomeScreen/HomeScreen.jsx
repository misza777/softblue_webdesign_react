import React from "react";
import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";

const HomeScreen = () => {
  return (
    <div className="m-lg-5">
      <div>HomeScreen</div>
      <img src="images/model.png"/>
      <Comments />
      <Form />
    </div>
  );
};

export default HomeScreen;
