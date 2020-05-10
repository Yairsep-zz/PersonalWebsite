import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Subscribe(){

    const [status , setStatus] = useState("not subscribed!")

    function subscribe() {
        setStatus("Subscribed!")
    }
    function Unsubscribe() {
        setStatus("Unsubscribed!")
    }

    return <div className="subscribe">
        <h1>Subscribe</h1>
        <h3>You are {status}</h3><br/>
        <Button onClick={subscribe}>Subscribe now!</Button><br/><br/>
        <Button onClick={Unsubscribe} >Unsubscribe now!</Button>
    </div>
}

export default Subscribe;