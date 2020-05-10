import React from 'react';
import Input from "./input"
import {Button} from "react-bootstrap";

function Login(){
    return <contactform className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="text" placeholder="Password"/>
        <Button type="submit">Login</Button>
        </contactform>
}

export default Login;