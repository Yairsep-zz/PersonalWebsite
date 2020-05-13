import React from 'react';
import facebookLogo from '../images/facebookLogo.png'
import githubLogo from '../images/githubLogo.png'
import instagramLogo from '../images/instagramLogo.png'

const imgStyle = {
    width: 100,
    height: 100,
    margin: 10,
}

function FaceBookLogo() {
    return <img className={"FaceBookLogo"} style={imgStyle} src={facebookLogo} alt={"FaceBookLogo"}/>
}
function GithubLogo() {
    return <img className={"GithubLogo"} style={imgStyle} src={githubLogo} alt={"GithubLogo"}/>
}
function InstagramLogo() {
    return <img className={"InstagramLogo"} style={imgStyle} src={instagramLogo} alt={"InstagramLogo"}/>
}
export {FaceBookLogo,GithubLogo, InstagramLogo};


