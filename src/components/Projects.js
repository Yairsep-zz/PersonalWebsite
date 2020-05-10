import React from 'react';
import {ProjectsDetails} from "./ProjectsDetails"
import Card from "./Card";

function Projects(){
    return <div>
        <h1 className={"h1"}>Projects</h1>
        <br/><br/>
        {ProjectsDetails.map(projectItem => (
            <Card key={projectItem.key} name={projectItem.name} details={projectItem.details}/>))}
    </div>
}

export default Projects;