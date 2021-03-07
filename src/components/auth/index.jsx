import React, { useContext, useState } from "react";
import "./index.css";
import axios from "axios";
import { AuthContext } from "../../App";
import { useHistory } from "react-router";

const Auth = ({ auth }) => {
  let [active, setActive] = useState(auth ? "" : "right-panel-active");
  let [authData, setAuthData] = useState({});
  let { authCon, setAuthCon } = useContext(AuthContext);
  let history = useHistory();

  return (
    <div className="registerPage">
      <div className={`container ${active}`} id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <br />
            <input
              onChange={(e) => {
                setAuthData({ ...authData, firstName: e.target.value });
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => {
                setAuthData({ ...authData, lastName: e.target.value });
              }}
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) => {
                setAuthData({ ...authData, email: e.target.value });
              }}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setAuthData({ ...authData, password: e.target.value });
              }}
              type="password"
              placeholder="Password"
            />
            <input
              onChange={(e) => {
                setAuthData({ ...authData, linkedIn: e.target.value });
              }}
              type="text"
              placeholder="Linked In"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post("http://localhost:8080/api/v1/auth/signup", authData)
                  .then((res) => {
                    console.log(res.data);
                    if (
                      res.data.msg ==
                      "User registerd successfully but not verified"
                    ) {
                      setAuthCon();
                      history.push("/verify");
                    }
                  });
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>{active ? "Create Account" : "Sign in"}</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="sign-in"
                onClick={() => {
                  setActive("");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  setActive("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
