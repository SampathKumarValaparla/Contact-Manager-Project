import React from "react";
import "../Styles/Login.css";
import Design from "./Design";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import load from "../Assets/load.gif";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conf_password, setconf_password] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password || !username || !conf_password) {
      setMessage("Fill all fields");
      return;
    }

    if (password.length < 6) {
      setMessage("Password should be more than 5 charecters");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("conf_password", conf_password);

    formData.forEach((val, key) => {});

    const res = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();
    setMessage(response.message);
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        if (message === "User Successfully Registerd") {
          setMessage("");
          navigate("/");
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
                if (message === "User Successfully Registerd") {
                  setMessage("");
                  navigate("/");
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
          <h4>Create New Account</h4>

          <input
            className="signup-input"
            placeholder="Username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <input
            className="signup-input"
            placeholder="Mail Id"
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <span className="pass">
            <input
              className="signup-input"
              placeholder="Password"
              type={show ? "text" : "password"}
              onChange={(e) => {
                setpassword(e.target.value);
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

            <input
              className="signup-input"
              placeholder="Confirm Password"
              type={showconf ? "text" : "password"}
              onChange={(e) => {
                setconf_password(e.target.value);
              }}
            />

          <button className="btn login-btn" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
