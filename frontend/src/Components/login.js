import React from 'react';
import "../Styles/login.css";
import { Link } from 'react-router-dom';
import Design from './design';


function Login () {
    return(
        <div id="login">
            <Design/>
                <form id="login_form">
                    <h1>Logo</h1>
                    <h4>Enter your credentials to access your account</h4>
                    <input placeholder='User Id' />
                    <br />
                    <input placeholder='Password' />
                    <br/>
                    <Link to="/test"><button id="login_but">Login</button></Link>
                    <br/>
                    <Link to="/signup"><button>Signup</button></Link>
                </form>
        </div>
    )
}

export default Login;