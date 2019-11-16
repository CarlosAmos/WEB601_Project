import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #0a3d00;
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
        <Navbar expand="lg">
            <Navbar.Brand href="/">Nelson Adventures</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/Home/Home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Trail/Trail">Trail</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Map/Map">Map</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Planner/Planner">Planner</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Events/Events">Events</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/TrailManager/TrailHome">Trail-Manager</Nav.Link></Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)