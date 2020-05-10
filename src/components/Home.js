import React from 'react';
import Greeting from "./date";
const name = "Yair Sepunaru"
const date = new Date();
const year = date.getFullYear();

function Home(){
    return <div>
        <h1 className={"h1"}>Welcome to {`${name}`} Website</h1>
        <Greeting />
        <br/><br/>
        <br/>
        <h6 className={"copyright"}>Copyright {year}</h6>
    </div>
}

export default Home;