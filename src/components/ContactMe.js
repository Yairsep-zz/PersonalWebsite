import React from 'react';
import Login from "./Login"

var isLoggedIn = false;

function ContactMe(){
    return <div>
        <h1>Contact Me</h1>
    <div className="container">{
        isLoggedIn ?  <h1>Hello</h1> : <Login/>
    }</div>
    </div>
}

export default ContactMe;