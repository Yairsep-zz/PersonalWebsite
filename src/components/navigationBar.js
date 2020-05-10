import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home"
import ContactMe from "./ContactMe"
import Projects from "./Projects"
import SocialNetTable from "./SocialNetworking";
import Subscribe from "./Subscribe";
import Travelling from "./Travelling";

function NavigationBar() {
    return <div>
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Explore</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/contactMe">Contact Me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/socialNet">Social Networking</Nav.Link>
                    <Nav.Link href="/subscribe">Subscribe</Nav.Link>
                    <Nav.Link href="/travelling">Travelling</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/contactMe">
                    <ContactMe />
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/socialNet">
                    <SocialNetTable />
                </Route>
                <Route path="/subscribe">
                    <Subscribe/>
                </Route>
                <Route path="/travelling">
                    <Travelling />
                </Route>
            </Switch>
        </Router>
    </div>
}

export default NavigationBar;