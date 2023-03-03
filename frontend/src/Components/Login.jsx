import React from "react";
import "../Styles/login.css";
import { Link , useNavigate } from "react-router-dom";
import Design from "./Design";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();
  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const [message , setmessage] = useState("");
  const [token , settoken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append("email",email);
    formData.append("password",password);

    formData.forEach((val,key) => {
      console.log(val,key);
    })

    const res = await fetch('http://localhost:8080/user/login',
    {
      method : "POST",
      body : formData
    })

    const response = await res.json();
    console.log(response);

    if(response.token) {
      settoken(response.token);
      sessionStorage.setItem("token" , response.token )
    }

    setmessage(response.message);
    console.log(message);

    setTimeout( () =>{
      if(token){
        console.log(token);
        console.log(message);
        setmessage("");
        navigate("/contact");
      }
      else {
        setmessage("");
        setemail("");
        setpassword("");
      }
    },3000)
  }


  return (
    <div id="login">
      <Design />
      <form id="login_form">
        <h1>Logo</h1>
        <h4>Enter your credentials to access your account</h4>

        <input className="signup-input" placeholder="User Id" type='email' onChange={ (e) => {
          setemail(e.target.value)
        }} />

        <input className="signup-input" placeholder="Password" type='password' onChange={ (e) => {
          setpassword(e.target.value)
        }}/>

          <button className="btn login-btn" id="login_but" onClick={handleLogin}>
            Login
          </button>
        <Link to="/signup">
          <button className="btn signup-btn">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;

