import React from "react";
import Auth from "../../components/auth";
import Logo from "../../components/logo";
import "./index.css";

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
    </div>
  );
};

const AuthPage = ({ auth }) => {
  return (
    <div className="authPage">
      <div>
        <Nav />
      </div>
      <br />
      <div className="authCard">
        <Auth auth={auth} />
      </div>
    </div>
  );
};

export default AuthPage;
