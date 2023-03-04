import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import Design from "./Design";
import logo from "../Assets/logo.png";
import load from "../Assets/load.gif";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Fill all fields");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    const res = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();
    setMessage(response.message);
    if (response.token) {
      sessionStorage.setItem("token", response.token);
      setEmail("");
      setPassword("");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        if (sessionStorage.getItem("token")) {
          setMessage("");
          navigate("/contact");
        } else {
          setMessage("");
        }
      }, 2000);
    }
  }, [message]);

  return (
    <>
      {loading ? (
        <div className="loading-div">
          <img src={load} className="loading" />
        </div>
      ) : null}
      {message ? (
        <div className="popup-main">
          <span className="popup-body">
            <span className="popup-msg">{message}</span>
            <button
              className="popup-btn"
              onClick={() => {
                if (sessionStorage.getItem("token")) {
                  setMessage("");
                  navigate("/contact");
                } else {
                  setMessage("");
                }
              }}
            >
              OK
            </button>
          </span>
        </div>
      ) : null}

      <div id="login">
        <Design />
        <form id="login_form">
          <img src={logo} className="logo" alt="logo" />
          <h4>Enter your credentials to access your account</h4>

          <input
            className="signup-input"
            placeholder="Email Id"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <span className="pass">
            <input
              className="signup-input"
              placeholder="Password"
              type={show ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {show ? (
              <AiFillEye className="show-btn" onClick={() => setShow(false)} />
            ) : (
              <AiFillEyeInvisible
                className="show-btn"
                onClick={() => setShow(true)}
              />
            )}
          </span>

          <button
            className="btn login-btn"
            id="login_but"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className="btn" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
