import React from 'react';
//import styled from 'styled-components';
import Home1 from './Images/Home1.jpg';
import { Container, Col, Row } from 'react-bootstrap';

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

export const Map = () => (
    <Container>
    <div className="col-12">
    <Row className="justify-content-md-center" height='100'>
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
        </Row>
        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="4">
            <h2>Legend Here</h2>
            <p> Legend 1</p>
            </Col>
        <Col xs="12" md="8">
            <h2>Trail Description</h2>
            <p>The description of the trail will be here</p>
            </Col>

        </Row>

    </div>
    </Container>
)