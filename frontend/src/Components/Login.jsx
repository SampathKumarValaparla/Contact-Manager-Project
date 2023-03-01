import React from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import Design from "./Design";

function Login() {
  const navigate = useNavigate();

  function dologin() {}

  return (
    <div id="login">
      <Design />
      <form id="login_form">
        <h1 className="login-heading">Logo</h1>
        <h4>Enter your credentials to access your account</h4>
        <input className="signup-input" placeholder="Email Id" />
        <input className="signup-input" placeholder="Password" />
        <button className="btn login-btn" onClick={dologin}>
          Login
        </button>
        <button className="btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
