import React from 'react';
import Map from "./WorldMap"
import {countries, createCard} from "./Countries";

function Travelling(){
    return <div>
        <br/><br/>
        <Map />
        {countries.map(createCard)}
    </div>
}

export default Travelling;