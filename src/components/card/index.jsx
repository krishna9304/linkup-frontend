import React from "react";
import ReactCardCarousel from "react-card-carousel";
import "./index.css";

const User = () => {
  return (
    <div>
      <div class="card">
        <div class="imgBx">
          <img
            src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="images"
          />
        </div>
        <div class="details">
          <h2>
            SomeOne Famous
            <br />
            <span>Director</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "82vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
      }}
    >
      <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
        <div>
          <User />
        </div>
        <div>
          <User />
        </div>
        <div>
          <User />
        </div>
        <div>
          <User />
        </div>
        <div>
          <User />
        </div>
      </ReactCardCarousel>
    </div>
  );
};

export default Card;
