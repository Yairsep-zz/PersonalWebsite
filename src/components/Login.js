import React from 'react';
import Input from "./input"
import {Button} from "react-bootstrap";

function Login(){
    return <div className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="text" placeholder="Password"/>
        <Button type="submit">Login</Button>
        </div>
}

export default Login;