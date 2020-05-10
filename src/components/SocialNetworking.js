import React from 'react';
import {FaceBookLogo, GithubLogo, InstagramLogo} from "./images";
import Table from "react-bootstrap/Table"
import '../css/SocialNetworking.css';

function SocialNetTable(){
    return <Table striped bordered hover className={"socialNetTable"}>
        <thead>
        <tr>
            <th>Social Network</th>
            <th>Link</th>
            <th>Details</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Facebook <br/><FaceBookLogo /></td>
            <td><article>
                <a href="https://facebook.com/Yairsep">
                    <h3>My facebook profile</h3>
                </a>
            </article></td>
            <td>This is my facebook profile</td>
        </tr>
        <tr>
            <td>Instagram<br/><InstagramLogo /></td>
            <td><section>
                <article>
                    <a href="https://instagram.com/Yairsep">
                        <h3>My Instagram profile</h3>
                    </a>
                </article>
            </section>
            </td>
            <td>This is my Instagram profile</td>
        </tr>
        <tr>
            <td>Github<br/><GithubLogo/></td>
            <td><section>
                <article>
                    <a href="https://github.com/Yairsep">
                        <h3>My github profile</h3>
                    </a>
                </article>

            </section></td>
            <td>This profile contains Repositories of projects I have made during SPL Course</td>
        </tr>
        </tbody>
    </Table>
}

export default SocialNetTable;