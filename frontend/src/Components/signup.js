import React from 'react';
import "../Styles/login.css";
import Design from './design';


function Signup() {
    return (
        <div id="Signup">
            <Design/>
                <form id="login_form">
                    <h1>Logo</h1>
                    <h4>Create New Account</h4>
                    <input placeholder='Username' />
                    <br />
                    <input placeholder='Mail Id' />
                    <br />
                    <input placeholder='Password' />
                    <br />
                    <input placeholder='Confirm Password' />
                    <br />
                    <button id="login_but">Signup</button>
                    <br />
                </form>
        </div>
    )
}

export default Signup;