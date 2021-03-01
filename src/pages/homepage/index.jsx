import React from "react";
import "./index.css";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div>
        <Link className="login" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="mainText">
        Welcome to&nbsp;
        <span className="heroLogo">Link</span>
        <span className="heroLogoUp">Up</span>
      </div>
      <div className="description">A modern way to groww connections</div>
      <div className="newHere">
        New Here?
        <Link className="signup" to="/signup">
          Register Now
        </Link>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <Hero />
    </div>
  );
};

export default Homepage;
