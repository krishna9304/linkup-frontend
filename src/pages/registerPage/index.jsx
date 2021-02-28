import React from "react";
import Logo from "../../components/logo";
import "./index.css";

const RegisterPage = () => {
  return (
    <div className="registerpage">
      <div className="register-card">
        <h1>Register Here</h1>
        <br />
        <input
          className="register-inp"
          type="text"
          name=""
          placeholder="First Name"
          id=""
        />
        <br />
        <input
          className="register-inp"
          type="text"
          name=""
          placeholder="Last Name"
          id=""
        />
        <br />
        <input
          className="register-inp"
          type="text"
          name=""
          placeholder="Email"
          id=""
        />
        <br />
        <input
          className="register-inp"
          type="text"
          name=""
          placeholder="Password"
          id=""
        />
        <br />
        <input
          className="register-inp"
          type="text"
          name=""
          placeholder="Confirm Password"
          id=""
        />
        <br />
        <div className="btn">Register</div>
      </div>
    </div>
  );
};

export default RegisterPage;
