import React from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";
import Design from "./Design";

function Login() {
  return (
    <div id="login">
      <Design />
      <form id="login_form">
        <h1>Logo</h1>
        <h4>Enter your credentials to access your account</h4>
        <input className="signup-input" placeholder="User Id" />
        <input className="signup-input" placeholder="Password" />
        <Link to="/test">
          <button className="btn login-btn" id="login_but">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn signup-btn">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
