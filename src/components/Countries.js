import React from 'react';

const countries = [
    {
        id: 1,
        name: "Vietnam",
        story: "I have been travelling in vietnam for 1 month"
    },
    {
        id: 2,
        name: "California",
        story: "I have visited my brother after travelling in South America"
    }
]

function createCard(country){
    return <div>
        <h3>{country.name}</h3>
        <h4>{country.story}</h4>
    </div>
}

export {countries,createCard};