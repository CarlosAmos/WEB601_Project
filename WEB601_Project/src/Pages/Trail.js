import React from 'react';
//import styled from 'styled-components';
import Home1 from '../Images/Home1.jpg';
import { Container, Col, Row, Button } from 'react-bootstrap';

/*const Styles = styled.div`
.image{
    width: 100%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}
.ContentBoxes{
    border: '4px solid black' ;
}

}

`;*/

export const Trail = () => (
    <Container>
    <div className="col-12">
    <Row height='150'>
        <div height='150px'>
        <Button variant="outline-success">Add Trail</Button>
        </div>
        </Row>
        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="4"> 
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
        <Col xs="12" md="4">
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
        <Col xs="12" md="4">
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
                     
        </Row>      
        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="4">
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
        <Col xs="12" md="4">
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
        <Col xs="12" md="4">
        <img src={Home1} alt="sefeee" width="100%"></img>
            <h2>Trail 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
        </Row>       

    </div>
    </Container>
)