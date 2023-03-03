import React from "react";
import "../Styles/login.css";
import Design from "./Design";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conf_password, setconf_password] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("conf_password", conf_password);

    formData.forEach((val, key) => {
      console.log(val, key);
    });

    const res = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();
    console.log(response);
    setmessage(response.message);
    setstatus(response.status);
    console.log(message);

    setTimeout(() => {
      if (status == "Success") {
        setmessage("");
        navigate("/");
      } else {
        setmessage("");
        setemail("");
        setusername("");
        setpassword("");
        setconf_password("");
      }
    }, 3000);
  };

  return (
    <div id="login">
      <Design />
      <form id="login_form">
        <h1>Logo</h1>
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

        <input
          className="signup-input"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <input
          className="signup-input"
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => {
            setconf_password(e.target.value);
          }}
        />

        <button className="btn login-btn" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;

