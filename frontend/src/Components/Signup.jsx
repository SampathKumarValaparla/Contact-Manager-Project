import React from "react";
import Design from "./Design";

function Signup() {
  return (
    <div id="login">
      <Design />
      <form id="login_form">
        <h1 className="login-heading">Logo</h1>
        <h4>Create New Account</h4>
        <input className="signup-input" placeholder="Username" />
        <input className="signup-input" placeholder="Mail Id" />
        <input className="signup-input" placeholder="Password" />
        <input className="signup-input" placeholder="Confirm Password" />
        <button className="btn login-btn">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
