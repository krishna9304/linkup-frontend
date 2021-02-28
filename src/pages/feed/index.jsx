import React from "react";
import Card from "../../components/card";
import NavBar from "../../components/navBar";
import "./index.css";

const Feed = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Card />
      </div>
    </div>
  );
};

export default Feed;
