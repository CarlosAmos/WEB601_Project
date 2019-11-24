import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Roboto&display=swap');

.navbar {
    background-color: #0a3d00;
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
}

.navbar-brand, .navbar-nav .nav-link {
    color: white;

&:hover {
    color: Yellow;
    
}

.dropdown:hover {
    color: Yellow;
}

.dropdown-content {
    background-color: #0a3d00;
}

}
`;

export const NavBar = () => (
    <Styles>
        <Navbar sticky="top" expand="lg">
            <Navbar.Brand href="/">Nelson Adventures</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/Home/Home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Trail/Trail">Trail</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="disablesd" disabled>Map</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Planner/Planner">Planner</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Events/Events">Events</Nav.Link></Nav.Item>
                                  
                </Nav>
                <Nav pullRight>
                <Nav.Item><Nav.Link href="/TrailManager/TrailHome">Trail-Manager</Nav.Link></Nav.Item>      
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)