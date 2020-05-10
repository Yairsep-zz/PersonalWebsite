import React from 'react';

function Greeting() {
    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    const greetingStyle = {
        color: ""
    }
    if (currentTime < 12){
        greeting = "Good Morning!"
        greetingStyle.color = "red"
    }
    else if (currentTime < 18){
        greeting = "Good Afternoon!"
        greetingStyle.color = "blue"
    }
    else {
        greeting = "Good Evening!"
        greetingStyle.color = "grey"
    }

    return <h3>{greeting}</h3>
}

export default Greeting;