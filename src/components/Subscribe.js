import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Subscribe(){

    const [status , setStatus] = useState("not subscribed!");
    const [isMousedOver ,setMouse] = useState(false);

    function subscribe() {
        setStatus("Subscribed!");
        console.log("subscribed");
    }
    function Unsubscribe() {
        setStatus("Unsubscribed!");
        console.log("Unsubscribed");
    }

    function handleMouseOver() {
        setMouse(true);
    }
    function handleMouseOut() {
        setMouse(false);
    }
    function handleChange(event) {
        console.log(event.target.value);
    }
    function handleSubmit(event) {

        event.preventDefault();
    }

    return <div className="subscribe">
        <h1>Subscribe</h1>
        <h3>You are {status}</h3><br/>
        <br/><br/>
        <Form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder={"Enter your full name:"} /><br/>
        <input onChange={handleChange} type="email" placeholder={"Enter your email"} /><br/>
        <input onChange={handleChange} type="tel" placeholder={"Enter your full phone number:"} /><br/><br/>
        <Button type={"submit"}>Submit</Button>
        <br/><br/><br/><br/>
        <Button onClick={subscribe}>Subscribe now!</Button><br/><br/>
        <Button
            style={{backgroundColor: isMousedOver ? "black" : "blue"}}
            onClick={Unsubscribe}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            Unsubscribe now!</Button>
        </Form>
    </div>
}

export default Subscribe;