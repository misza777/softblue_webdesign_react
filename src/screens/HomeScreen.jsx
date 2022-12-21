import React from "react";
import Comments from "../components/Comments/Comments";
import Form from "../components/Form/Form";

const HomeScreen = () => {
  return (
    <div className="clr-bcg-primary">
      <div>HomeScreen</div>
      <Comments />
      <Form />
    </div>
  );
};

export default HomeScreen;
